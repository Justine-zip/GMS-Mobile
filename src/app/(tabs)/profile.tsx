import CustomHeader from "@/src/components/custom_header";
import { globalStyles } from "@/src/styles/globalStyles";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={[globalStyles.container]}
    >
      {/* Header */}
      <CustomHeader header="Profile" icon="settings" iconSet="Feather" isCircled={false}></CustomHeader>

      {/* Profile Preview */}
      <View style={[globalStyles.spacer, { width: '100%', height: 150, maxHeight: 150 }]}>
        <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
          <View style={{ position: 'relative' }}>
            <View
              style={[
                globalStyles.roundContainer,
                {
                  width: 75,
                  height: 75,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                  position: 'relative',
                },
              ]}
            >
              <Image
                source={require('../../../assets/images/main/UserPhoto.png')}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                width: 14,
                height: 14,
                borderRadius: 30,
                backgroundColor: '#00A535',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#ffffff',
              }}
            >
            </View>
          </View>

          <View>
            <Text style={[globalStyles.text, { fontSize: 16, fontWeight: 'bold', marginTop: 6 }]}>Emma Williams</Text>
            <Text style={[globalStyles.text]}>emma.williams@email.com</Text>
          </View>

          <View style={[globalStyles.blockContainer, { padding: 10, alignSelf: 'center' }]}>
            <Text>Edit Profile</Text>
          </View>
        </View>
      </View>
      <Text>P R O F I L E</Text>
    </SafeAreaView>
  );
}
