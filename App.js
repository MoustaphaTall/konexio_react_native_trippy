import React from 'react';
import { View } from 'react-native';
import { NativeRouter as Router, Route, Switch } from 'react-router-native';
import HotelsContainer from './containers/HotelsContainer';
import HotelContainer from './containers/HotelContainer';

const App = () => {
  return (
    <Router>
      <View>
        <Switch>
          <Route path="/hotels/:id" component={HotelContainer} />
          <Route path="/" component={HotelsContainer} />        
        </Switch>
      </View>
    </Router>
  );
}

export default App;