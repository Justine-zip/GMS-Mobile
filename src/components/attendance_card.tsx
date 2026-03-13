import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import StatusIndex from './status_index';

interface AttendanceBranchProps {
    date: string,
    day: string,
    branch: string,
    timeIn: string,
    timeOut: string,
    duration: string,
    status: string,
}

export default function AttendanceCard({ date, day, branch, timeIn, timeOut, duration, status }: AttendanceBranchProps) {
    return (
        <TouchableOpacity
            onPress={() => console.log(branch)}
        >
            <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding, globalStyles.spacer]}>
                <View style={[{ padding: 10 }]}>
                    <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }]}>
                        <View>
                            <Text>Date</Text>
                            <Text style={[globalStyles.title, { fontSize: 16 }]}>{date}</Text>
                            <Text>{day}</Text>
                        </View>
                        <StatusIndex label={status} />
                    </View>
                    <View style={[globalStyles.spacer]}>
                        <Text>Branch</Text>
                        <Text>{branch}</Text>
                    </View>
                    <View style={[globalStyles.spacer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <View>
                            <Text>Time In</Text>
                            <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                                <Feather name="clock" size={14} color={'#00A535'} />
                                <Text style={{ fontWeight: '500' }}>{timeIn}</Text>
                            </View>
                        </View>
                        <View>
                            <Text>Time Out</Text>
                            <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                                <Feather name="clock" size={14} color={'#00A535'} />
                                <Text style={{ fontWeight: '500' }}>{timeOut}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[globalStyles.separator]}></View>
                    <View>
                        <Text>Duration</Text>
                        <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                            <Feather name="clock" size={14} />
                            <Text>{duration}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
