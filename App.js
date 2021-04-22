import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FacebookScreen from "./screens/FacebookScreen";
import InstagramScreen from "./screens/InstagramScreen";


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: { screen: FacebookScreen},
  Instagram: { screen: InstagramScreen}
});
defaultNavigationOptions:({navigation})=>({
  tabBarIcon:({})=>{
    const routeName=navigation.state.routeName
    if(routeName==='FacebookScreen'){
      return(
        <Image source={require('./assets/fbIcon.jfif')} 
        style={{width:50,height:50}}/>
      )
    }
    else if(routeName==='InstagramScreen'){
      return(
        <Image source={require('./assets/inIcon.png')}
        style={{width:50,height:50}}/>
      )
    }
  }
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
