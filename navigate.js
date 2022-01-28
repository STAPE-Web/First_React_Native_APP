import React from 'react'
import Main from './pages/Main';
import Choose from './pages/Choose';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Main'
                component={Main}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Choose'
                component={Choose}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}