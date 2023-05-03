import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Sam Rojer',
      status: 'Making your PhonePay smooth',
      imageUrl:
        'https://www.turing.com/blog/wp-content/uploads/2022/02/great-programmer.jpg',
    },
    {
      uid: 2,
      name: 'Jim Killer',
      status: 'Making your GPay smooth',
      imageUrl:
        'https://www.cio.com/wp-content/uploads/2023/02/worlds-best-programmers-primary.jpg-100689098-orig.jpeg?quality=50&strip=all',
    },
    {
      uid: 3,
      name: 'Tom Hunter',
      status: 'Making your PayPal smooth',
      imageUrl: 'https://sowelo.eu/wp-content/uploads/2017/05/programmer.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 20,
  },
  container: {
    marginVertical: 12,
  },
  userCard: {
    width: '90%',
    height: 120,
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
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
  userImage: {
    height: 90,
    width: 90,
    borderRadius: 50,
    marginRight: 15,
  },
  userName: {
    marginVertical: 10,
    alignItems: 'center',
    fontWeight: '600',
  },
  userStatus: {},
});
