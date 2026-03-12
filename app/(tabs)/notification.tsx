import CustomButton from "@/src/components/custom_button";
import CustomHeader from "@/src/components/custom_header";
import NotificationCard from "@/src/components/notification_card";
import { notificationData } from "@/src/data/notification_data";
import { globalStyles } from "@/src/styles/globalStyles";
import { FlashList } from "@shopify/flash-list";
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

        <View style={[globalStyles.spacer]} />

        {/* Notification List */}
        <Text style={[globalStyles.title, { fontSize: 16 }]}>New</Text>
        <FlashList
          data={notificationData.filter((item) => item.isNew)}
          renderItem={({ item }) => (
            <NotificationCard
              icon={item.icon}
              iconColor={item.iconColor}
              header={item.header}
              description={item.description}
              time={item.time}
              isNew={item.isNew}
            />
          )}
          ItemSeparatorComponent={() => <View style={globalStyles.spacer} />}
          contentContainerStyle={{ paddingVertical: 12 }}
        />

        <View style={[globalStyles.spacer]} />

        <Text style={[globalStyles.title, { fontSize: 16 }]}>Earlier</Text>
        <FlashList
          data={notificationData.filter((item) => !item.isNew)}
          renderItem={({ item }) => (
            <NotificationCard
              icon={item.icon}
              iconColor={item.iconColor}
              header={item.header}
              description={item.description}
              time={item.time}
              isNew={item.isNew}
            />
          )}
          ItemSeparatorComponent={() => <View style={globalStyles.spacer} />}
          contentContainerStyle={{ paddingVertical: 12 }}
        />

      </ScrollView>
    </SafeAreaView>
  );
}
