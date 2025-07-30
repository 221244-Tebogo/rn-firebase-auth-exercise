import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { logoutUser, getUserInfo } from '../services/authService'
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {

    // TODO: handle logout
    const handleLogout = () => {
        logoutUser()
    }

    return (
        <SafeAreaView>
            <View style={{padding:20}}>
                <Text>Profile</Text>

                {/* TODO: Show logged in user info */}
                <Text>{getUserInfo()?.email}</Text>
                    <Text>{getUserInfo()?.uid}</Text> {/* or use displayName */}
                <Button 
                    title="Sign Out"
                    color="green"
                    onPress={handleLogout} />
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen