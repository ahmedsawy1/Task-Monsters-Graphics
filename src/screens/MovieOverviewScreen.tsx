import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {SharedStyles} from '../styles/sharedStyles';

interface IParams {
  title: string;
  id: string;
  tagline: string;
  vote_average: string;
  imdb_id: string;
}
export default function MovieOverviewScreen() {
  const {params}: IParams = useRoute();
  // console.log('=================params===================');
  // console.log(JSON.stringify(params, null, 3));
  // console.log('====================================');

  return (
    <SafeAreaView style={{...SharedStyles.paddingHorizontal}}>
      <Text>imdb_id: {params?.imdb_id}</Text>
      <Text>title: {params?.title}</Text>
      <Text>tagline: {params?.tagline}</Text>
      <Text>budget: {params?.budget}</Text>
      <Text>vote_average: {params?.vote_average}</Text>
    </SafeAreaView>
  );
}
