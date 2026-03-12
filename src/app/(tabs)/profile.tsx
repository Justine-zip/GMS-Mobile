import CustomHeader from "@/src/components/custom_header";
import { globalStyles } from "@/src/styles/globalStyles";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={[globalStyles.container]}
    >
      {/* Header */}
      <CustomHeader header="Profile" icon="settings" iconSet="Feather" isCircled={false}></CustomHeader>
      <Text>P R O F I L E</Text>
    </SafeAreaView>
  );
}
