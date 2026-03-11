import CustomHeader from "@/src/components/custom_header";
import StatusCard from "@/src/components/status_card";
import { globalStyles } from "@/src/styles/globalStyles";
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
        <CustomHeader header="Attendance" icon="more-horizontal" isCircled={false}></CustomHeader>
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
      </ScrollView>
    </SafeAreaView>
  );
}
