import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import User from "./UserScreen";
import Home from "./HomeScreen";
import { Image, View } from "react-native";

const Tab = createBottomTabNavigator();
const Lab7 = () =>{
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}
                    options={{
                        tabBarIcon:({forcused}) =>{
                            return(
                                <View>
                                    <Image 
                                        source={require('../lab7/image/home.png')}
                                        resizeMode = 'contain'
                                        style={{ width:20}}
                                        />
                                        
                                   
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen name="User" component={User}
                  options={{
                    tabBarIcon:({forcused}) =>{
                        return(
                            <View>
                                <Image 
                                    source={require('../lab7/image/user.png')}
                                    resizeMode = 'contain'
                                    style={{ width:20}}
                                    />
                                    
                               
                            </View>
                        )
                    }
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default Lab7;