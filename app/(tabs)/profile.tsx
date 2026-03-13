import CustomHeader from "@/src/components/custom_header";
import StatusIndex from "@/src/components/status_index";
import { globalStyles } from "@/src/styles/globalStyles";
import { router } from "expo-router";
import { ClipboardMinus } from "lucide-react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as Progress from "react-native-progress";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={[globalStyles.container]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        {/* Header */}
        <CustomHeader header="Profile" icon="settings" iconSet="Feather" isCircled={false} onPress={() => router.push('/setting')}></CustomHeader>
        {/* Profile Preview */}
        <View style={[{ width: '100%', }]}>
          <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
            <View style={{ position: 'relative' }}>
              <View
                style={[
                  globalStyles.roundContainer,
                  {
                    width: 65,
                    height: 65,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                    position: 'relative',
                  },
                ]}
              >
                <Image
                  source={require('../../assets/images/main/UserPhoto.png')}
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
            <TouchableOpacity>
              <View style={[globalStyles.blockContainer, { padding: 10, alignSelf: 'center' }]}>
                <Text>Edit Profile</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* Subscription Notification */}
        <View style={[globalStyles.blockContainer, globalStyles.spacer, globalStyles.wrapperPadding, { borderColor: '#ffaa0b4f', width: '100%', height: 150, maxHeight: 120, backgroundColor: '#ffaa0b1e' }]}>
          <View style={{ padding: 10 }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ flex: 5, flexDirection: 'column' }}>
                <Text style={[globalStyles.text, { fontSize: 16, fontWeight: 'bold' }]}>Your membership will expire in 7 days!</Text>
                <Text style={[globalStyles.text, { fontSize: 14, marginTop: 4 }]}>Don't loose access to your favorite branch</Text>
              </View>
              <TouchableOpacity style={[globalStyles.blockContainer, globalStyles.spacer, globalStyles.wrapperCenter, { borderWidth: 0, flex: 3, width: 80, height: 50, maxHeight: 50, backgroundColor: '#FFA90B' }]}>
                <View >
                  <Text style={[globalStyles.title, { fontSize: 16, color: '#fff' }]}>Renew Now</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Membership Plan */}
        <View style={[globalStyles.blockContainer, globalStyles.spacer, { width: '100%' }]}>
          <View style={[globalStyles.wrapperPadding, { marginTop: 10 }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <Text style={[{ fontSize: 12 }]}>MEMBERSHIP PLAN</Text>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                  <Text style={[globalStyles.title, { fontSize: 18, color: '#146EF5' }]}>Annual Plan</Text>
                  <Text style={{ fontSize: 10, color: '#B0B0B0' }}> / 1 year</Text>
                </View>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={[{ fontSize: 12 }]}>EXPIRES ON</Text>
                <Text style={[globalStyles.title, { fontSize: 14, color: '#000' }]}>February 16, 2027</Text>
              </View>
            </View>
            <View style={[globalStyles.spacer]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 14 }}>USAGE</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#146EF5' }}>75%</Text>
              </View>
              <View style={{ marginTop: 6, marginVertical: 10, width: '100%' }}>
                <Progress.Bar
                  progress={.75}
                  width={null}
                  color="#3a89ff"
                  unfilledColor="#f1f1f1"
                  borderWidth={0}
                  height={10}
                  borderRadius={8}
                /></View>
            </View>
          </View>
          <View style={[globalStyles.separator]} />
          <View style={[globalStyles.wrapperPadding, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12 }]}>
            <View style={[globalStyles.blockContainer, { paddingVertical: 8, paddingHorizontal: 14, backgroundColor: '#146ef50e', borderRadius: 6, borderColor: '#146ef52c' }]}>
              <Text style={[globalStyles.text, { fontWeight: 'bold', fontSize: 14, color: '#146EF5' }]}>#GF-2940-AM</Text>
            </View>
            <Text style={[globalStyles.text, { fontWeight: 'bold', fontSize: 16, color: '#146EF5' }]}>Extent Plan</Text>
          </View>
        </View>
        <View style={[globalStyles.spacer]}></View>
        {/* Attendance Monitoring */}
        <Text>ATTENDANCE MONITORING</Text>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <TouchableOpacity>
            <View style={[globalStyles.spacer, { alignSelf: 'flex-start' }]}>
              <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding, { width: 170, maxWidth: 170, height: 175, position: 'relative', }]}>
                <View style={{ backgroundColor: '#e5efff', padding: 8, borderRadius: 8, alignSelf: 'flex-start', marginTop: 8 }}>
                  <ClipboardMinus size={30} color={'#146EF5'} />
                </View>
                <Text style={[globalStyles.title, { fontSize: 16, marginTop: 8 }]}>View Personal History</Text>
                <Text style={[globalStyles.text, { fontSize: 14 }]}>Track your check-ins and session duration.</Text>
              </View>
              <View
                style={{
                  position: 'absolute',
                  top: 15,
                  right: 10,
                }}
              >
                <StatusIndex label="Enable" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[globalStyles.spacer, { alignSelf: 'flex-start' }]}>
              <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding, { width: 170, maxWidth: 170, height: 175, position: 'relative', }]}>
                <View style={{ backgroundColor: '#e5efff', padding: 8, borderRadius: 8, alignSelf: 'flex-start', marginTop: 8 }}>
                  <ClipboardMinus size={30} color={'#146EF5'} />
                </View>
                <Text style={[globalStyles.title, { fontSize: 16, marginTop: 8 }]}>Workout Progress</Text>
                <Text style={[globalStyles.text, { fontSize: 14 }]}>Record and manage your work sessions.</Text>
              </View>
              <View
                style={{
                  position: 'absolute',
                  top: 15,
                  right: 10,
                }}
              >
                <StatusIndex label="Active" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}
