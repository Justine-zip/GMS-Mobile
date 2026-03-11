import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const data = [
    {
        date: "Feb 20",
        day: "Fri",
        start: 7,
        end: 1.8,
        duration: "3h 36m",
    },
    {
        date: "Feb 19",
        day: "Thu",
        start: 6,
        end: 2,
        duration: "1h 8m",
    },
    {
        date: "Feb 18",
        day: "Wed",
        start: 2.6,
        end: 18,
        duration: "2h 51m",
    },
    {
        date: "Feb 17",
        day: "Tue",
        start: null,
        end: null,
        duration: "-",
    },
];

const TOTAL_HOURS = 24;

export default function AttendanceHistoryChart() {
    return (
        <View style={[globalStyles.blockContainer, styles.card, {
            width: '100%',
            paddingVertical: 20,
            paddingHorizontal: 20,
        }]}>
            <Text style={styles.title}>Attendance History</Text>
            <Text style={styles.subtitle}>
                Find the best time to work out based on activity.
            </Text>

            {/* Time Labels */}
            <View style={styles.header}>
                <View style={styles.dayMap}>
                    {["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"].map((t) => (
                        <Text key={t} style={styles.timeLabel}>{t}</Text>
                    ))}
                </View>
                <Text>Duration</Text>
            </View>

            {data.map((item, index) => (
                <View key={index} style={styles.row}>

                    {/* Date */}
                    <View style={styles.date}>
                        <Text style={styles.dateText}>{item.date}</Text>
                        <Text style={styles.day}>{item.day}</Text>
                    </View>

                    {/* Timeline */}
                    <View style={styles.timeline}>
                        {item.start !== null && (
                            <View
                                style={[
                                    styles.session,
                                    {
                                        left: `${(item.start / TOTAL_HOURS) * 100}%`,
                                        width: `${((item.end - item.start) / TOTAL_HOURS) * 100}%`,
                                    },
                                ]}
                            >
                                <Text style={styles.sessionText}>
                                    {item.start}-{item.end}
                                </Text>
                            </View>
                        )}

                        {item.start === null && (
                            <Text style={styles.noVisit}>No visit</Text>
                        )}
                    </View>

                    {/* Duration */}
                    <Text style={styles.duration}>{item.duration}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 16,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
    },

    subtitle: {
        color: "#666",
        marginBottom: 20,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    dayMap: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 75,
        gap: 10
    },

    timeLabel: {
        fontSize: 8,
        color: "#888",
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 14,
    },

    date: {
        width: 70,
    },

    dateText: {
        fontWeight: "600",
    },

    day: {
        color: "#888",
    },

    timeline: {
        flex: 1,
        height: 40,
        backgroundColor: "#f3f3f3",
        borderRadius: 10,
        justifyContent: "center",
    },

    session: {
        position: "absolute",
        height: 28,
        backgroundColor: "#1e6dfb",
        borderRadius: 20,
        justifyContent: "center",
        alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },

    sessionText: {
        color: "white",
        fontSize: 12,
    },

    duration: {
        width: 60,
        textAlign: "right",
        fontWeight: 'bold'
    },

    noVisit: {
        textAlign: "center",
        color: "#aaa",
    },
});