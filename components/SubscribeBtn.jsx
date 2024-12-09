import React from "react";
import { View, Text, StyleSheet, TouchableHighlight} from "react-native";
import { darkTheme } from "../styles/globals";

export default function SubscribeBtn(comp) {
    return (
        <TouchableHighlight style={styles.btn} onPress={comp.onPress}>
            <View style={styles.container}>
                    <Text style={styles.subscribeTxt}>Inscrever-se</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 50,
    },
    container: {
        padding: 10,
        backgroundColor: darkTheme.colors.textPrimary,
        borderRadius: 50,
    },
    subscribeTxt: {
        color: darkTheme.colors.backgroundPrimary,
        fontSize: 13,
    },
});