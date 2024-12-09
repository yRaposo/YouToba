import React, { useCallback, useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, StatusBar, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { darkTheme } from "../../styles/globals";
import IconBtn from "../../components/IconBtn";
import BadgeBtn from "../../components/BadgeBtn";
import VideoBtn from "../../components/VideoBtn";
import data from "../../data/data.json"

export default function Home({ navigation }) {

    const [activeBadge, setActiveBadge] = useState("all");

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor={darkTheme.colors.backgroundPrimary} barStyle='light-content' />

            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.headerSupContainer}>
                        <View style={styles.logoContainer}>
                            <Image
                                source={require('../../assets/logo/Youtube_logo.png')}
                                style={styles.logo}
                            />
                        </View>
                        <View style={styles.headerBtnsContainer}>
                            <IconBtn icon="notifications" onPress={() => console.log("Notificações")} />
                            <IconBtn icon="search" onPress={() => console.log("Busca")} />
                        </View>
                    </View>
                    <ScrollView horizontal  >
                        <View style={styles.headerInfContainer}>
                            <BadgeBtn name="BarraLateral" icon="compass" isActive={activeBadge} type="material-community" onPress={() => console.log('barraLateral')} />
                            <BadgeBtn name="Tudo" isActive={activeBadge} text onPress={() => setActiveBadge('Tudo')} />
                            <BadgeBtn name="Valorant" isActive={activeBadge} text onPress={() => setActiveBadge('Valorant')} />
                            <BadgeBtn name="CS:GO" isActive={activeBadge} text onPress={() => setActiveBadge('CS:GO')} />
                            <BadgeBtn name="LoL" isActive={activeBadge} text onPress={() => setActiveBadge('LoL')} />
                            <BadgeBtn name="Overwatch" isActive={activeBadge} text onPress={() => setActiveBadge('Overwatch')} />
                            <BadgeBtn name="R6" isActive={activeBadge} text onPress={() => setActiveBadge('R6')} />
                            <BadgeBtn name="Fortnite" isActive={activeBadge} text onPress={() => setActiveBadge('Fortnite')} />
                            <BadgeBtn name="Minecraft" isActive={activeBadge} text onPress={() => setActiveBadge('Minecraft')} />
                            <BadgeBtn name="Among Us" isActive={activeBadge} text onPress={() => setActiveBadge('Among Us')} />
                            <BadgeBtn name="Gartic" isActive={activeBadge} text onPress={() => setActiveBadge('Gartic')} />
                            <BadgeBtn name="Free Fire" isActive={activeBadge} text onPress={() => setActiveBadge('Free Fire')} />
                            <BadgeBtn name="PUBG" isActive={activeBadge} text onPress={() => setActiveBadge('PUBG')} />
                            <BadgeBtn name="Mobile Legends" isActive={activeBadge} text onPress={() => setActiveBadge('Mobile Legends')} />
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.mainContainer}>

                    {
                        data.map((video, index) => {
                            return <VideoBtn
                                key={index}
                                thumb={{ uri: video.videoMidia.thumbnail }}
                                creatorProfile={{ uri: video.creator.profileImg }}
                                creatorName={video.creator.name}
                                videoViews={video.data.counters.views}
                                videoDate={video.data.launch}
                                videoTitle={video.data.title}
                                onPress={() => navigation.navigate('VideoPage', { videoId: video.id })
                                }
                            />
                        })
                    }
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: "center",
        backgroundColor: darkTheme.colors.backgroundPrimary
    },
    header: {
        width: "100%",
        justifyContent: "space-between",
    },
    headerSupContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    headerBtnsContainer: {
        flexDirection: "row",
        gap: 10
    },
    headerInfContainer: {
        flexDirection: "row",
        gap: 10,
        marginHorizontal: 20,
        marginBottom: 10,
    },
    logo: {
        width: 30,
        height: 30,
        resizeMode: "contain"
    },
    mainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})