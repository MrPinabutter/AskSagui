import { Text, View } from '@/components/atom/Themed';

interface TagProps {
  text: string;
  className?: string;
  icon?: any;
}

export const Tag = ({ text, icon }: TagProps) => {
  return (
    <View className={`px-4 py-3 rounded-md bg-slate-700/60 mr-1 flex-row flex items-center`}>
      {icon}
      <Text className='font-semibold text-[#d6d6d6] ml-2'>
        {text}
      </Text>
    </View>
  )
}