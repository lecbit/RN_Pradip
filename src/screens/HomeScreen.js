import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import Carousel from 'react-native-snap-carousel';
import { sliderData } from "../model/data";
import BannerSlider from "../components/BannerSlider";
import { windowWidth } from "../utils/Dimensions";
import CustomSwitch from "../components/CustomSwitch";

export default function HomeScreen() {
    const [gamesTab, setGamesTab] = useState(1);
    const renderBanner = ({ item, index }) => {
        return ( //<BannerSlider data={item}/>
            <View>
                <Image
                    source={item.image}
                    style={{ height: 150, width: 300, borderRadius: 10 }}
                />
            </View>
        )
    }

    const onSelectSwitch = (value) => {
        setGamesTab(value);
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={{ padding: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium' }}>Hello John Doe</Text>
                    <ImageBackground
                        source={require('../assets/images/user-profile.jpg')}
                        style={{ width: 35, height: 35 }}
                        imageStyle={{ borderRadius: 25 }}
                    />
                </View>
                <View style={{
                    flexDirection: "row",
                    borderColor: "#C6C6C6",
                    borderWidth: 1,
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                }}>
                    <FeatherIcon name="search" size={20} color="#C6C6C6" style={{ marginRight: 5, alignSelf: 'center' }} />
                    <TextInput placeholder="Search" />
                </View>

                <View style={{
                    marginVertical: 15,
                    flexDirection: 'row',
                    justifyContent: "space-between"
                }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium' }}>Upcoming Games</Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={{ color: '#0aada8' }}>See all</Text>
                    </TouchableOpacity>
                </View>

                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth - 40}
                    itemWidth={300}
                    loop={true}
                />
                <View style={{ marginVertical: 20 }}>
                    <CustomSwitch selectionMode={1} option1="Free" option2="Paid" onSelectSwitch={onSelectSwitch} />
                </View>
                {gamesTab == 1 && <Text>Free Games</Text>}
                {gamesTab == 2 && <Text>Paid Games</Text>}
            </ScrollView>
        </SafeAreaView>
    )
}