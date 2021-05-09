import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { SearchView } from "../components/SearchView";
import { RecentView } from "../components/RecentView";
import { RecentSearchCard } from "../components/RecentSearchCard";
import { RecentViewerCard } from "../components/RecentViewerCard";
import { NearbyHotels } from "../components/NearbyHotels";

export const HomeScreen = ({ navigation }) => {
  function toScreen(screen) {
    navigation.navigate(screen);
  }

  return (
    <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
      <View style={styles.logoWrap}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
      </View>

      <SearchView toScreen={toScreen} />

      <RecentView title="Последние поисковые запросы">
        <RecentSearchCard />
        <RecentSearchCard />
        <RecentSearchCard />
      </RecentView>

      <RecentView title="Недавно просмотренные">
        <RecentViewerCard />
        <RecentViewerCard />
      </RecentView>

      <NearbyHotels toScreen={toScreen} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logoWrap: {
    height: 80,
    paddingVertical: 17,
    marginTop: 10,
    marginBottom: 20
  },
  logo: {
    resizeMode: "contain",
    width: "100%",
    height: "100%"
  }
});

HomeScreen.navigationOptions = () => ({
  headerShown: false //скрыть заголовок
});
