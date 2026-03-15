import CircleIcon from '@/src/components/circle_icon';
import CustomButton from '@/src/components/custom_button';
import CustomInputField from '@/src/components/custom_input_field';
import { supabase } from '@/src/services/supabase';
import { globalStyles } from '@/src/styles/globalStyles';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Signin() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleUserChange = (text: string) => setUser(text);
    const handlePassChange = (text: string) => setPass(text);
    return (
        <SafeAreaView
            style={[globalStyles.container, { flex: 1, paddingHorizontal: 20 }]}
        >
            {/* Main */}
            <View style={{ flex: 1 }}>
                <View style={[globalStyles.spacer]} />

                {/* Header */}
                <Text style={[globalStyles.title, { fontSize: 24 }]}>Welcome back</Text>
                <Text style={[globalStyles.text]}>Enter your credentials to access your account</Text>
                <View style={[globalStyles.spacer, { marginTop: 40 }]} />

                {/* Credentials Input Field */}
                <View>
                    <Text style={[{ fontSize: 14 }]}>Email</Text>
                    <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding, { alignItems: 'flex-start', width: '100%' }, { paddingVertical: 4, marginTop: 8 }]}>
                        <CustomInputField onChangeText={handleUserChange} value={user} placeholder="gymflow@gmail.com" placeholderColor='#B0B0B0' />
                    </View>
                </View>

                <View style={[globalStyles.spacer]} />

                <View>
                    <Text style={[{ fontSize: 14 }]}>Password</Text>
                    <View style={[globalStyles.blockContainer, globalStyles.wrapperPadding, { alignItems: 'flex-start', width: '100%' }, { paddingVertical: 4, marginTop: 8 }]}>
                        <CustomInputField onChangeText={handlePassChange} value={pass} placeholder="********" placeholderColor='#B0B0B0' />

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

                <CustomButton
                    //Credential Checker
                    // onPress={() => console.log(user, pass)}

                    // Sign in
                    onPress={async () => {
                        if (user.trim() && pass.trim()) {
                            const { data, error } = await supabase.auth.signInWithPassword({
                                email: user,
                                password: pass,
                            });

                            if (error) {
                                console.error("Login Error:", error.message);
                            } else {
                                console.log("Login Success! User ID:", data.user?.id);
                                router.push('/(tabs)/home');
                            }
                        } else {
                            console.warn("Please enter both email and password.");
                        }
                    }}


                    label='Login' backgroundColor='#146EF5' textColor='#fff' textSize={18} style={[{ marginTop: 40, borderWidth: 0, width: 350, alignItems: 'center' }]} />

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
                        <Text style={[globalStyles.text, { color: '#B0B0B0' }]}>Don't have an account? </Text>
                        <TouchableWithoutFeedback
                            onPress={() => router.push('/(onboard)/signup')}
                        >
                            <Text style={[globalStyles.text, { color: '#146EF5', fontWeight: 'bold' }]}>Sign up</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>

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

        </SafeAreaView>
    );
}
