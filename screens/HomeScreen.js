import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import Icon from "../assets/icon.png"
import {
    ChevronDownIcon,
    UserIcon,
    MagnifyingGlassIcon, 
    AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline"
import Categories from '../components/categories';


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className={'flex-row pb-3 items-center mx-4 space-x-2'}>
        <Image 
            source={Icon}
            className={'h-7 w-7 bg-gray-300 p-4 rounded-full'}
        />
        <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">
                Current Location
                <ChevronDownIcon size={20} color="#FF585F" />
            </Text>
        </View>
        <UserIcon size={35} color={"#01ff70"}/>
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
            <MagnifyingGlassIcon size={20} color="gray"/>
            <TextInput placeholder='Restaurants and Cuisines' keyboardType='default'/>
        </View>
        <AdjustmentsVerticalIcon size={20} color="#FF585F"/>
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Categories />
        {/* Featured Row */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen