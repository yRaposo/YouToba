import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { darkTheme } from "../../styles/globals";
import IconBtn from "../../components/IconBtn";
import BadgeBtn from "../../components/BadgeBtn";
import VideoBtn from "../../components/VideoBtn";
import data from "./../../data/data.json";

export default function Subscriptions({ navigation }) {
  const [activeBadge, setActiveBadge] = useState("all");

  const canais = data.map((video) => {
    const { name, profileImg } = video.creator;
    return { name, profileImg };
  });

  const renderChannel = ({ item }) => (
    <View style={styles.channelItem}>
      <Image source={{ uri: item.profileImg }} style={styles.channelImage} />
      <Text style={styles.channelName}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor={darkTheme.colors.backgroundPrimary}
        barStyle="light-content"
      />

      <ScrollView>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <View style={styles.headerSupContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../../assets/logo/Youtube_logo.png")}
                style={styles.logo}
              />
            </View>
            <View style={styles.headerBtnsContainer}>
              <IconBtn
                icon="notifications"
                onPress={() => console.log("Notificações")}
              />
              <IconBtn icon="search" onPress={() => console.log("Busca")} />
            </View>
          </View>

          {/* Carrossel de Canais */}
          <FlatList
            horizontal
            data={canais}
            keyExtractor={(item, index) => index}
            renderItem={renderChannel}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContainer}
          />

          {/* Badges */}
          <ScrollView horizontal>
            <View style={styles.headerInfContainer}>
              <BadgeBtn
                name="Tudo"
                isActive={activeBadge}
                text
                onPress={() => setActiveBadge("Tudo")}
              />
              <BadgeBtn
                name="Hoje"
                isActive={activeBadge}
                text
                onPress={() => setActiveBadge("Hoje")}
              />
              <BadgeBtn
                name="Vídeos"
                isActive={activeBadge}
                text
                onPress={() => setActiveBadge("Vídeos")}
              />
              <BadgeBtn
                name="Shorts"
                isActive={activeBadge}
                text
                onPress={() => setActiveBadge("Shorts")}
              />
              <BadgeBtn
                name="Ao Vivo"
                isActive={activeBadge}
                text
                onPress={() => setActiveBadge("Ao Vivo")}
              />
              <BadgeBtn
                name="Postagens"
                isActive={activeBadge}
                text
                onPress={() => setActiveBadge("Postagens")}
              />
            </View>
          </ScrollView>
        </View>

        {/* Conteúdo principal */}
        <View style={styles.mainContainer}>
          {data.map((video, index) => {
            return (
              <VideoBtn
                key={index}
                thumb={{ uri: video.videoMidia.thumbnail }}
                creatorProfile={{ uri: video.creator.profileImg }}
                creatorName={video.creator.name}
                videoViews={video.data.counters.views}
                videoDate={video.data.launch}
                videoTitle={video.data.title}
                onPress={() =>
                  navigation.navigate("VideoPage", { videoId: video.id })
                }
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    backgroundColor: darkTheme.colors.backgroundPrimary,
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
    gap: 10,
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
    resizeMode: "contain",
  },
  carouselContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  channelItem: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  channelImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  channelName: {
    fontSize: 12,
    color: darkTheme.colors.textPrimary,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
