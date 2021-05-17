import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { WeekendScreen } from "../screens/WeekendScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsAppScreen } from "../screens/SettingsAppScreen";
import { MapScreen } from "../screens/MapScreen";
import { DatePickerScreen } from "../screens/DatePickerScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { SelectRoomsScreen } from "../screens/SelectRoomsScreen";
import { THEME } from "../theme";
import { DatePickerHeader } from "./DatePickerHeader";
import { MapHeader } from "./MapHeader";
import { SearchTextInput } from "../components/ui/SearchTextInput";
import { SearchScreenHeader } from "./SearchScreenHeader";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: THEME.PRIMARY_COLOR,
        style: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 55,
          borderTopColor: THEME.GREY_COLOR_LIGHT
        },
        labelStyle: {
          fontFamily: "roboto-regular",
          fontSize: 12,
          fontWeight: "600"
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Поиск",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="search1" size={focused ? 26 : 24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Weekend"
        component={WeekendScreen}
        options={{
          tabBarLabel: "Weekend",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="location-sharp"
              size={focused ? 26 : 24}
              color={color}
            />
          )
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Избранное",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="heart" size={focused ? 26 : 24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsAppScreen}
        options={{
          tabBarLabel: "Настройки",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="settings-sharp"
              size={focused ? 26 : 24}
              color={color}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTintColor: THEME.GREY_COLOR }}>
        <Stack.Screen
          name="Tabs"
          component={HomeTabs}
          options={{ headerShown: false }} //скрыть верхнюю навигацию
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={({ route }) => ({
            headerTitle: () => <MapHeader {...route.params} />
          })}
        />
        <Stack.Screen
          name="Date"
          component={DatePickerScreen}
          options={{
            headerTitle: "Выбрать даты",
            header: ({ scene, _previous, navigation }) => {
              const { options } = scene.descriptor;
              const title = options.headerTitle;
              return (
                <DatePickerHeader
                  title={title}
                  back={() => navigation.goBack()}
                  style={options.headerStyle}
                />
              );
            }
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerTitle: () => <SearchScreenHeader />
          }}
        />
        <Stack.Screen
          name="Rooms"
          component={SelectRoomsScreen}
          options={{ headerTitle: "Номера и гости" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
