import CustomHeader from '@/src/components/custom_header';
import SettingCard from '@/src/components/setting_card';
import { globalStyles } from '@/src/styles/globalStyles';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Setting() {
  return (
    <SafeAreaView
      style={[globalStyles.container]}
    >
      <View>
        {/* Header */}
        <CustomHeader header="Settings" ></CustomHeader>

        {/* Account */}
        <SettingCard

          header='Account'
          items={[
            { icon: "person-circle-outline", iconSet: "Ionicons", name: "Account" },
            { icon: "lock-closed-outline", iconSet: "Ionicons", name: "Privacy & Security" },
            { icon: "payment", iconSet: "MaterialIcons", name: "Payment & Billing" }
          ]}
        ></SettingCard>

        {/* General */}
        <SettingCard

          header='General'
          items={[
            { icon: "sunny-outline", iconSet: "Ionicons", name: "Appearance" },
            { icon: "notifications-outline", iconSet: "Ionicons", name: "Notifications" },
          ]}
        ></SettingCard>

        {/* Support */}
        <SettingCard

          header='Support'
          items={[
            { icon: "message-square", iconSet: "Feather", name: "Contact support" },
            { icon: "flag-outline", iconSet: "Ionicons", name: "Report a problem" },
            { icon: "alert-circle-outline", iconSet: "Ionicons", name: "Terms & Conditions" }
          ]}
        ></SettingCard>

        {/* Logout */}
        <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding, globalStyles.spacer, { borderWidth: 0, backgroundColor: '#FF4D4D10' }]}>
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <Feather name='log-out' size={24} color={'#FF4D4D'} />
            <Text style={[globalStyles.text, { color: '#FF4D4D', fontWeight: 'bold' }]}>Log Out</Text>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}
