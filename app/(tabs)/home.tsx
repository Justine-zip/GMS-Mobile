import CustomHeader from "@/src/components/custom_header";
import CustomInputField from '@/src/components/custom_input_field';
import StatusCard from "@/src/components/status_card";
import { revenueFilter } from "@/src/const/revenueFilter";
import { screenWidth } from "@/src/const/screenWidth";
import { memberGrowthData } from "@/src/data/member_growth";
import { salesRevenueData } from "@/src/data/sales_revenue";
import { globalStyles } from "@/src/styles/globalStyles";
import { yAxisLabels } from "@/src/utils/y_label_formatter";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator';
import { Dropdown } from "react-native-element-dropdown";
import { BarChart, LineChart } from 'react-native-gifted-charts';
import { SafeAreaView } from "react-native-safe-area-context";
import { trafficStaff } from '../../src/data/gym_traffic';


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
        <CustomHeader header="GymFlow" icon="notifications-outline" iconSet='Feather' isCircled={true} isHome></CustomHeader>

        {/* SearchBar */}
        <View style={[globalStyles.blockContainer, globalStyles.spacer, globalStyles.wrapperPadding, { flexDirection: 'row', alignItems: 'center', gap: 12, width: '100%' }, { paddingVertical: 4 }]}>
          <Ionicons name='search-outline' size={20}></Ionicons>
          <CustomInputField placeholder="Search anything..." placeholderColor='#B0B0B0' />

        </View>

        {/* Status Container */}
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ flexGrow: 0 }}
        >
          <StatusCard iconSet="Ionicons" icon="person-outline" label="Total Members" value="184" plugin={true} status="Active" style={{ marginRight: 10 }}></StatusCard>
          <StatusCard iconSet="Ionicons" icon="person-add-outline" label="Active Members" value="54" plugin={false} status="mins" style={{ marginRight: 10 }}></StatusCard>
          <StatusCard iconSet="Ionicons" icon="person-outline" label="Days Remaining" value="7" plugin={true} status="Active"></StatusCard>
        </ScrollView>

        {/* Member Growth  */}
        <View style={[globalStyles.blockContainer, globalStyles.spacer, globalStyles.wrapperPadding,]}>
          <Text style={[globalStyles.text, { fontSize: 16, fontWeight: 'bold' }]}>Member Growth</Text>
          <Text style={[globalStyles.text, { fontSize: 14, marginTop: 4 }]}>Total active members over time</Text>
          <View style={[, { padding: 10 }]}>
            <LineChart
              data={memberGrowthData}
              color='#146EF5'
              areaChart
              startFillColor="#e4efff13"
              endFillColor="#e4efff13"
              maxValue={600}
              noOfSections={4}
              yAxisLabelWidth={25}
              yAxisThickness={1}
              yAxisTextStyle={{ fontSize: 10 }}
              yAxisColor="#e0e0e0"
              xAxisThickness={1}
              xAxisLabelTextStyle={{ fontSize: 10 }}
              xAxisColor="#e0e0e0"
              hideRules
              rulesType="solid"
              initialSpacing={16}
              width={screenWidth - 120}
              spacing={50}
              thickness={3}
              hideDataPoints={true}
            />
          </View>
        </View>

        {/* Membership Overview */}
        <View style={[globalStyles.blockContainer, globalStyles.spacer, globalStyles.wrapperPadding, {
          width: '100%', flex: 1,
        }]}>
          <Text style={[globalStyles.title,]}>Membership Overview</Text>
          <Text style={[globalStyles.text,]}>Compares member losses and new sign-ups</Text>

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
                    <Text style={[globalStyles.text, { fontSize: 12 }]}>New Members</Text>
                    <Text style={[globalStyles.title, { marginTop: 4, fontSize: 16, fontWeight: '500' }]}>156</Text>
                  </View>
                </View>
                <View style={[globalStyles.separator]}></View>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                  <View style={[globalStyles.roundContainer, { width: 15, height: 15, backgroundColor: '#e0e0e0' }]}></View>
                  <View>
                    <Text style={[globalStyles.text, { fontSize: 12 }]}>Cancelled Members</Text>
                    <Text style={[globalStyles.title, { marginTop: 4, fontSize: 16, fontWeight: '500' }]}>24</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Peak Hours */}
        <View style={[globalStyles.blockContainer, globalStyles.spacer, globalStyles.wrapperPadding,]}>
          <Text style={[globalStyles.text, { fontSize: 16, fontWeight: 'bold' }]}>Peak Hours</Text>
          <Text style={[globalStyles.text, { fontSize: 14, marginTop: 4 }]}>Member activity throughout the day</Text>
          <View style={[, { padding: 10 }]}>
            <BarChart data={trafficStaff.value}
              maxValue={60}
              xAxisLabelTexts={trafficStaff.time}
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
              barWidth={22}
              initialSpacing={16}
              spacing={12}
              rulesType='solid'
            ></BarChart>
          </View>
        </View>

        {/* Sales Revenue */}
        <View style={[globalStyles.blockContainer, globalStyles.spacer, globalStyles.wrapperPadding,]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <Text style={[globalStyles.text, { fontSize: 16, fontWeight: 'bold' }]}>Sales Revenue</Text>
            <Dropdown
              style={{
                width: 120,
                height: 36,
                borderRadius: 6,
                borderWidth: 1,
                borderColor: "#e0e0e0",
                paddingHorizontal: 10
              }}
              data={revenueFilter}
              labelField="label"
              valueField="values"
              onChange={() => null}
            />
          </View>
          <Text style={[globalStyles.text, { fontSize: 14, marginTop: 4 }]}>Revenue performance for the past 30 days</Text>
          <View style={[, { padding: 10 }]}>
            <BarChart data={salesRevenueData.value}
              maxValue={15000}
              xAxisLabelTexts={salesRevenueData.time}
              noOfSections={3}
              yAxisLabelWidth={25}
              yAxisLabelPrefix="$"
              yAxisLabelTexts={yAxisLabels}
              renderTooltip={(item: any) => (
                <View
                  style={{
                    backgroundColor: "#000000",
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    borderRadius: 6,
                  }}
                >
                  <Text style={{ fontSize: 10, color: '#fff' }}>
                    Total: ${item.value}
                  </Text>
                </View>
              )}
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
              initialSpacing={36}
              spacing={40}
              rulesType='solid'
            ></BarChart>
          </View>
        </View>

        <View style={globalStyles.spacer} />

      </ScrollView>
    </SafeAreaView>
  );
}
