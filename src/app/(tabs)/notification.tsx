import CustomButton from "@/src/components/custom_button";
import CustomHeader from "@/src/components/custom_header";
import { globalStyles } from "@/src/styles/globalStyles";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={globalStyles.container}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        {/* Header */}
        <CustomHeader header="Notification" icon="more-horizontal" isCircled={false}></CustomHeader>
        {/* Notification Filter */}
        <View style={[globalStyles.spacer, { flexDirection: 'row', gap: 8 }]}>
          <CustomButton label="All" backgroundColor="#146EF5" textColor="#fff" />
          <CustomButton label="Unread" backgroundColor="#fff" textColor="#000" />
        </View>

        <Text>New</Text>
        {/* Notification Card */}

      </ScrollView>
    </SafeAreaView>
  );
}
