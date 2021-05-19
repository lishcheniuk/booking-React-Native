import React from "react";
import { ScrollView } from "react-native";
import { SearchView } from "../components/SearchView";
import { RecentView } from "../components/RecentView";
import { RecentSearchCard } from "../components/RecentSearchCard";
import { RecentViewerCard } from "../components/RecentViewerCard";
import { NearbyHotels } from "../components/NearbyHotels";
import { AppLogo } from "../components/ui/AppLogo";

export const HomeScreen = () => {
  return (
    <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
      <AppLogo />

      <SearchView />

      <RecentView title="Последние поисковые запросы">
        <RecentSearchCard />
        <RecentSearchCard />
        <RecentSearchCard />
      </RecentView>

      <RecentView title="Недавно просмотренные">
        <RecentViewerCard />
        <RecentViewerCard />
        <RecentViewerCard />
      </RecentView>

      <NearbyHotels />
    </ScrollView>
  );
};
