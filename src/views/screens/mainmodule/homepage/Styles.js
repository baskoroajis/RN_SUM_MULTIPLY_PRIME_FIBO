import { StyleSheet } from 'react-native';

const HomepageStyle = StyleSheet.create({
  tabBarContainer: {
    paddingTop: 15,
    backgroundColor: 'white'
  },
  tabBarStyle: {
    backgroundColor: '#fff',
    elevation: 0
  },
  tabBarIndicatorStyle: {
    backgroundColor: '#000',
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: -3
    },
    shadowColor: '#000000',
    elevation: 4
  },
  searchNavigation: {
    height: 20,
    width: 20,
    marginLeft: 5
  }
});

export default HomepageStyle;
