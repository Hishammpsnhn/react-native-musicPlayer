import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import {COLORS, SIZES, icons, images} from '../constants'
import Search from "../components/searchBar/Search";

const Home = () => {
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <Header iconUrl={icons.menu} />
                    ),
                    headerRight: () => (
                        <Header iconUrl={images.profile} />
                    ),
                    headerTitle: ""
                }}
            />
            <ScrollView style={{paddingHorizontal:10,paddingVertical:5}}>
                <Search/>
                <Menu />
            </ScrollView>

        </SafeAreaView>
    )
};

export default Home;
