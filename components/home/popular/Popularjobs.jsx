import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import { COLORS,SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

import useFtech from '../../../hook/useFetch';

const Popularjobs = () => {
  const router = useRouter();
  const {data, isLoading, error} = useFtech
  ('search',{
      query: 'React Developer',
      num_pages: 1,
    })

    const [selectedJob, setSelectedJob] = useState();
    console.log(data);
  
    const handleCardPress = (item) => {
      router.push(`/job-details/${item.job_id}`);
      setSelectedJob(item.job_id);
    };

  return (
    <View style= {styles.container}>
      <View style= {styles.header}>
        <Text style= {styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style= {styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading?(
          <ActivityIndicator size= 'large' colors={COLORS.primary}/>
        ):error ? (
          <Text>Something went wrong</Text>
        ):(
          // making a horizontal scrollbar under job section
          <FlatList
            data= {data}
            renderItem={({item}) => (
              <PopularJobCard
                item = {item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item=> item?.job_id}
            contentContainerStyle= {{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs