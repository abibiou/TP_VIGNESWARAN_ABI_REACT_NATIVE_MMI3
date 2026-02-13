import { View, Text, ScrollView } from "react-native";
import data from "../assets/data.json";

export default function Lyceetype() {
  const LP_PR= data.filter(typedelycee => typedelycee.sigle_uai.startsWith("LP PR")).length;
  const LPO = data.filter(typedelycee => typedelycee.sigle_uai.startsWith("LPO")).length;
  const LGT = data.filter(typedelycee => typedelycee.sigle_uai.startsWith("LGT")).length;

  return (
    <ScrollView className="flex-1 bg-[#1A1A1A]">
    <View className="p-5">
      <Text className="text-2xl font-bold mb-4 mt-14 text-[#FFFFFF]">Statistiques des types de lycées</Text>
     <View className="flex-row justify-between rounded-xl bg-[#EB704A] p-5 mb-5">
        <Text className="text-xl font-semibold text-[#1A1A1A]">LP PR:</Text>
        <Text className="text-xl font-semibold text-[#1A1A1A]">{LP_PR}</Text>
      </View>
      <View className="flex-row justify-between rounded-xl bg-[#EB704A] p-5 mb-5">
       <Text className="text-xl font-semibold text-[#1A1A1A]">LPO :</Text>
        <Text className="text-xl font-semibold text-[#1A1A1A]">{LPO}</Text>
      </View>
      <View className="flex-row justify-between rounded-xl bg-[#EB704A] p-5 mb-5">
        <Text className="text-xl font-semibold text-[#1A1A1A]">LGT :</Text>
        <Text className="text-xl font-semibold text-[#1A1A1A]">{LGT}</Text>
      </View>
    </View>
    </ScrollView>
  );
}
