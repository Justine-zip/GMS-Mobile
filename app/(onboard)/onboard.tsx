import CustomButton from '@/src/components/custom_button';
import { globalStyles } from '@/src/styles/globalStyles';
import { router } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

export default function Onboard() {
    return (
        <View>
            <ImageBackground source={require('../../assets/images/onboard/onBoardBG.png')} style={{ width: '100%', height: '100%', position: 'relative' }} />
            <View style={[{ position: 'absolute', top: 120, left: 30, flexDirection: 'row', gap: 8 }]}>
                <Image source={require('../../assets/images/main/GymFlowLogoWhite.png')} style={{ width: 40, height: 40, position: 'relative' }} />

                <Text style={[globalStyles.title, { color: '#fff', fontSize: 24 },]}>GymFlow</Text>
            </View>
            <View style={[{
                position: 'absolute', alignSelf: 'center', bottom: 50, left: 0,
                right: 0,
                alignItems: 'center',
                paddingHorizontal: 30,
            }]}>

                <Text style={[globalStyles.title, { color: '#fff', fontSize: 24, textAlign: 'center' },]}>Elevate Your Gym’s Peak Performance.</Text>
                <Text style={[globalStyles.text, { color: '#fff', fontSize: 16, textAlign: 'center', marginTop: 8 },]}>Streamline your gym operations with powerful management tools built for modern fitness business.</Text>
                <CustomButton onPress={() => router.push('/(onboard)/signin')} label='Get Started' backgroundColor='#146EF5' textColor='#fff' textSize={18} style={[{ marginTop: 40, borderWidth: 0, width: 350, alignItems: 'center' }]} />
                <Text style={[globalStyles.spacer, globalStyles.text, { color: '#B0B0B0' }]}>Join 10,000+ active members today.</Text>
            </View>
        </View>
    );
}
