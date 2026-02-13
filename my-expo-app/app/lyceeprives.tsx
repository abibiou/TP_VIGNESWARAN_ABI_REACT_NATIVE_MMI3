import { View, Text, FlatList, ScrollView } from "react-native";
import data from "../assets/data.json";

export default function Typedelycee() {
  const lyceeparisprives = data.filter(
    (item) => item.statut === "privé" && ["Paris", "Créteil", "Versailles"].includes(item.academie)
  );
  return (
    <ScrollView className="flex-1 bg-[#1A1A1A]">
    <View className="p-5">
      <Text className="text-2xl font-bold mb-4 mt-14 text-[#FFFFFF]">Liste des lycées privés de la région parisienne</Text>
      <FlatList data={lyceeparisprives} keyExtractor={(item) => item.code_uai} renderItem={({ item }) => (
          <View className="py-5 bg-[#F5F277] mb-5 p-3 rounded-xl">
            <Text className="font-semibold text-[#1A1A1A] w-[70%]">{item.nom_etablissement}</Text>
            <Text className="text-white py-2 px-5 bg-[#1A1A1A] rounded-full self-start mt-3">{item.libelle}</Text>
          </View>
        )}
      />
    </View>
    </ScrollView>
  );
}
