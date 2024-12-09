import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { darkTheme } from "../styles/globals";
import { Icon } from "@rneui/themed";

export default function IconBtn( comp ) {
    return (
        <TouchableHighlight style={styles.iconBtn} onPress={comp.onPress}>
            <View>
                <Icon name={comp.icon} type={comp.type} size={25} color={darkTheme.colors.textPrimary} />
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    iconBtn: {
        padding: 10,
        borderRadius: 50
    }
})