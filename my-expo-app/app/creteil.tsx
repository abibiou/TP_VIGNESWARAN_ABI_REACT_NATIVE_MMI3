import { ScrollView, View, Text, FlatList } from "react-native";
import data from "../assets/data.json";

export default function Creteil() {
    const lyceescreteil = data.filter((item) => item.academie === "Créteil");
    return (
        <ScrollView className="flex-1 bg-[#1A1A1A]">
            <View className="p-5">
                <Text className="text-2xl font-bold mb-4 mt-14 text-[#FFFFFF]">Lycées de l'académie de Créteil</Text>
                <FlatList data={lyceescreteil} keyExtractor={(item) => item.code_uai} renderItem={({ item }) => (
                    <View className="py-5 bg-[#DEC1FE] mb-5 p-3 rounded-xl upperca">
                        <Text className="font-semibold text-[#171717] w-[70%]">{item.nom_etablissement}</Text>
                        <Text className="text-white py-2 px-5 bg-[#171717] rounded-full self-start mt-3">{item.libelle}</Text>
                    </View>
                )}
                />
            </View>
        </ScrollView>
    );
}
