import React from 'react';
import { ScrollView } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import SimpleCard from '../components/SimpleCard';
const MusicList = (props) => {
  return ( <ScrollView>
    <SimpleCard></SimpleCard>
    <SimpleCard></SimpleCard>
    <SimpleCard></SimpleCard>
    <SimpleCard></SimpleCard>
    <SimpleCard></SimpleCard>
  </ScrollView> );
}
 
export default MusicList;