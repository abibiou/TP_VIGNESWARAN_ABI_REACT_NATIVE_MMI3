import { ScrollView, View, Text, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import "../global.css";

export default function Home() {
    return (
        <ScrollView className="flex-1 bg-[#DEC1FE]">
            <View className="px-10 mt-10">
                <Text className="text-5xl font-extrabold text-center uppercase text-[#171717] mt-10">Lycée App</Text>
                <Text className="text-md text-center font-bold text-[#171717] uppercase">L’essentiel des lycées d’Île-de-France</Text>
                <Image source={require("../assets/imageaccueil.png")} className="w-full h-64 mt-10" />
                <Link href="/creteil" asChild>
                    <Pressable className="rounded-xl py-3 bg-[#F5F277] px-8 mt-6">
                        <Text className="text-lg text-[#171717] font-extrabold text-center uppercase">Lycées de Créteil</Text>
                    </Pressable>
                </Link>
                <Link href="/lyceeprives" asChild>
                    <Pressable className="rounded-xl py-3 bg-[#171717] px-8 mt-6">
                        <Text className="text-lg text-[#FFFFFF] text-center uppercase font-extrabold">Lycées privées</Text>
                    </Pressable>
                </Link>
                <Link href="/lyceelplpolgt" asChild>
                    <Pressable className="rounded-xl py-3 bg-[#EB704A] px-8 mt-6">
                        <Text className="text-lg text-[#171717] text-center uppercase font-extrabold">Type de lycées</Text>
                    </Pressable>
                </Link>
                <Link href="/emailversailles" asChild>
                    <Pressable className="rounded-xl py-3 bg-[#FFFFFF] px-8 mt-6">
                        <Text className="text-lg text-[#171717] text-center uppercase font-extrabold">Mail des lycées Versailles</Text>
                    </Pressable>
                </Link>
                <Link href="/nombrelycee" asChild>
                    <Pressable className="rounded-xl py-3 bg-red-400 px-8 mt-6">
                        <Text className="text-lg text-[#171717] text-center uppercase font-extrabold">Lycées région Parisienne</Text>
                    </Pressable>
                </Link>
            </View>
        </ScrollView>
    );
}
