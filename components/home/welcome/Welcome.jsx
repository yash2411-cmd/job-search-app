import React from 'react'
import { useState } from 'react';

import { 
  View,
  Text,
  Image, 
  TouchableOpacity,
  FlatList,
  TextInput
 } from 'react-native';
 import { useRouter } from 'expo-router';
import { SIZES, icons } from '../../../constants';
import styles from './welcome.style'

const jobTypes= ["Full-time", "Part-time", "Freelance", "Intership"]

const Welcome = () => {
  const router = useRouter();
  const [activeJobTypes,setactiveJobType] = useState('Full-time')

  return (
    <View>
      <View style={styles.container}>
        <Text style= {styles.userName} >Hello Yash</Text>
        <Text style={styles.welcomeMessage}>Find a job that's best for you</Text>
      </View>

      {/* for searchbar  */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder='What are you Searching for?'

          />
        </View>

        {/* making the search button on right side of searchbar. */}
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
           <Image
            source={icons.search}
            resizeMode='contain'
            style= {styles.searchBtnImage}
           />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        {/* listing categories for types of jobs the constant array is defined on the top  */}
        <FlatList
          data= {jobTypes}
          renderItem = {({item}) => (
            <TouchableOpacity 
              style={styles.tab(activeJobTypes,item)}
              onPress={()=>{
                setactiveJobType(item);
                router.push('/search/$item')
              }}
            >
              <Text style= {styles.tabText(activeJobTypes,item)}>{item}</Text>
            </TouchableOpacity>
          )}
              keyExtractor={item => item}
              contentContainerStyle= {{columnGap:SIZES.small}}
              horizontal
        />
      </View>
    </View>
  )
}

export default Welcome