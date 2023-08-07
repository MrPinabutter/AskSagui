import { Text, View } from '@/components/atom/Themed';
import { Link } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-xl fotn-bold'>Fila do restaurante:</Text>
      <Link asChild href="/login">
        <TouchableOpacity className='bg-blue-500 rounded-md px-4 py-2 mt-4'>
          <Text className='text-white font-semibold'>Logoff</Text>
        </TouchableOpacity>
      </Link>
      <View className='my-8 w-4/5 h-px' lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}
