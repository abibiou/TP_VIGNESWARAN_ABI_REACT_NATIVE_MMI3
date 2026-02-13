import { ScrollView, View, Text, FlatList } from "react-native";
import data from "../assets/data.json";

export default function Creteil() {
    const lyceescreteil = data.filter((recuperelyceecreteil) => recuperelyceecreteil.academie === "Créteil");

    return (
        <ScrollView className="flex-1 bg-[#1A1A1A]" nestedScrollEnabled={true} >
            <View className="p-5">
                <Text className="text-2xl font-bold mb-4 mt-14 text-[#FFFFFF]">Lycées de l'académie de Créteil</Text>
                <FlatList data={lyceescreteil} keyExtractor={(recuperelyceecreteil) => recuperelyceecreteil.code_uai}
                    scrollEnabled={false} renderItem={({ item: recuperelyceecreteil }) => (
                        <View className="py-5 bg-[#DEC1FE] mb-5 p-3 rounded-xl">
                            <Text className="font-semibold text-[#171717] w-[70%]">{recuperelyceecreteil.nom_etablissement}
                            </Text>
                            <Text className="text-white py-2 px-5 bg-[#171717] rounded-full self-start mt-3">{recuperelyceecreteil.libelle}</Text>
                        </View>
                    )}
                />
            </View>
        </ScrollView>
    );
}
