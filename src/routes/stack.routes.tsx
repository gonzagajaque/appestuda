import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { First } from '../pages/First';
import { Second } from '../pages/Second';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: '#fff'
            },
        }}
    >
        <stackRoutes.Screen
            name='First'
            component={First}
        />

        <stackRoutes.Screen
            name='Second'
            component={Second}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes;