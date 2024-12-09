import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { darkTheme } from "../styles/globals";
import { Icon } from "@rneui/themed";

export default function BadgeBtn(comp) {
    return (
        <TouchableHighlight style={{borderRadius: 10}} onPress={comp.onPress}>
            <View style={comp.isActive === comp.name ? styles.containerActive : styles.container }>
                {comp.icon &&
                    <View style={styles.iconContainer}>
                        <Icon name={comp.icon} size={20} color={comp.isActive === comp.name ? '#000' : darkTheme.colors.textPrimary } type={comp.type} />
                    </View>
                }
                {comp.text &&
                    <View style={styles.textContainer}>
                        <Text style={comp.isActive === comp.name ? styles.textActive : styles.text}>{comp.name}</Text>
                    </View>
                }
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        borderRadius: 10,
        backgroundColor: darkTheme.colors.backgroundSecondary,
        flexDirection: "row",
        gap: 5,
        paddingHorizontal: 10,
        maxHeight: 30,
        minHeight: 30,
    },
    containerActive: {
        flexGrow: 1,
        borderRadius: 10,
        backgroundColor: darkTheme.colors.textPrimary,
        flexDirection: "row",
        gap: 5,
        paddingHorizontal: 10,
        maxHeight: 30,
        minHeight: 30,
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: darkTheme.colors.textPrimary,
        fontSize: 15,
    },
    textActive: {
        color: '#000',
        fontSize: 15,
    }
})