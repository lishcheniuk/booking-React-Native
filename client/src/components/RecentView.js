import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { AppTextBold } from "./ui/AppTextBold";

export const RecentView = ({ children, title }) => {
  return (
    <View style={styles.container}>
      <AppTextBold
        style={{
          textTransform: "uppercase",
          letterSpacing: 1.5,
          margin: 15
        }}
      >
        {title}
      </AppTextBold>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={150}
      >
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  }
});
