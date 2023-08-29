import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flax: 1,
    padding: 30,
  },
  title: {
    fontFamily: 'Acme-Regular',
    fontSize: 16,
    color: '#e7305b',
    marginTop: 16,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 28,
  },
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Content: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  headerText: {
    fontFamily: 'Acme-Regular',
    fontSize: 24,
    color: '#e7305b',
    letterSpacing: 1,
  },
  headerImage: {
    width: 24,
    height: 24,
  },
  cards: {
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#e7305b',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardsContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'black',
  },
  modalContent: {
    flex: 1,
  },
  toggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e7305b',
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
  },
  close: {
    marginTop: 20,
    marginBottom: 0,
  },
  Textinput: {
    borderWidth: 2,
    borderColor: '#e7305b',
    padding: 10,
    margin: 10,
    fontSize: 18,
    borderRadius: 15,
  },
  button: {
    width: 10,
    padding: 10,
    borderRadius: 15,
  },
});

export const images = {
  rating: {
    1: require('../assets/rating-1.png'),
    2: require('../assets/rating-2.png'),
    3: require('../assets/rating-3.png'),
    4: require('../assets/rating-4.png'),
    5: require('../assets/rating-5.png'),
  },
};
