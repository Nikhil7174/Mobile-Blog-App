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
          <Text style={styles.headerText}>JS Bro</Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1682639497',
          }}
          style={{height: 330}}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={4}>
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
            <Text>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              openWebsite(
                'https://www.linkedin.com/in/nikhil-singh-64a414160/',
              );
            }}>
            <Text>Follow Me</Text>
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
  },
  card: {},
  elevated: {},
  headingContainer: {},
  headerText: {},
  bodyContainer: {},
  footerContainer: {},
});
