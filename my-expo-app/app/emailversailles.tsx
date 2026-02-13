import { View, Text, FlatList, ScrollView } from "react-native";
import data from "../assets/data.json";

export default function Emailversailles() {
  const mails = data
    .filter(emailversaille => emailversaille.academie === "Versailles" && emailversaille.mail)
    .map(emailversaille => ({
      code: emailversaille.code_uai,
      nom: emailversaille.nom_etablissement,
      mail: emailversaille.mail
    }));

  return (
    <ScrollView className="flex-1 bg-[#171717]">
    <View className="flex-1 p-5">
      <Text className="text-2xl font-bold mb-4 mt-14 text-[#FFFFFF]">Les adresses mail des lycée de l'académie de Versailles</Text>
      <FlatList data={mails} keyExtractor={(item) => item.code} renderItem={({ item }) => (
           <View className="py-5 bg-[#EB704A] mb-5 p-3 rounded-xl">
            <Text className="font-semibold text-[#171717] w-[70%]">{item.nom}</Text>
             <Text className="text-white py-2 px-5 bg-[#171717] rounded-full self-start mt-3">{item.mail}</Text>
          </View>
        )}
      />
    </View>
    </ScrollView>
  );
}
