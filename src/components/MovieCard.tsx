import React, {FC} from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PixelPerfect} from '../styles/stylesConstants';
import {INavigation} from '../interfaces/hooks';
import {useAppDispatch} from '../store/hook';
import {getMovieByIdAction} from '../store/actions/moviesAction';

interface Props {
  title?: string;
  id?: string;
  tagline?: string;
  vote_average?: number | string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}
const MovieCard: FC<Props> = ({title, id, vote_average, style}) => {
  const navigation: INavigation = useNavigation();
  const dispatch = useAppDispatch();

  onCardPress = () => {
    dispatch(
      getMovieByIdAction({
        movieId: id,
        cb(data) {
          navigation.navigate('MovieOverviewScreen', data);
        },
      }),
    );
  };

  return (
    <Pressable onPress={onCardPress} style={[styles.container, style]}>
      <Text> title : {title} </Text>
      <Text> vote_average : {vote_average} </Text>
    </Pressable>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    padding: PixelPerfect(10),
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
