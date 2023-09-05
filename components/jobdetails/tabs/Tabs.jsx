import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { SIZES } from '../../../constants'
import styles from './tabs.style'


const TabButton = ({name, activeTab, onHandleSearchType}) => {
  return (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
}


const Tabs = ({tabs, activeTab, setactiveTab}) => {
  return (
    <View style= {styles.container}>
      <FlatList
      data = {tabs}
      renderItem={({item}) => (
        <TabButton
          name={item}
          activeTabs={activeTab}
          onHandleSearchType={()=> setactiveTab(item)}
          />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item}
      contentContainerStyle= {{columnGap: SIZES.small /2}}
      />
    </View>
  )
}

export default Tabs