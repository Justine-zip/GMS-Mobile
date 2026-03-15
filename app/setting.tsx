import CustomHeader from '@/src/components/custom_header';
import SettingCard from '@/src/components/setting_card';
import { supabase } from '@/src/services/supabase';
import { globalStyles } from '@/src/styles/globalStyles';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
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
            { icon: "person-circle-outline", iconSet: "Ionicons", name: "Account", route: 'account' },
            { icon: "lock-closed-outline", iconSet: "Ionicons", name: "Privacy & Security", route: 'security' },
            { icon: "payment", iconSet: "MaterialIcons", name: "Payment & Billing", route: 'payment' }
          ]}
        ></SettingCard>

        {/* General */}
        <SettingCard

          header='General'
          items={[
            { icon: "sunny-outline", iconSet: "Ionicons", name: "Appearance", route: 'appearance' },
            { icon: "notifications-outline", iconSet: "Ionicons", name: "Notifications", route: 'notification' },
          ]}
        ></SettingCard>

        {/* Support */}
        <SettingCard

          header='Support'
          items={[
            { icon: "message-square", iconSet: "Feather", name: "Contact support", route: 'support' },
            { icon: "flag-outline", iconSet: "Ionicons", name: "Report a problem", route: 'report' },
            { icon: "alert-circle-outline", iconSet: "Ionicons", name: "Terms & Conditions", route: 'condition' }
          ]}
        ></SettingCard>

        {/* Logout */}
        <TouchableOpacity
          onPress={
            async () => {
              const { error } = await supabase.auth.signOut();

              if (error) {
                console.error("Login Error:", error.message);
              } else {
                router.push('/(onboard)/signin')
              }
            }
          }
        >
          <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding, globalStyles.spacer, { borderWidth: 0, backgroundColor: '#FF4D4D10' }]}>
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
              <Feather name='log-out' size={22} color={'#FF4D4D'} />
              <Text style={[globalStyles.text, { color: '#FF4D4D', fontWeight: 'bold' }]}>Log Out</Text>
            </View>
          </View>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
