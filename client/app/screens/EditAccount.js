import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { Link } from "react-router-native";

const EditAccount = () => {
    const [newUserSettings, setNewUserSettings] = useState({
        newUsername: "",
        newPassword: ""
    })

    const onSubmit = () => {
        Alert.alert("Got it!", "We've updated your account.")
        console.log(newUserSettings)
        setNewUserSettings({
            newUsername: "",
            newPassword: ""
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Edit Account</Text>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Update Username</Text>
                <TextInput
                    onChangeText={(text) => setNewUserSettings({ ...newUserSettings, newUsername: text })}
                    newUserSettings={newUserSettings.newUsername}
                    placeholder={'Username'}
                    style={styles.input}
                />
                <Text style={styles.label}>Update Password</Text>
                <TextInput
                    onChangeText={(text) => setNewUserSettings({ ...newUserSettings, newPassword: text })}
                    newUserSettings={newUserSettings.newPassword}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />
            </View>
            <View style={styles.buttonBox}>
                <View style={styles.yellowButton}>
                    <Link to="/account"
                        title={'Submit'}
                        onPress={onSubmit}
                        component={TouchableOpacity} activeOpacity={0.7}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </Link>
                </View>
            </View>
        </View>
    );
}
export default EditAccount;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        marginTop: "50%"
    },
    label: {
        color: "#000",
        marginTop: 20,
        margin: 5,
        width: "45%"
    },
    formContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 30
    },
    input: {
        width: '92%',
        fontSize: 20,
        height: 60,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.90)',
        marginBottom: 0,
        borderRadius: 10,
        marginRight: 20,
        borderWidth: 1,
        borderColor: 'gray',
    },
    buttonBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 50
    },
    yellowButton: {
        width: '60%',
        backgroundColor: '#ffc843',
        height: 60,
        margin: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: 13,
    },
});