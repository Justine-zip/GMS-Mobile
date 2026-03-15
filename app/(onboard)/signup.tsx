import CircleIcon from '@/src/components/circle_icon';
import CustomButton from '@/src/components/custom_button';
import CustomInputField from '@/src/components/custom_input_field';
import { globalStyles } from '@/src/styles/globalStyles';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Signup() {
    return (
        <SafeAreaView
            style={[globalStyles.container, { flex: 1, paddingHorizontal: 20 }]}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/* Main */}
                <View style={{ flex: 1 }}>
                    <View style={[globalStyles.spacer]} />
                    {/* Header */}
                    <Text style={[globalStyles.title, { fontSize: 24 }]}>Create you account</Text>
                    <Text style={[globalStyles.text]}>Join GymFlow and manage your fitness experience.</Text>
                    <View style={[globalStyles.spacer]} />
                    {/* Credentials Input Field */}
                    <View>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={[{ fontSize: 14 }]}>First Name</Text>
                                <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding, { alignItems: 'flex-start', width: '100%' }, { paddingVertical: 4, marginTop: 8 }]}>
                                    <CustomInputField placeholder="Emma" placeholderColor='#B0B0B0' />
                                </View>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={[{ fontSize: 14 }]}>Last Name</Text>
                                <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding, { alignItems: 'flex-start', width: '100%' }, { paddingVertical: 4, marginTop: 8 }]}>
                                    <CustomInputField placeholder="Williams" placeholderColor='#B0B0B0' />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[globalStyles.spacer]} />
                    <View>
                        <Text style={[{ fontSize: 14 }]}>Email</Text>
                        <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding, { alignItems: 'flex-start', width: '100%' }, { paddingVertical: 4, marginTop: 8 }]}>
                            <CustomInputField placeholder="gymflow@gmail.com" placeholderColor='#B0B0B0' />
                        </View>
                    </View>
                    <View style={[globalStyles.spacer]} />
                    <View>
                        <Text style={[{ fontSize: 14 }]}>Password</Text>
                        <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding, { alignItems: 'flex-start', width: '100%' }, { paddingVertical: 4, marginTop: 8 }]}>
                            <CustomInputField placeholder="*******" placeholderColor='#B0B0B0' />
                        </View>
                    </View>
                    <View style={[{ marginTop: 8 }]} />
                    <Text style={[globalStyles.text, { fontSize: 12 }]}>Use 8+ characters with a capital, number, and symbol.</Text>
                    <View style={[globalStyles.spacer]} />
                    <View>
                        <Text style={[{ fontSize: 14 }]}>Confirm Password</Text>
                        <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding, { alignItems: 'flex-start', width: '100%' }, { paddingVertical: 4, marginTop: 8 }]}>
                            <CustomInputField placeholder="*******" placeholderColor='#B0B0B0' />
                        </View>
                    </View>
                    <View style={[globalStyles.spacer]} />
                    {/* Input Options */}
                    <View>
                        <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
                            <View style={[{ flexDirection: 'row', gap: 8 }]}>
                                <CircleIcon name="checkmark" backgroundcolor={'#146EF5'} textColor={'#146EF5'} iconColor="#fff" size={8} />
                                <Text style={[globalStyles.text]}>Remember me</Text>
                            </View>
                            <Text style={[globalStyles.text]}>Forgot Password?</Text>
                        </View>
                    </View>
                    {/* Login */}
                    <CustomButton onPress={() => router.push('/(tabs)/home')} label='Sign up' backgroundColor='#146EF5' textColor='#fff' textSize={18} style={[{ marginTop: 40, borderWidth: 0, width: 350, alignItems: 'center' }]} />
                    <View style={[globalStyles.spacer]} />
                    {/* Continue Header */}
                    <View>
                        <View style={[{ flexDirection: 'row' }]}>
                            <View style={[globalStyles.separator, { flex: 1 }]} />
                            <Text style={[{ fontSize: 12, color: '#B0B0B0' }]}>   OR CONTINUE WITH   </Text>
                            <View style={[globalStyles.separator, { flex: 1 }]} />
                        </View>
                    </View>
                    <View style={[globalStyles.spacer]} />
                    {/* Other Methods */}
                    <View>
                        <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding]}>
                            <View style={[{ flexDirection: 'row', padding: 8 }]}>
                                <Image source={require('../../assets/images/onboard/FB.png')} style={{ width: 20, height: 20 }} />
                                <Text style={[globalStyles.title, { flex: 8, fontSize: 14, textAlign: 'center' }]}>Continue with Facebook</Text>
                            </View>
                        </View>
                        <View style={[{ marginTop: 8 }]} />
                        <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding]}>
                            <View style={[{ flexDirection: 'row', padding: 8 }]}>
                                <Image source={require('../../assets/images/onboard/Google.png')} style={{ width: 20, height: 20 }} />
                                <Text style={[globalStyles.title, { flex: 8, fontSize: 14, textAlign: 'center' }]}>Continue with Google</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[globalStyles.spacer]} />
                    {/* Signup */}
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={[globalStyles.text, { color: '#B0B0B0' }]}>Already have an account? </Text>
                            <Text style={[globalStyles.text, { color: '#146EF5', fontWeight: 'bold' }]}>Login</Text>
                        </View>
                    </View>
                </View>
                <View style={[globalStyles.spacer]} />

                {/* Terms and Conditions */}
                <View style={{ paddingBottom: 20 }}>
                    <View style={[{ flexDirection: 'row', justifyContent: 'center' }]}>
                        <Text style={{ color: '#B0B0B0', fontSize: 14, textAlign: 'center' }}>
                            By signing the account, you accept our{' '}
                            <Text style={{ color: '#000', fontWeight: 'bold' }} >Terms & Conditions</Text>{' '}
                            and{' '}
                            <Text style={{ color: '#000', fontWeight: 'bold' }}>Privacy Policy</Text>
                            .
                        </Text>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}
