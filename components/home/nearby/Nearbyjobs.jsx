import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import styles from './nearbyjobs.style'
import { useRouter } from 'expo-router'
import { COLORS,SIZES } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

import useFtech from '../../../hook/useFetch';

const Nearbyjobs = () => {
  const router = useRouter();
  const {data, isLoading, error} = useFtech
  ('search',{
      query: 'React Developer',
      num_pages: 1,
    })


  return (
    <View style= {styles.container}>
      <View style= {styles.header}>
        <Text style= {styles.headerTitle}>Nearby jobs</Text>
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
          data?.map((job)=> (
            <NearbyJobCard
            job ={job}
            key={`nearby-joy-${job?.job_id}`}
            handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs