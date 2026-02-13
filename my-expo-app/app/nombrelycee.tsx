import { View, Text, ScrollView } from "react-native";
import data from "../assets/data.json";

export default function Lyceeregionparisienne() {
    const paris = data.filter(lyceeregionparis => lyceeregionparis.academie === "Paris").length;
    const creteil = data.filter(lyceeregionparis => lyceeregionparis.academie === "Créteil").length;
    const versailles = data.filter(lyceeregionparis => lyceeregionparis.academie === "Versailles").length;

    return (
        <ScrollView className="flex-1 bg-[#1A1A1A]">
            <View className="flex-1 p-5">
                <Text className="text-2xl font-bold mt-14 mb-6 text-[#ffffff]">Nombre de lycées par académie</Text>
                <View className="flex-row justify-between bg-[#EB704A] p-4 rounded-xl mb-5">
                    <Text className="text-xl font-semibold text-[#1A1A1A]">PARIS</Text>
                    <Text className="text-xl font-bold text-[#1A1A1A]">{paris}</Text>
                </View>
                <View className="flex-row justify-between bg-[#DEC1FE] p-4 rounded-xl mb-5">
                    <Text className="text-xl font-semibold text-[#1A1A1A]">VERSAILLES</Text>
                    <Text className="text-xl font-bold text-[#1A1A1A]">{versailles}</Text>
                </View>
                <View className="justify-between  bg-[#F5F277] p-4 rounded-xl mb-4 flex-row">
                    <Text className="text-xl font-semibold text-[#1A1A1A]">CRÉTEIL</Text>
                    <Text className="text-xl font-bold text-[#1A1A1A]">{creteil}</Text>
                </View>
            </View>
        </ScrollView>
    );
}
