import { View, Text, FlatList, ScrollView } from "react-native";
import data from "../assets/data.json";

export default function Emailversailles() {
  const lyceesVersailles = data
    .filter((lyceeversailles) => lyceeversailles.academie === "Versailles" && lyceeversailles.mail)
    .map((lyceeversailles) => ({
      codeUAI: lyceeversailles.code_uai,
      nomEtablissement: lyceeversailles.nom_etablissement,
      adresseMail: lyceeversailles.mail,
    }));

  return (
    <ScrollView className="flex-1 bg-[#171717]" nestedScrollEnabled={true}>
      <View className="flex-1 p-5">
        <Text className="text-2xl font-bold mb-4 mt-14 text-[#FFFFFF]">Les adresses mail des lycées de l'académie de Versailles</Text>
        <FlatList data={lyceesVersailles} keyExtractor={(lycee) => lycee.codeUAI} scrollEnabled={false} renderItem={({ item: lycee }) => (
            <View className="py-5 bg-[#EB704A] mb-5 p-3 rounded-xl">
              <Text className="font-semibold text-[#171717] w-[70%]">{lycee.nomEtablissement}</Text>
              <Text className="text-white py-2 px-5 bg-[#171717] rounded-full self-start mt-3">{lycee.adresseMail}
              </Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}
