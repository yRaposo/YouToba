import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image, Dimensions } from "react-native";
import { darkTheme } from "../styles/globals";
import { Icon } from "@rneui/themed";
import IconBtn from "./IconBtn";

const { width } = Dimensions.get('window');

export default function VideoBtn(comp) {

    return (
        <TouchableHighlight style={styles.btn} onPress={comp.onPress}>
            <View style={styles.container}>
                <View style={styles.thumbnailContainer}>
                    <Image
                        source={comp.thumb}
                        style={styles.thumbnail}
                    />
                </View>
                <View style={styles.dataContainer}>

                    <TouchableHighlight style={styles.creatorContainer} onPress={() => console.log(comp.creatorName)}>
                        <Image
                            source={comp.creatorProfile}
                            style={styles.creatorProfile}
                        />
                    </TouchableHighlight>

                    <View style={styles.TextContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{comp.videoTitle}</Text>
                        </View>
                        <View style={styles.videoDataContainer}>
                            <Text style={styles.videoData}>{comp.creatorName} • {comp.videoViews} views • há {comp.videoDate}</Text>
                        </View>
                    </View>

                    <View style={styles.optionsContainer}>
                        <IconBtn icon="dots-vertical" type="material-community" onPress={() => console.log("Mais opções")} />
                    </View>

                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
    },
    thumbnailContainer: {
        width: width,
        height: width / 1.777777777777778,
    },
    thumbnail: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    dataContainer: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'row',
    },
    creatorContainer: {
        width: 40,
        height: 40,
        overflow: 'hidden',
        borderRadius: 100,

    },
    creatorProfile: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        borderRadius: 100,
    },
    TextContainer: {
        marginLeft: 0,
        width: '70%',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: darkTheme.colors.textPrimary,
    },
    videoData: {
        fontSize: 12,
        color: darkTheme.colors.textSecondary,
    },
    optionsContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
})