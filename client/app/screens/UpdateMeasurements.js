import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Link } from "react-router-native";

const UpdateMeasurements = () => {
    const [newUserSettings, setNewUserSettings] = useState({
        newUserChest: "",
        newUserWaist: "",
        newUserHip: "",
        newUserInseam: "",
    })

    const onSubmit = () => {
        Alert.alert("Got it!", "Your measurements have been updated.")
        setNewUserSettings({
            newUserChest: "",
            newUserWaist: "",
            newUserHip: "",
            newUserInseam: "",
        })
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.h1}>Measurements</Text>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Chest</Text>
                <Text style={styles.label}>Waist</Text>
                <TextInput
                    onChangeText={(number) => setNewUserSettings({ ...newUserSettings, newUserChest: number })}
                    userSettings={newUserSettings.newUserChest}
                    placeholder={'Chest'}
                    style={styles.input}
                />
                <TextInput
                    onChangeText={(number) => setNewUserSettings({ ...newUserSettings, newUserWaist: number })}
                    userSettings={newUserSettings.newUserWaist}
                    placeholder={'Waist'}
                    style={styles.input}
                />
                <Text style={styles.label}>Hips</Text>
                <Text style={styles.label}>Inseam</Text>
                <TextInput
                    onChangeText={(number) => setNewUserSettings({ ...newUserSettings, newUserHip: number })}
                    userSettings={newUserSettings.newUserHip}
                    placeholder={'Hips'}
                    style={styles.input}
                />
                <TextInput
                    onChangeText={(number) => setNewUserSettings({ ...newUserSettings, newUserInseam: number })}
                    userSettings={newUserSettings.newUserInseam}
                    placeholder={'Inseam'}
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
        </SafeAreaView >
    );
}
export default UpdateMeasurements;


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: "center",
        marginHorizontal: 30,
    },
    logo: {
        width: 95,
        height: 64,
        marginTop: 40
    },
    formContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-between"
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
        marginTop: 10,
        margin: 5,
        width: "45%"
    },
    input1: {
        width: '100%',
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
    input: {
        width: '46%',
        fontSize: 20,
        height: 60,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.90)',
        marginBottom: 0,
        borderRadius: 10,
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
