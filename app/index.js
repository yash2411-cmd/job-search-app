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
                
                // setting up the navigation bar or header with different properties
                options={{
                    headerStyle: {backgroundColor:COLORS.lightWhite},
                    headerShadowVisible: false, // using this to ignore the shadow of the title page line.
                    // additional property header left: that is an arrow function
                    headerLeft: () => (
                        <ScreenHeaderBtn  iconUrl= {icons.menu} dimension='60%'/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn  iconUrl= {icons.profile} dimension='100%'/>
                    ),
                    headerTitle: " "
                }}
                />
                {/* //adding below nav bar */}
                <ScrollView showsVerticalScrollIndicator={false}>  
                    <View style= {{flex:1, padding: SIZES.medium}}>
                        {/* components */}
                        <Welcome
                        
                        />
                        <Nearbyjobs/>
                        <Popularjobs/>
                        
                    </View>

                </ScrollView>
        </SafeAreaView>
    )
}

export default Home;