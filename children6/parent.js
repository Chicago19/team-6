import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Parent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        We have no friends!
        <Button
          title="Add some friends"
        />
      </View>
    );
  }