import { twMerge } from 'tailwind-merge'
import { Text, View, ViewProps } from '@/components/atom/Themed';


type InfoCardProps = {
  label: string;
  value?: number | string;
  icon: any;
  iconName: string;
};

export const InfoCard = ({ value, label, icon: Icon, iconName, ...rest }: InfoCardProps) => {
  return (
    <View className={twMerge('flex flex-row items-end bg-slate-600/80 px-4 py-4 rounded-lg relative', "")} {...rest}>
      <Text className='text-6xl h-10 font-bold'>{value || ""}</Text>
      <Text className='text-lg font-semibold'>{label || ""}</Text>

      <Icon name={iconName} size={16} color={"#d6d6d6"} style={{ position: "absolute", top: 10, right: 16 }} />
    </View>
  )
}
