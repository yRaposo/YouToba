import React, {useCallback} from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableHighlight, Image, Dimensions, StatusBar } from "react-native";
import { Icon } from "@rneui/themed";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEvent } from "expo";
import { useFocusEffect } from "@react-navigation/native";

import { darkTheme } from "../../styles/globals";
import IconBtn from "../../components/IconBtn";
import data from "../../data/data.json";
import SubscribeBtn from "../../components/SubscribeBtn";
import { ScrollView } from "react-native-gesture-handler";
import VideoBtn from "../../components/VideoBtn";
import { use } from "react";

const { width } = Dimensions.get('window');

export default function VideoPage({ navigation, route }) {
    const { videoId } = route.params;

    const video = data.find(video => video.id === videoId);

    const videoSource = { uri: video.videoMidia.source };
    const player = useVideoPlayer(videoSource, player => {
        player.play();
        player.loop = true;
    });

    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

    const handleOutFocus = () => {
        if (isPlaying) {
            player.pause();
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor={darkTheme.colors.background} />
            <View>
                <VideoView
                    style={styles.video}
                    player={player}
                />

                <ScrollView>
                    <View style={styles.videoDataContainer}>
                        <View style={styles.videoTitleContainer}>
                            <Text style={styles.videoTitle}>{video.data.title}</Text>
                        </View>

                        <View style={styles.videoData}>
                            <Text style={styles.videoTxtData}>{video.data.counters.views} views • há {video.data.launch} <TouchableHighlight ><Text style={styles.moreInfoTxt}>...mais</Text></TouchableHighlight></Text>
                            <View style={styles.creatorContainer}>

                                <TouchableHighlight onPress={() => console.log(video.creator.name)} style={{ borderRadius: 50, }}>
                                    <View style={styles.creatorBtn}>
                                        <Image
                                            source={{ uri: video.creator.profileImg }}
                                            style={styles.creatorProfile}
                                        />
                                        <Text style={styles.creatorName}>{video.creator.name}</Text>
                                    </View>
                                </TouchableHighlight>

                                <SubscribeBtn onPress={() => console.log('inscreveu')} />
                            </View>

                            <View style={styles.VideoBtnsContainer}>
                                <View style={styles.LikeContainer}>
                                    <TouchableHighlight>
                                        <View style={styles.CounterBtn}>
                                            <Icon name="like2" size={15} type="antdesign" color={darkTheme.colors.textPrimary} />
                                            <Text style={styles.videoTxtData}>{video.data.counters.likes}</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={{ borderLeftWidth: 1, borderColor: darkTheme.colors.textSecondary }}>
                                        <View style={styles.CounterBtn}>
                                            <Icon name="dislike2" size={15} type="antdesign" color={darkTheme.colors.textPrimary} />
                                            <Text style={styles.videoTxtData}>{video.data.counters.likes}</Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </View>

                        </View>
                    </View>

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
                                onPress={() => {
                                    navigation.popTo('VideoPage', { videoId: video.id })
                                    handleOutFocus();
                                }
                                }
                            />
                        })
                    }
                </ScrollView>


            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: darkTheme.colors.backgroundPrimary,
        justfyContent: "center",
        alignItems: "center"
    },
    video: {
        width: width,
        height: width / 1.777777777777778,
    },
    videoDataContainer: {
        flex: 1,
        marginHorizontal: 15,
        marginTop: 15,
        marginBottom: 15,
    },
    videoTitleContainer: {
        marginBottom: 10,
    },
    videoTitle: {
        fontWeight: "bold",
        fontSize: 18,
        color: darkTheme.colors.textPrimary,
    },
    videoData: {

    },
    videoTxtData: {
        fontSize: 13,
        color: darkTheme.colors.textSecondary,
    },
    moreInfoTxt: {
        fontSize: 13,
        justfyContent: "flex-end",
        color: darkTheme.colors.textPrimary,
    },
    creatorContainer: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    creatorBtn: {
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 15,

    },
    creatorProfile: {
        width: 40,
        height: 40,
        resizeMode: "cover",
        borderRadius: 100,
    },
    creatorName: {
        marginLeft: 10,
        color: darkTheme.colors.textPrimary,
        fontSize: 15,
        fontWeight: "bold",
    },
    VideoBtnsContainer: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    LikeContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: darkTheme.colors.backgroundSecondary,
        borderRadius: 50,
    },
    CounterBtn: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 7,
        gap: 5,
    },

})