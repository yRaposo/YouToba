import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";
import { useFocusEffect } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

const TAB_NAVIGATOR_HEIGHT = 49; // Altura do Tab Navigator

const videos = [
  {
    id: "1",
    videoUri: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Carros mais dominantes da história da F1",
    creator: "yRaposo",
    profileImg:
      "https://i.pinimg.com/736x/21/7e/99/217e9997e6c7c580e871696c03a0aaa9.jpg",
  },
  {
    id: "2",
    videoUri: "https://www.w3schools.com/html/movie.mp4",
    title: "MINECRAFT LIVE ACTION GERADO POR IA",
    creator: "F1 Legends",
    profileImg:
      "https://yt3.googleusercontent.com/djwgWNsevFTlm8PbC0UCt8llmAVB9pDudNauTZRU0UuZPYmDfbdpzAzQrpnW4ov16eEPbLQ7kw=s160-c-k-c0x00ffffff-no-rj",
  },
];

const ShortsScreen = () => {
  const videoRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Pausa todos os vídeos ao sair da tela
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        videoRefs.current.forEach((video) => {
          if (video) {
            video.pauseAsync();
          }
        });
      };
    }, [])
  );

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    const visibleItem = viewableItems[0]; // Obtém o primeiro item visível
    if (visibleItem) {
      const newIndex = visibleItem.index;
      setCurrentIndex(newIndex);

      // Pausa todos os vídeos menos o atual
      videoRefs.current.forEach((video, index) => {
        if (video && index !== newIndex) {
          video.pauseAsync();
        }
      });

      // Reproduz o vídeo atual
      if (videoRefs.current[newIndex]) {
        videoRefs.current[newIndex].playAsync();
      }
    }
  }).current;

  const renderItem = ({ item, index }) => (
    <View
      style={[styles.videoContainer, { height: height - TAB_NAVIGATOR_HEIGHT }]}
    >
      <Video
        ref={(ref) => (videoRefs.current[index] = ref)}
        source={{ uri: item.videoUri }}
        style={styles.video}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={index === currentIndex} // Reproduz apenas o vídeo visível
        isLooping
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.creatorContainer}>
          <Image source={{ uri: item.profileImg }} style={styles.profileImg} />
          <Text style={styles.creator}>{item.creator}</Text>
        </View>
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeText}>Inscrever-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={videos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      pagingEnabled
      onViewableItemsChanged={onViewableItemsChanged} // Detecta o item visível
      viewabilityConfig={{
        itemVisiblePercentThreshold: 80, // Considera um item visível com 80% na tela
      }}
      contentContainerStyle={{ paddingBottom: TAB_NAVIGATOR_HEIGHT }} // Adiciona margem inferior para evitar cortes
    />
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width,
    position: "relative",
  },
  video: {
    width,
    height: "100%", // Ajusta para preencher a altura restante
  },
  overlay: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: "flex-start",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  creatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  creator: {
    color: "#fff",
    fontSize: 16,
  },
  subscribeButton: {
    backgroundColor: "#FF0000",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  subscribeText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ShortsScreen;
