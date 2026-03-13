import CustomHeader from '@/src/components/custom_header';
import { globalStyles } from '@/src/styles/globalStyles';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
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
        <View style={[globalStyles.spacer]}><Text>Account</Text></View>
        <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding, globalStyles.spacer]}>
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <Ionicons name='person-circle-outline' color={'#000'} size={24} />
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={[globalStyles.title, { fontSize: 16 }]}>Account</Text>
                <MaterialIcons name='navigate-next' color={'#000'} size={24} />
              </View>
              <View style={[globalStyles.separator]}></View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <Ionicons name='lock-closed-outline' color={'#000'} size={24} />
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={[globalStyles.title, { fontSize: 16 }]}>Privacy & Security</Text>
                <MaterialIcons name='navigate-next' color={'#000'} size={24} />
              </View>
              <View style={[globalStyles.separator]}></View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <MaterialIcons name='payment' color={'#000'} size={24} />
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={[globalStyles.title, { fontSize: 16 }]}>Payment & Billing</Text>
                <MaterialIcons name='navigate-next' color={'#000'} size={24} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
