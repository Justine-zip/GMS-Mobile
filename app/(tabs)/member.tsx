import CustomHeader from "@/src/components/custom_header";
import MemberCard from "@/src/components/member_card";
import { memberData } from "@/src/data/member_data";
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
                stickyHeaderIndices={[0]}>
                {/* Header */}
                <CustomHeader header="Members" icon="more-horizontal" iconSet="Feather" isCircled={false}></CustomHeader>
                <Text style={{ marginHorizontal: 8 }}>Manage gym members</Text>

                {/* Attendance History */}
                <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding, globalStyles.spacer, { marginTop: 40 }]}>
                    <FlashList
                        data={memberData}
                        renderItem={({ item }) => (
                            <MemberCard
                                name={item.name}
                                email={item.email}
                                phone={item.phone}
                                expiration_date={item.expiration_date}
                                plan={item.plan}
                                status={item.status}
                            />
                        )}
                    ></FlashList>
                </View>

                <View style={globalStyles.spacer} />

            </ScrollView>
        </SafeAreaView>
    );
}
