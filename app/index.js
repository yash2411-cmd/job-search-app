import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import { useState } from 'react';
import {Stack, useRouter} from 'expo-router';

import {COLORS, icons, images, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, Welcome, ScreenHeaderBtn} from '../components'

const Home = () => {
    const router = useRouter();
    return(
        <SafeAreaView style= {{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor:COLORS.lightWhite},
                    headerShadowVisible: false,
                }}
            />
        </SafeAreaView>
    )
}

export default Home;