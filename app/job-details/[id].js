import { Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, View } from 'react-native';
import { Stack, useRouter, useSearchParams} from 'expo-router';
import { useCallback,useState } from 'react';
import { Company, JobAbout, JobFooter,JobTabs, ScreenHeaderBtn,Specifics } from '../../components';
import { COLORS, SIZES, icons } from '../../constants';
import useFetch from '../../hook/useFetch';


const JobDetails = () => {
    const params = useSearchParams();
    const router= useRouter();

    const [data,isLoading, error, refetch] = useFetch('job-details', {
        job_id: params.id
    });

  return (
    <SafeAreaView style= {{flex:1, backgroundColor:COLORS.lightWhite}}
    
    >
        <Stack.Screen
            options={{
                headerStyle:{ backgroundColor:COLORS.lightWhite},
                headerShadowVisible: false,
                headerBackVisible:false,
            }}
        
        />
        
    </SafeAreaView>
  )
}

export default JobDetails

