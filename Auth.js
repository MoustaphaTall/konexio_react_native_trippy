import { AsyncStorage } from 'react-native';
import Config from './Config';

class Auth {
  constructor() {
    // Create the basic user
    this.user = Object.assign({}, this.defaultUser);
  }

  defaultUser = {
    _id: null,
    token: null,
    username: null,
    thumbnail: null,
    firstName: null,
    dob: null
  };

  setUser(user) {
    this.user = user;
  }

  async getUser() {
    const userStr = await AsyncStorage.getItem('user');

    console.log('userStr', userStr);
    const user = JSON.parse(userStr);
    this.user = user;
    return this.user || {};
  }

  isAuthenticated() {
    if (this.user._id) {
      return true;
    }
    return false;
  }

  async authenticate(user) {
    await AsyncStorage.setItem('user', JSON.stringify(user));
    this.setUser(user);
  }

  signup(user) {
    return fetch(`${Config.host}/api/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(json => {
        if (!json.error) {
          this.authenticate(json);
        }
        return json;
      });
  }

  login(user = {}) {
    return fetch(`${Config.host}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(json => {
        if (!json.error) {
          this.authenticate(json);
        }
        return json;
      });
  }

  logout() {
    AsyncStorage.removeItem('user');
    this.setUser(Object.assign({}, this.defaultUser));
  }

  // Authentification obligatoire
  getProfile(profile = {}) {
    return new Promise((resolve, reject) => {
      if (this.isAuthenticated()) {
        return fetch(`${Config.host}/api/users/${profile._id}`, {
          headers: {
            Authorization: `Bearer ${this.user.token}`
          }
        })
          .then(res => res.json())
          .then(json => {
            // console.log("Auth#getProfile json", json);
            resolve(json);
          });
      }
      reject({
        error: 'You must be authenticated'
      });
    });
  }
}

export default new Auth();