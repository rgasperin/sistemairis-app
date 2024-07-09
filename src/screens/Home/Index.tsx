import React, { useState } from "react";
import { Image, Pressable, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { styles } from "./Styles";

import sistemaIrisLogo from "../../../assets/sistemairis-logo.png";

import { PanicButton } from "../../components/PanicButton/Index";
import { FormTextInput } from "../../components/FormTextInput/Index";

export function Home() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  function handleButton() {
    setIsFormVisible(true);
    console.log("entrei");
  }

  return (
    <View style={styles.container}>
      {!isFormVisible ? (
        <>
          <Image style={styles.imgIris} source={sistemaIrisLogo} />
          <PanicButton onPress={handleButton} />
        </>
      ) : (
        <View style={styles.form}>
          <FormTextInput />
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
