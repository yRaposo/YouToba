import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { darkTheme } from "../../styles/globals";
import IconBtn from "../../components/IconBtn";
import BadgeBtn from "../../components/BadgeBtn";

export default function Profile({ navigation }) {
  const [activeBadge, setActiveBadge] = useState("videos");

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor={darkTheme.colors.backgroundPrimary}
        barStyle="light-content"
      />
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Image
              source={require("../../assets/logo/Youtube_logo.png")}
              style={styles.logo}
            />
            <View style={styles.headerBtns}>
              <IconBtn
                icon="notifications"
                onPress={() => console.log("Notificações")}
              />
              <IconBtn icon="search" onPress={() => console.log("Busca")} />
            </View>
          </View>

          <View style={styles.profile}>
            <Image
              source={{ uri: "https://via.placeholder.com/150" }}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.profileName}>yRaposo</Text>
              <Text style={styles.profileInfo}>@yRaposo - Ver Canal</Text>
            </View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.badgeContainer}>
              <BadgeBtn
                name="Mudar de Conta"
                isActive={activeBadge === "videos"}
                onPress={() => setActiveBadge("videos")}
              />
              <BadgeBtn
                name="Conta do Google"
                isActive={activeBadge === "playlists"}
                onPress={() => setActiveBadge("playlists")}
              />
              <BadgeBtn
                name="Ativar modo de navegação anônima"
                isActive={activeBadge === "anon"}
                onPress={() => setActiveBadge("anon")}
              />
            </View>
          </ScrollView>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Histórico */}
          <Text style={styles.sectionTitle}>Histórico</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            {["Vídeo Legal 3", "Vídeo Legal 2", "GTA Etec Trailer 3"].map(
              (title, index) => (
                <TouchableOpacity key={index} style={styles.videoCard}>
                  <Image
                    style={styles.thumbnail}
                    source={{ uri: "https://via.placeholder.com/150" }}
                  />
                  <Text style={styles.videoTitle}>{title}</Text>
                </TouchableOpacity>
              )
            )}
          </ScrollView>

          {/* Playlists */}
          <Text style={styles.sectionTitle}>Playlists</Text>
          <View style={styles.playlistContainer}>
            {[
              "Seus vídeos",
              "Selos",
              "Seus filmes",
              "Assinar YouTube Premium",
            ].map((playlist, index) => (
              <TouchableOpacity key={index} style={styles.playlistButton}>
                <Text style={styles.playlistText}>{playlist}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: darkTheme.colors.backgroundPrimary,
  },
  header: {
    padding: 20,
    paddingTop: 5,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  headerBtns: {
    flexDirection: "row",
    gap: 10,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: darkTheme.colors.textPrimary,
  },
  profileInfo: {
    fontSize: 14,
    color: darkTheme.colors.textSecondary,
  },
  badgeContainer: {
    flexDirection: "row",
    gap: 10,
  },
  content: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: darkTheme.colors.textPrimary,
    marginBottom: 10,
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  videoCard: {
    marginRight: 15,
  },
  thumbnail: {
    width: 120,
    height: 80,
    borderRadius: 5,
  },
  videoTitle: {
    fontSize: 14,
    color: darkTheme.colors.textPrimary,
    marginTop: 5,
  },
  playlistContainer: {
    gap: 10,
  },
  playlistButton: {
    backgroundColor: darkTheme.colors.backgroundSecondary,
    padding: 10,
    borderRadius: 5,
  },
  playlistText: {
    color: darkTheme.colors.textPrimary,
    fontSize: 14,
  },
});
