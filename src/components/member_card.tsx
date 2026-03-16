import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import StatusIndex from './status_index';

interface MemberBranchProps {
    name: string,
    email: string,
    phone: string,
    expiration_date: string,
    plan: string,
    status: string,
}

export default function MemberCard({ name, email, phone, expiration_date, plan, status }: MemberBranchProps) {
    return (
        <TouchableOpacity
            onPress={() => console.log(name)}
        >
            <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding, globalStyles.spacer]}>
                <View style={[{ padding: 10 }]}>
                    <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }]}>
                        <View>
                            <Text>Member</Text>
                            <Text style={[globalStyles.title, { fontSize: 16 }]}>{name}</Text>
                            <Text>{email}</Text>
                        </View>
                        <StatusIndex label={status} />
                    </View>
                    <View style={[globalStyles.spacer]}>
                        <Text>Phone</Text>
                        <Text>+63{phone}</Text>
                    </View>

                    <View style={[globalStyles.separator]}></View>

                    <View style={[globalStyles.spacer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <View>
                            <Text>Plan</Text>
                            <Text style={{ fontWeight: '500' }}>{plan}</Text>
                        </View>
                        <View>
                            <Text>Plan Expiration</Text>
                            <Text style={{ fontWeight: '500' }}>{expiration_date}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
