import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { WeekendScreen } from "../screens/WeekendScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsAppScreen } from "../screens/SettingsAppScreen";
import { THEME } from "../theme";
import { MapScreen } from "../screens/MapScreen";
import { DatePickerScreen } from "../screens/DatePickerScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { PlacesScreen } from "../screens/PlacesScreen";

const SearchNavigator = createStackNavigator({
  Main: HomeScreen,
  Map: MapScreen,
  Date: DatePickerScreen,
  Search: SearchScreen,
  Places: PlacesScreen
});

const WeekendNavigator = createStackNavigator(
  {
    Main: WeekendScreen
  },
  {
    headerMode: "none"
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Main: FavoritesScreen
  },
  {
    headerMode: "none"
  }
);

const SettingsNavigator = createStackNavigator(
  {
    Main: SettingsAppScreen
  },
  {
    headerMode: "none"
  }
);

const bottomTabsConfig = {
  Search: {
    screen: SearchNavigator,
    navigationOptions: {
      tabBarLabel: "Поиск",
      tabBarIcon: (info) => (
        <AntDesign name="search1" size={24} color={info.tintColor} />
      )
    }
  },
  Weekend: {
    screen: WeekendNavigator,
    navigationOptions: {
      tabBarLabel: "Карта",
      tabBarIcon: (info) => (
        <Ionicons name="location-sharp" size={24} color={info.tintColor} />
      )
    }
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarLabel: "Избранное",
      tabBarIcon: (info) => (
        <Ionicons name="heart" size={24} color={info.tintColor} />
      )
    }
  },
  Settings: {
    screen: SettingsNavigator,
    navigationOptions: {
      tabBarLabel: "Настройки",
      tabBarIcon: (info) => (
        <Ionicons name="settings-sharp" size={24} color={info.tintColor} />
      )
    }
  }
};

const BottomNavigator = createBottomTabNavigator(bottomTabsConfig, {
  tabBarOptions: {
    activeTintColor: THEME.PRIMARY_COLOR,
    style: {
      paddingBottom: 5,
      paddingTop: 5,
      height: 55,
      borderTopColor: THEME.GREY_COLOR_LIGHT
    },
    labelStyle: {
      fontFamily: "roboto-bold"
    }
  }
});

export const AppNavigation = createAppContainer(BottomNavigator);
