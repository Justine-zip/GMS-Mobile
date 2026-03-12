import AttendanceCard from "@/src/components/attendance_card";
import CustomHeader from "@/src/components/custom_header";
import StatusCard from "@/src/components/status_card";
import { attendanceData } from "@/src/data/attendance_data";
import { globalStyles } from "@/src/styles/globalStyles";
import { FlashList } from "@shopify/flash-list";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={globalStyles.container}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}>
        {/* Header */}
        <CustomHeader header="Attendance" icon="more-horizontal" iconSet="Feather" isCircled={false}></CustomHeader>
        <Text>Track your progress, analyze your workout durations, and stay consistent with your fitness goals.</Text>
        {/* Status Container */}
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ flexGrow: 0 }}
        >
          <StatusCard iconSet="Ionicons" icon="calendar-clear-outline" label="Total Visits" value="23" plugin={true} status="Active" style={{ marginRight: 10 }}></StatusCard>
          <StatusCard iconSet="Entypo" icon="stopwatch" label="Avg. Workout Dur" value="98" plugin={false} status="mins" style={{ marginRight: 10 }}></StatusCard>
          <StatusCard iconSet="Ionicons" icon="calendar-clear-outline" label="Days Remaining" value="7" plugin={true} status="Active"></StatusCard>
        </ScrollView>
        {/* Attendance History */}
        <Text style={[globalStyles.title, globalStyles.spacer]}>Attendance History</Text>
        <FlashList
          data={attendanceData}
          renderItem={({ item }) => (
            <AttendanceCard
              date={item.date}
              day={item.day}
              branch={item.branch}
              timeIn={item.timeIn}
              timeOut={item.timeOut}
              duration={item.duration}
              status={item.status}
            />
          )}
        ></FlashList>
      </ScrollView>
    </SafeAreaView>
  );
}
