import React from "react";
import { View, Button, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Colors from "../constants/Colors";

function ImageSelector(props) {
  async function buttonPressHandler(buttonType) {
    let selectedImage;
    
    const imageProperties = {
      allowsEditing: true,
      aspect: [4, 3],
    };

    if (buttonType === "camera") {
      const resultCamera = await Permissions.askAsync(Permissions.CAMERA);
      if (resultCamera.status !== "granted") {
        Alert.alert(
          "Insufficient privilege",
          "Permission required to access camera",
          [{ text: "Ok" }]
        );
        return;
      } else {
        selectedImage = await ImagePicker.launchCameraAsync(imageProperties);
      }
    } else {
      const resultMedia = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!resultMedia) {
        Alert.alert(
          "Insufficient privilege",
          "Permission required to access camera",
          [{ text: "Ok" }]
        );
        return;
      } else {
        selectedImage = await ImagePicker.launchImageLibraryAsync(
          imageProperties
        );
      }
    }

    if (selectedImage.cancelled) {
        return;
    }
    props.onSelect(selectedImage.uri);
  }

  return (
    <View>
      <View style={styles.buttonView}>
        <Button
          title="Click Photo"
          onPress={buttonPressHandler.bind(this, "camera")}
          color={Colors.primary}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          title="Camera Roll"
          onPress={buttonPressHandler.bind(this, "camera_roll")}
          color={Colors.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    margin: 10,
  },
});

export default ImageSelector;
