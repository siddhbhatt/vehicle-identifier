import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import ImageSelector from "../components/ImageSelector";

function SelectPhoto(props) {
  function selectedImageHandler(imagePath) {
    props.navigation.navigate({
      routeName: "GetResults",
      params: {
        imagePath: imagePath,
      },
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.welcomeText}>
          Welcome to ANPR - Automatic Number Plate Recognition app{"\n"}
          <Text style={styles.actionText}>
            Click a photo or select one from camera roll{"\n"}
          </Text>
          <Text style={styles.actionText}>
            Ensure vechile registration number is well visible
          </Text>
        </Text>
      </View>

      <ImageSelector onSelect={selectedImageHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  textView: {
    marginVertical: 50,
    marginHorizontal: 25,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  actionText: {
    fontSize: 16,
    fontWeight: "normal",
  },
});

export default SelectPhoto;
