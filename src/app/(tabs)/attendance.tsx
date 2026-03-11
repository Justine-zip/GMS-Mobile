import CustomHeader from "@/src/components/custom_header";
import { globalStyles } from "@/src/styles/globalStyles";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={globalStyles.container}
    >
      {/* Header */}
      <CustomHeader header="Attendance" icon="more-horizontal" isCircled={false}></CustomHeader>
      <Text>A T T E N D A N C E</Text>
    </SafeAreaView>
  );
}
