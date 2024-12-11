import React from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const SearchPage = () => {
  const navigation = useNavigation();

  const searchHistory = [
    {
      id: "1",
      text: "Como fazer pão caseiro",
      thumbnail: "https://via.placeholder.com/100",
    },
    {
      id: "2",
      text: "Top 10 filmes 2024",
      thumbnail: "https://via.placeholder.com/100",
    },
    {
      id: "3",
      text: "Tutorial React Native básico",
      thumbnail: "https://via.placeholder.com/100",
    },
    {
      id: "4",
      text: "Músicas para estudar",
      thumbnail: "https://via.placeholder.com/100",
    },
    {
      id: "5",
      text: "Notícias sobre tecnologia hoje",
      thumbnail: "https://via.placeholder.com/100",
    },
    {
      id: "6",
      text: "Receitas rápidas para jantar",
      thumbnail: "https://via.placeholder.com/100",
    },
    {
      id: "7",
      text: "Melhores jogos multiplayer 2024",
      thumbnail: "https://via.placeholder.com/100",
    },
    {
      id: "8",
      text: "Como aprender inglês rápido",
      thumbnail: "https://via.placeholder.com/100",
    },
    {
      id: "9",
      text: "Desafios engraçados",
      thumbnail: "https://via.placeholder.com/100",
    },
    {
      id: "10",
      text: "Últimas novidades no cinema",
      thumbnail: "https://via.placeholder.com/100",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.searchItem}>
      <Icon
        name="time-outline"
        size={20}
        color="#ccc"
        style={styles.historyIcon}
      />
      <Text style={styles.searchText}>{item.text}</Text>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <TouchableOpacity>
        <Icon name="arrow-redo-outline" size={20} color="#ccc" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back-outline"
            size={24}
            color="#ccc"
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Pesquisar"
          placeholderTextColor="#aaa"
          style={styles.searchInput}
        />
        <Icon name="mic-outline" size={24} color="#ccc" />
      </View>

      {/* Search History */}
      <FlatList
        data={searchHistory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.historyList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#202020",
    borderRadius: 5,
    margin: 10,
  },
  backIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  historyList: {
    marginHorizontal: 10,
  },
  searchItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#202020",
    padding: 10,
    borderRadius: 5,
  },
  historyIcon: {
    marginRight: 10,
  },
  searchText: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default SearchPage;
