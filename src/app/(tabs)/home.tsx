import AttendanceHistory from '@/src/components/attendance_history';
import CircleIcon from '@/src/components/circle_icon';
import CustomHeader from "@/src/components/custom_header";
import StatusCard from "@/src/components/status_card";
import { globalStyles } from "@/src/styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator';
import { BarChart } from 'react-native-gifted-charts';
import { SafeAreaView } from "react-native-safe-area-context";
import { traffic } from '../data/gym_traffic';


export default function Index() {
  return (
    <SafeAreaView
      style={[globalStyles.container,]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        {/* Header */}
        <CustomHeader header="GymFlow" icon="notifications-outline"></CustomHeader>

        {/* SearchBar */}
        <View style={[globalStyles.blockContainer, globalStyles.spacer, globalStyles.wrapperPadding, { flexDirection: 'row', alignItems: 'center', gap: 12, width: '100%' }]}>
          <Ionicons name='search-outline' size={20}></Ionicons>
          <TextInput
            // onChangeText={text => setInputValue(text)}
            // value={}
            placeholder="Search Anything..."
          ></TextInput>
        </View>

        {/* Daily Tracker */}
        <View style={[globalStyles.blockContainer, globalStyles.spacer, globalStyles.wrapperPadding, { padding: 12, width: '100%', height: 150, maxHeight: 150 }]}>
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

        {/* Status Container */}
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ flexGrow: 0 }}
        >
          <StatusCard icon="calendar-clear-outline" label="Days Remaining" value="7" plugin={true} status="Active" style={{ marginRight: 10 }}></StatusCard>
          <StatusCard icon="calendar-clear-outline" label="Avg Duration" value="54" plugin={false} status="mins" style={{ marginRight: 10 }}></StatusCard>
          <StatusCard icon="calendar-clear-outline" label="Days Remaining" value="7" plugin={true} status="Active"></StatusCard>
        </ScrollView>

        {/* Workout Notification */}
        <View style={[globalStyles.blockContainer, globalStyles.spacer, globalStyles.wrapperPadding, { width: '100%', height: 150, maxHeight: 150, backgroundColor: '#146EF5' }]}>
          <View style={{ padding: 10 }}>
            <Text style={[globalStyles.title, { color: '#fff', fontWeight: 'bold' }]}>Ready to workout?</Text>
            <Text style={[globalStyles.text, { fontSize: 16, color: '#fff' }]}>Time in to begin your session.</Text>
            <View style={[globalStyles.blockContainer, globalStyles.spacer, globalStyles.wrapperCenter, { width: '100%', height: 50, maxHeight: 50, backgroundColor: '#fff' }]}>
              <Text style={[globalStyles.title, { fontSize: 16 }]}>Time In</Text>
            </View>
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
              <View style={[globalStyles.blockContainer, globalStyles.spacer, globalStyles.wrapperCenter, { borderWidth: 0, flex: 3, width: 80, height: 50, maxHeight: 50, backgroundColor: '#FFA90B' }]}>
                <Text style={[globalStyles.title, { fontSize: 16, color: '#fff' }]}>Renew Now</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[globalStyles.spacer]}><Text>YOUR STATS</Text></View>

        {/* Attendanec History */}
        <View style={globalStyles.spacer}><AttendanceHistory /></View>

        {/* Membership Plan */}
        <View style={[globalStyles.blockContainer, globalStyles.spacer, globalStyles.wrapperPadding, {
          width: '100%', flex: 1,
        }]}>
          <Text style={[globalStyles.title,]}>Membership Plan</Text>
          <Text style={[globalStyles.text,]}>See how many days you've used and how many are left.</Text>

          <View style={[globalStyles.spacer, { padding: 4 }]}>
            <View style={[{ flexDirection: 'row', justifyContent: 'space-between', gap: 10, alignItems: 'center' }]}>
              <CircularProgress
                value={92}
                valueSuffix='%'
                progressValueFontSize={30}
                valueSuffixStyle={{ fontSize: 30 }}
                radius={80}
                duration={1000}
                progressValueColor={'#000000'}
                activeStrokeColor='#146EF5'
                inActiveStrokeColor='#e0e0e0'
                activeStrokeWidth={15}
                inActiveStrokeWidth={15}
                maxValue={100}
                title={'Remaining'}
                titleColor={'#B0B0B0'}
                titleStyle={{ fontSize: 12 }}
              />

              <View style={[{ padding: 10 }]}>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                  <View style={[globalStyles.roundContainer, { width: 15, height: 15, backgroundColor: '#146EF5' }]}></View>
                  <View>
                    <Text style={[globalStyles.text, { fontSize: 12 }]}>Days Remaining</Text>
                    <Text style={[globalStyles.title, { marginTop: 4, fontSize: 16, fontWeight: '500' }]}>7 Days</Text>
                  </View>
                </View>
                <View style={[globalStyles.separator, { marginVertical: 10 }]}></View>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                  <View style={[globalStyles.roundContainer, { width: 15, height: 15, backgroundColor: '#e0e0e0' }]}></View>
                  <View>
                    <Text style={[globalStyles.text, { fontSize: 12 }]}>Days Used</Text>
                    <Text style={[globalStyles.title, { marginTop: 4, fontSize: 16, fontWeight: '500' }]}>319 Days</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Gym Traffic */}
        <View style={[globalStyles.blockContainer, globalStyles.spacer, globalStyles.wrapperPadding,]}>
          <Text style={[globalStyles.text, { fontSize: 16, fontWeight: 'bold' }]}>Gym Traffic</Text>
          <Text style={[globalStyles.text, { fontSize: 14, marginTop: 4 }]}>Find the best time to work out based on activity.</Text>
          <View style={[, { padding: 10 }]}>
            <BarChart data={traffic.value}
              maxValue={60}
              xAxisLabelTexts={traffic.time}
              noOfSections={4}
              yAxisLabelWidth={25}
              yAxisThickness={1}
              yAxisTextStyle={{ fontSize: 10 }}
              yAxisColor={'#e0e0e0'}
              xAxisThickness={1}
              xAxisLabelTextStyle={{ fontSize: 10 }}
              xAxisColor={'#e0e0e0'}
              barBorderTopRightRadius={4}
              barBorderTopLeftRadius={4}
              disableScroll={true}
              barWidth={28}
              initialSpacing={16}
              spacing={16}
              rulesType='solid'
            ></BarChart>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
