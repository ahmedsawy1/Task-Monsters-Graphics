import React, {FC, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../store/hook';
import {getMoviesAction} from '../store/actions/moviesAction';
import MovieCard from '../components/MovieCard';
import {IItem} from '../interfaces/items';
import {SharedStyles} from '../styles/sharedStyles';
import {PixelPerfect} from '../styles/stylesConstants';

interface Props {}

const HomeScreen: FC<Props> = ({}) => {
  const {movies, loader} = useAppSelector(s => s.moviesReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMoviesAction());
  }, []);

  return (
    <SafeAreaView style={[styles.container]}>
      {loader ? (
        <View style={styles.loader}>
          <ActivityIndicator size={PixelPerfect(50)} />
        </View>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item: IItem) => item.id.toString()}
          renderItem={({item}) => <MovieCard {...item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    ...SharedStyles.paddingHorizontal,
    flex: 1,
    paddingTop: 10,
  },
  loader: {
    flex: 1,
    ...SharedStyles.centred,
  },
});
