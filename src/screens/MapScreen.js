import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { CustomMarker } from "../components/CustomMarker";
import { useLocation } from "../hooks/useLocation";
import { MapScreenCard } from "../components/MapScreenCard";

const CARD_WIDTH = 350;

const markers = [
  {
    coordinate: {
      latitude: 50.46126788110566,
      longitude: 30.525431798980875
    },
    price: 1100,
    rating: 8.5,
    stars: 4,
    isLiked: false
  },
  {
    coordinate: {
      latitude: 50.46282384670106,
      longitude: 30.51493479089489
    },
    price: 1300,
    rating: 9.1,
    stars: 5,
    isLiked: true
  },
  {
    coordinate: {
      latitude: 50.459175,
      longitude: 30.510503
    },
    price: 920,
    rating: 7.4,
    stars: 3,
    isLiked: false
  },
  {
    coordinate: {
      latitude: 50.45694316324058,
      longitude: 30.517690693378363
    },
    price: 1500,
    rating: 9.5,
    stars: 5,
    isLiked: true
  },
  {
    coordinate: {
      latitude: 50.45594316324058,
      longitude: 30.516690693378363
    },
    price: 860,
    rating: 7.5,
    stars: 3,
    isLiked: false
  }
];

export const MapScreen = () => {
  const { getLocation, location } = useLocation();
  const scrollViewRef = useRef(null);
  const mapRef = useRef(null);
  const mapAnimation = new Animated.Value(0);
  let mapIndex = 0;

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    mapAnimationSubscribe();
  });

  function mapAnimationSubscribe() {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index >= markers.length) {
        index = markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { coordinate } = markers[index];
          mapRef.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: 0.04,
              longitudeDelta: 0.04
            },
            350
          );
        }
      }, 10);
    });
  }

  const interpolations = markers.map((_marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.2, 1],
      extrapolate: "clamp"
    });

    return { scale };
  });

  function markerClick(index) {
    let x = index * CARD_WIDTH;
    scrollViewRef.current.scrollTo({ x, animated: true });
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        region={{ ...location, latitudeDelta: 0.04, longitudeDelta: 0.04 }}
        onRegionChange={() => {}}
      >
        {markers.map((marker, index) => (
          <CustomMarker
            scale={interpolations[index].scale}
            key={index}
            coordinate={marker.coordinate}
            price={marker.price}
            click={() => markerClick(index)}
          />
        ))}
      </MapView>

      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 10 }}
        snapToInterval={CARD_WIDTH + 20}
        style={styles.scrollView}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation
                }
              }
            }
          ],
          { useNativeDriver: true }
        )}
      >
        {markers.map((hotel, index) => (
          <MapScreenCard
            key={index}
            title="Козацький отель"
            rate={hotel.rating}
            price={hotel.price}
            stars={hotel.stars}
            isLiked={hotel.isLiked}
          />
        ))}
      </Animated.ScrollView>
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
  }
});
