import React, { useState } from "react";
import { View, TextInput, Pressable, Text, Image } from "react-native";

import sistemaIrisLogo from "../../../assets/sistemairis-logo.png";

import { styles } from "./Styles";

export function FormTextInput() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit() {
    alert(`Name: ${name}\nLocation: ${location}\nDescription: ${description}`);
  }

  return (
    <>
      <Image style={styles.imgIris} source={sistemaIrisLogo} />
      <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Escreva seu nome" />
      <TextInput style={styles.input} onChangeText={setLocation} value={location} keyboardType="numeric" placeholder="Escreva sua localização" />
      <TextInput style={styles.textArea} onChangeText={setDescription} value={description} placeholder="Escreva sua descrição" />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.text}>Enviar</Text>
      </Pressable>
    </>
  );
}
