import React, { useState } from "react";
import { Pressable, View, Text } from "react-native";

import { styles } from "./Styles";

export function PanicButton({ onPress }: { onPress: () => void }) {
  return (
    <>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>SOCORRO</Text>
      </Pressable>
    </>
  );
}
