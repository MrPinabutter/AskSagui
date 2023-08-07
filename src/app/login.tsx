import { Text, View } from "@/components/atom/Themed";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native"
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential
} from "firebase/auth"
import { auth } from "../../firebase-config";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState, useEffect } from "react";

WebBrowser.maybeCompleteAuthSession()

export default function Login() {
  const [userInfo, setUserInfo] = useState<any>()
  const [request, response, promtAsync] = Google.useAuthRequest({
    androidClientId: process.env.EXPO_PUBLIC_ANDROID_API_KEY
  })

  useEffect(() => {
    if (response?.type == "success") {
      const { id_token } = response.params
      const credential = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credential)

    }
  }, [response])

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(JSON.stringify(user, null, 2))
        setUserInfo(user)
        AsyncStorage.setItem("user", JSON.stringify(user))
      }
    })
    return () => unsub()
  }, [])

  return (
    <View className="flex-1 w-full items-center justify-center">
      <Text className="text-2xl font-bold">Login</Text>

      <TouchableOpacity className="bg-blue-500 rounded-md w-3/5 py-4 mt-4 flex flex-row items-center justify-center" activeOpacity={0.7} onPress={() => promtAsync()}>
        <AntDesign name="google" size={24} color="white" />
        <Text className="text-white font-semibold ml-2 text-lg">Fazer Login</Text>
      </TouchableOpacity>
    </View>
  )
}