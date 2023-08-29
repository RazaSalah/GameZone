import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from '../styles/Global';
import Cards from '../Shared/Cards';
import ReviewForm from './ReviewForm';

export default function Home({navigation}) {
  const [visiblty, setVisibilty] = useState(false);
  const pressHandler = () => {
    // the name of the screen that we have given in stack navigation
    navigation.navigate('ReviewDetails');
  };

  const [review, setReview] = useState([
    {
      name: 'Zelda , Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      name: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {name: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'},
  ]);

  const AddReview = review => {
    review.key = Math.random().toString();
    setReview(currentReview => {
      return [review, ...currentReview];
    });

    setVisibilty(false);
  };

  return (
    <View style={styles.container}>
      <Icon
        name="plus"
        size={24}
        color="#900"
        style={styles.toggle}
        onPress={() => setVisibilty(true)}
      />
      <Modal
        visible={visiblty}
        animationType="slide"
        style={styles.modalContent}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContainer}>
            <Icon
              name="close"
              size={24}
              color="#900"
              style={{...styles.toggle, ...styles.close}}
              onPress={() => setVisibilty(false)}
            />
            <ReviewForm AddReview={AddReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <FlatList
        data={review}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Cards>
              <Text style={styles.title}>{item.name}</Text>
            </Cards>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
