import React from 'react';
import { View } from 'react-native';
import { NativeRouter as Router, Route, Switch } from 'react-router-native';
import HotelsContainer from './containers/HotelsContainer';
import HotelContainer from './containers/HotelContainer';
import Login from './components/auth/Login';
import LoginContainer from './containers/LoginContainer';

const App = () => {
  return (
    <Router>
      <View>
        <Switch>
          <Route path="/hotels/:id" component={HotelContainer} />
          <Route path="/home" component={HotelsContainer} />        
          <Route path="/" component={LoginContainer} />        
        </Switch>
      </View>
    </Router>
  );
}

export default App;