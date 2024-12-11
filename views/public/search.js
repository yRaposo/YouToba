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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const SearchPage = () => {
  const navigation = useNavigation();

  const searchHistory = [
    {
      id: "1",
      text: "Como fazer pão caseiro",
      thumbnail:
        "https://amopaocaseiro.com.br/wp-content/uploads/2020/01/pao-caseiro-para-iniciantes_02-840x560.jpg",
    },
    {
      id: "2",
      text: "Top 10 filmes 2024",
      thumbnail:
        "https://d2d7ho1ae66ldi.cloudfront.net/ArquivoNoticias/5e1d1f8e-849f-11ef-aa79-9bebc91072b3/coringa-2-bilheteria.jpg",
    },
    {
      id: "3",
      text: "Tutorial React Native básico",
      thumbnail:
        "https://kinsta.com/pt/wp-content/uploads/sites/3/2023/04/react-must-be-in-scope-when-using-jsx.jpg",
    },
    {
      id: "4",
      text: "Músicas para estudar",
      thumbnail:
        "https://i.ytimg.com/vi/jfKfPfyJRdk/hq720_live.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDEpge9S04tffeESz1krtPhCoERcA",
    },
    {
      id: "5",
      text: "Notícias sobre tecnologia hoje",
      thumbnail:
        "https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2024/08/31121215/mundo-elon-musk-spacex-tesla-1713511954-620x620.jpeg",
    },
    {
      id: "6",
      text: "Receitas rápidas para jantar",
      thumbnail:
        "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2020/10/07/escondidinho-de-frigideira.jpg",
    },
    {
      id: "7",
      text: "Melhores jogos multiplayer 2024",
      thumbnail:
        "https://blog.br.playstation.com/tachyon/sites/4/2024/06/f9cf41284545882c111362135099be0eeb0f2cad.png",
    },
    {
      id: "8",
      text: "Como aprender inglês rápido",
      thumbnail: "https://i.ytimg.com/vi/zy5CIBaeWPg/maxresdefault.jpg",
    },
    {
      id: "9",
      text: "Desafios engraçados",
      thumbnail:
        "https://cdn.awsli.com.br/600x450/2495/2495784/produto/271666141/353996-1-s7nwuqy2vp.jpg",
    },
    {
      id: "10",
      text: "Últimas novidades no cinema",
      thumbnail:
        "https://ogimg.infoglobo.com.br/in/24685224-831-cc7/FT1086A/cinema.jpg",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.searchItem}>
      <MaterialIcons
        name="history"
        size={20}
        color="#ccc"
        style={styles.historyIcon}
      />
      <Text style={styles.searchText}>{item.text}</Text>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <TouchableOpacity>
        <MaterialIcons name="north-west" size={20} color="#ccc" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back"
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
        <MaterialIcons name="mic" size={24} color="#ccc" />
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
    backgroundColor: "#181818",
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
