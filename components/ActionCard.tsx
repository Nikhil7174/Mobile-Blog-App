import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in Dota 2</Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1682639497',
          }}
          style={{height: 330}}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.paraText} numberOfLines={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorem
            nesciunt quas magnam. Architecto itaque velit tempore deserunt ea
            repellat mollitia ex dolore distinctio eaque. Iste alias tempore
            fugit delectus voluptatem dolor velit!
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://mashable.com/category/gaming');
            }}>
            <Text style={styles.linkText}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              openWebsite(
                'https://www.linkedin.com/in/nikhil-singh-64a414160/',
              );
            }}>
            <Text style={styles.linkText}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 20,
  },
  card: {
    width: '90%',
    height: 550,
    borderRadius: 6,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  elevated: {
    backgroundColor: '#2a0845',
    elevation: 10,
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    marginVertical: 12,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginVertical: 5,
    color: 'white',
  },
  bodyContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paraText: {
    color: 'white',
  },
  linkText: {
    color: 'black',
    padding: 5,
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
  },
});
