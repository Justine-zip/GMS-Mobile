import { globalStyles } from '@/src/styles/globalStyles';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Support() {
    return (
        <SafeAreaView style={[globalStyles.container, globalStyles.wrapperCenter]}>
            <Text style={[globalStyles.title]}>S U P P O R T</Text>
        </SafeAreaView>
    );
}
