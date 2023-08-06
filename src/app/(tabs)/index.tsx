import React from 'react';
import { Tag } from '@/components/atom/Tag';
import { SafeAreaView } from 'react-native'
import { Text, View } from '@/components/atom/Themed';

import { FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import useQueueData from '@/hooks/useQueueData';
import { InfoCard } from '@/components/molecule/InfoCard';

export default function TabOneScreen() {
  const { queue } = useQueueData();

  const tags = [
    {
      text: `${queue?.lunch}`,
      icon: MaterialIcons,
      iconName: "local-restaurant",
    },
    {
      text: `${queue?.weather}`,
      icon: MaterialIcons,
      iconName: "cloud-queue",
    },
    {
      text: `${queue?.temp}°C`,
      icon: FontAwesome5,
      iconName: "temperature-low",
    },
  ]

  return (
    <SafeAreaView className='flex-1 mt-12 px-4'>
      <Text className='text-2xl font-bold'>Fila do restaurante</Text>
      <ScrollView>
        <ScrollView horizontal style={{
          marginTop: 10
        }}
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
        >
          {tags.filter(tag => tag.text).map((tag) => (
            <Tag key={tag.iconName} text={tag.text} icon={<tag.icon name={tag.iconName} size={14} color={"#d6d6d6"} />} />
          ))}
        </ScrollView>

        <View className='my-4 w-full h-px' lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <View className='flex flex-row flex-wrap w-full gap-2'>
          <InfoCard value={queue?.current?.count} label="Pessoas" icon={Ionicons} iconName='ios-people' />

          <InfoCard value={queue?.duration} label="Minutos" icon={MaterialCommunityIcons} iconName='clock-time-two-outline' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
