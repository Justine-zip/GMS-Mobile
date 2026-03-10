import CircleIcon from "@/src/components/circle_icon";
import StatusCard from "@/src/components/status_card";
import { globalStyles } from "@/src/styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={[globalStyles.container,]}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={globalStyles.title}>GymFlow</Text>
        <CircleIcon name="notifications-outline" onPress={() => console.log('#d3ffe1' + '50')} />
      </View>

      <View style={[globalStyles.blockContainer, globalStyles.spacer, { flexDirection: 'row', alignItems: 'center', gap: 12, width: '100%' }]}>
        <Ionicons name='search-outline' size={20}></Ionicons>
        <TextInput
          // onChangeText={text => setInputValue(text)}
          // value={}
          placeholder="Search Anything..."
        ></TextInput>
      </View>

      <View style={[globalStyles.blockContainer, globalStyles.spacer, { padding: 12, width: '100%', height: 150, maxHeight: 150 }]}>
        <View style={{ flexDirection: 'row', gap: 4, padding: 6, }}>
          <View style={[globalStyles.roundContainer, {
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
          }]}>
            <Image source={require('../../../assets/images/main/UserPhoto.png')} style={{ width: '100%', height: '100%' }}
              resizeMode="cover"></Image>
          </View>
          <View style={{ flex: 10, flexDirection: 'column', padding: 10 }}>
            <Text style={[globalStyles.text]}>Welcome back, Emma!</Text>
            <Text style={[globalStyles.text, { fontSize: 16, fontWeight: 'bold', marginTop: 6 }]}>You have a 3 days streak going.</Text>
            <View style={[globalStyles.spacer, { flexDirection: 'row', gap: 8, }]}>
              <CircleIcon backgroundcolor={'#f1f1f1'} iconColor="#fff" textColor={'#B0B0B0'} size={14} label={'Mon'} />
              <CircleIcon backgroundcolor={'#f1f1f1'} iconColor="#fff" textColor={'#B0B0B0'} size={14} label={'Tue'} />
              <CircleIcon name="checkmark" backgroundcolor={'#146EF5'} textColor={'#146EF5'} iconColor="#fff" size={14} label={'Wed'} />
              <CircleIcon name="checkmark" backgroundcolor={'#146EF5'} textColor={'#146EF5'} iconColor="#fff" size={14} label={'Thur'} />
              <CircleIcon name="checkmark" backgroundcolor={'#146EF5'} textColor={'#146EF5'} iconColor="#fff" size={14} label={'Fri'} />
              <CircleIcon backgroundcolor={'#fff'} iconColor="#fff" textColor={'#B0B0B0'} size={14} label={'Sat'} />
              <CircleIcon backgroundcolor={'#fff'} iconColor="#fff" textColor={'#B0B0B0'} size={14} label={'Sun'} />

            </View>
          </View>
        </View>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ flexGrow: 0 }}
      >
        <StatusCard icon="calendar-clear-outline" label="Days Remaining" value="7" plugin={true} status="Active" style={{ marginRight: 10 }}></StatusCard>
        <StatusCard icon="calendar-clear-outline" label="Avg Duration" value="54" plugin={false} status="mins" style={{ marginRight: 10 }}></StatusCard>
        <StatusCard icon="calendar-clear-outline" label="Days Remaining" value="7" plugin={true} status="Active"></StatusCard>
      </ScrollView>

      <View style={[globalStyles.blockContainer, globalStyles.spacer, { width: '100%', height: 150, maxHeight: 150, backgroundColor: '#146EF5' }]}>
        <View style={{ padding: 10 }}>
          <Text style={[globalStyles.text, { fontSize: 20, color: '#fff', fontWeight: 'bold' }]}>Ready to workout?</Text>
          <Text style={[globalStyles.text, { fontSize: 16, color: '#fff' }]}>Time in to begin your session.</Text>
          <View style={[globalStyles.blockContainer, globalStyles.spacer, globalStyles.wrapper, { width: '100%', height: 50, maxHeight: 50, backgroundColor: '#fff' }]}>
            <Text style={[globalStyles.title, { fontSize: 16 }]}>Time In</Text>
          </View>
        </View>
      </View>

      <View style={[globalStyles.blockContainer, globalStyles.spacer, { borderColor: '#ffaa0b4f', width: '100%', height: 150, maxHeight: 120, backgroundColor: '#ffaa0b1e' }]}>
        <View style={{ padding: 10 }}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <View style={{ flex: 5, flexDirection: 'column' }}>
              <Text style={[globalStyles.text, { fontSize: 18, fontWeight: 'bold' }]}>Your membership will expire in 7 days!</Text>
              <Text style={[globalStyles.text, { fontSize: 14 }]}>Don't loose access to your favorite branch</Text>
            </View>
            <View style={[globalStyles.blockContainer, globalStyles.spacer, globalStyles.wrapper, { borderWidth: 0, flex: 3, width: 80, height: 50, maxHeight: 50, backgroundColor: '#FFA90B' }]}>
              <Text style={[globalStyles.title, { fontSize: 16, color: '#fff' }]}>Time In</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={[globalStyles.spacer, {}]}><Text>YOUR STATS</Text></View>


    </SafeAreaView>
  );
}
