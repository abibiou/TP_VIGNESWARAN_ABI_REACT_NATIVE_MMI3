import { View, Text, FlatList, ScrollView } from "react-native";
import data from "../assets/data.json";

export default function Typedelycee() {
  const lyceesPrives = data.filter((etablissement) => 
    etablissement.statut === "privé" &&["Paris", "Créteil", "Versailles"].includes(etablissement.academie)
  );

  return (
    <ScrollView className="flex-1 bg-[#1A1A1A]" nestedScrollEnabled={true} >
      <View className="p-5">
        <Text className="text-2xl font-bold mb-4 mt-14 text-[#FFFFFF]">Liste des lycées privés de la région parisienne</Text>
        <FlatList data={lyceesPrives} keyExtractor={(lycee) => lycee.code_uai} scrollEnabled={false} 
        renderItem={({ item: lycee }) => (
            <View className="py-5 bg-[#F5F277] mb-5 p-3 rounded-xl">
              <Text className="font-semibold text-[#1A1A1A] w-[70%]">{lycee.nom_etablissement}</Text>
              <Text className="text-white py-2 px-5 bg-[#1A1A1A] rounded-full self-start mt-3">{lycee.libelle}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}
