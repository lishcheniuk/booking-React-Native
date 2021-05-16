import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { CustomMarker } from "../components/CustomMarker";
import { useLocation } from "../hooks/useLocation";
import { THEME } from "../theme";
import { AppText } from "../components/ui/AppText";
import { AppTextBold } from "../components/ui/AppTextBold";

const CARD_WIDTH = 350;

export const MapScreen = () => {
  const [color, setColor] = useState(true);
  const { getLocation } = useLocation();

  function onRegionChange(region) {
    console.log(region);
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        region={{
          latitude: 50.46109762315611,
          longitude: 30.518888141959906,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
        }}
        onRegionChange={onRegionChange}
      >
        <CustomMarker />
      </MapView>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 10 }}
        pagingEnabled
        snapToInterval={CARD_WIDTH - 20}
        style={styles.scrollView}
      >
        <View style={styles.card}>
          <View style={styles.cardMain}>
            <Text numberOfLines={1} style={styles.cardTitle}>
              Козацький отель
            </Text>

            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              <FontAwesome name="star" size={12} color={THEME.GREY_COLOR} />
              <FontAwesome name="star" size={12} color={THEME.GREY_COLOR} />
              <FontAwesome name="star" size={12} color={THEME.GREY_COLOR} />
              <FontAwesome name="star" size={12} color={THEME.GREY_COLOR} />
            </View>

            <View style={{ flexDirection: "row" }}>
              <AppText style={styles.cardRate}>8.5</AppText>
              <AppText style={styles.cardRateText}> Замечательно</AppText>
            </View>

            <View style={{ marginTop: "auto", alignItems: "flex-end" }}>
              <AppTextBold
                style={{
                  fontSize: 16,
                  color: "#10ba35"
                }}
              >
                980 UAH
              </AppTextBold>

              <AppTextBold style={{ color: THEME.GREY_COLOR }}>
                Booking.com
              </AppTextBold>
            </View>
          </View>
          <Image
            source={{
              uri: "https://pix6.agoda.net/hotelImages/189/189984/189984_14100914030022645655.jpg"
            }}
            style={{ width: "45%", height: "100%" }}
          />
        </View>

        <View style={styles.card}>
          <View style={styles.cardMain}>
            <Text numberOfLines={1} style={styles.cardTitle}>
              Козацький отель
            </Text>

            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              <FontAwesome name="star" size={12} color={THEME.GREY_COLOR} />
              <FontAwesome name="star" size={12} color={THEME.GREY_COLOR} />
              <FontAwesome name="star" size={12} color={THEME.GREY_COLOR} />
              <FontAwesome name="star" size={12} color={THEME.GREY_COLOR} />
            </View>

            <View style={{ flexDirection: "row" }}>
              <AppText style={styles.cardRate}>8.5</AppText>
              <AppText style={styles.cardRateText}> Замечательно</AppText>
            </View>

            <View style={{ marginTop: "auto", alignItems: "flex-end" }}>
              <AppTextBold
                style={{
                  fontSize: 16,
                  color: "#10ba35"
                }}
              >
                980 UAH
              </AppTextBold>

              <AppTextBold style={{ color: THEME.GREY_COLOR }}>
                Booking.com
              </AppTextBold>
            </View>
          </View>
          <Image
            source={{
              uri: "https://pix6.agoda.net/hotelImages/189/189984/189984_14100914030022645655.jpg"
            }}
            style={{ width: "45%", height: "100%" }}
          />
        </View>

        <View style={styles.card}>
          <View style={styles.cardMain}>
            <Text numberOfLines={1} style={styles.cardTitle}>
              Козацький отель
            </Text>

            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              <FontAwesome name="star" size={12} color={THEME.GREY_COLOR} />
              <FontAwesome name="star" size={12} color={THEME.GREY_COLOR} />
              <FontAwesome name="star" size={12} color={THEME.GREY_COLOR} />
              <FontAwesome name="star" size={12} color={THEME.GREY_COLOR} />
            </View>

            <View style={{ flexDirection: "row" }}>
              <AppText style={styles.cardRate}>8.5</AppText>
              <AppText style={styles.cardRateText}> Замечательно</AppText>
            </View>

            <View style={{ marginTop: "auto", alignItems: "flex-end" }}>
              <AppTextBold
                style={{
                  fontSize: 16,
                  color: "#10ba35"
                }}
              >
                980 UAH
              </AppTextBold>

              <AppTextBold style={{ color: THEME.GREY_COLOR }}>
                Booking.com
              </AppTextBold>
            </View>
          </View>
          <Image
            source={{
              uri: "https://pix6.agoda.net/hotelImages/189/189984/189984_14100914030022645655.jpg"
            }}
            style={{ width: "45%", height: "100%" }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10
  },
  card: {
    flexDirection: "row",
    height: 200,
    width: CARD_WIDTH,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 10,
    overflow: "hidden",
    marginHorizontal: 10
  },
  cardMain: {
    width: "55%",
    padding: 15
  },
  cardTitle: {
    fontFamily: "roboto-bold",
    color: THEME.BLACK_COLOR,
    fontSize: 16
  },
  cardRate: {
    color: "#fff",
    borderRadius: 10,
    backgroundColor: "#10ba35",
    paddingHorizontal: 5,
    overflow: "hidden",
    fontSize: 14,
    fontWeight: "bold"
  },
  cardRateText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#10ba35"
  }
});
