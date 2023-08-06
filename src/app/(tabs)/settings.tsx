import { Text, View } from '@/components/atom/Themed';

export default function TabTwoScreen() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-xl fotn-bold'>Fila do restaurante:</Text>
      <View className='my-8 w-4/5 h-px' lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}
