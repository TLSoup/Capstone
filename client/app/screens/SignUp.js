import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image, TextInput, StyleSheet, TouchableOpacity, } from "react-native";
import { Link } from "react-router-native";

const SignUp = () => {
    const [userSettings, setUserSettings] = useState({
        username: "",
        email: "",
        password: "",
        userChest: "",
        userWaist: "",
        userHip: "",
        userInseam: "",
    })

    const onSubmit = () => {
        fetch('http://localhost:5000/users/createNewUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userSettings),
        })
            .then((response) => {
                console.log(JSON.stringify(response))
            })
            .catch((error) => {
                console.error(JSON.stringify(error));
            })

        console.log(userSettings)
        setUserSettings({
            username: "",
            email: "",
            password: "",
            userChest: "",
            userWaist: "",
            userHip: "",
            userInseam: "",
        })

    };


    return (
        <SafeAreaView style={styles.container}>
            <Link to="/" component={TouchableOpacity} activeOpacity={1}>
                <Image style={styles.logo} source={require("../assets/fitlyLogo.png")} />
            </Link>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    onChangeText={(text) => setUserSettings({ ...userSettings, username: text })}
                    userSettings={userSettings.username}
                    placeholder={'Username'}
                    style={styles.input1}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    onChangeText={(text) => setUserSettings({ ...userSettings, email: text })}
                    userSettings={userSettings.email}
                    placeholder={'Email'}
                    style={styles.input1}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    onChangeText={(text) => setUserSettings({ ...userSettings, password: text })}
                    userSettings={userSettings.password}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input1}
                />
            </View>
            <Text style={styles.h1}>Measurements</Text>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Chest</Text>
                <Text style={styles.label}>Waist</Text>
                <TextInput
                    onChangeText={(number) => setUserSettings({ ...userSettings, userChest: number })}
                    userSettings={userSettings.userChest}
                    placeholder={'Chest'}
                    style={styles.input}
                />
                <TextInput
                    onChangeText={(number) => setUserSettings({ ...userSettings, userWaist: number })}
                    userSettings={userSettings.userWaist}
                    placeholder={'Waist'}
                    style={styles.input}
                />
                <Text style={styles.label}>Hips</Text>
                <Text style={styles.label}>Inseam</Text>
                <TextInput
                    onChangeText={(number) => setUserSettings({ ...userSettings, userHip: number })}
                    userSettings={userSettings.userHip}
                    placeholder={'Hips'}
                    style={styles.input}
                />
                <TextInput
                    onChangeText={(number) => setUserSettings({ ...userSettings, userInseam: number })}
                    userSettings={userSettings.userInseam}
                    placeholder={'Inseam'}
                    style={styles.input}
                />
            </View>
            <View style={styles.buttonBox}>
                <View style={styles.yellowButton}>
                    <Link to="/top"
                        title={'Submit'}
                        onPress={() => onSubmit()}
                        component={TouchableOpacity} activeOpacity={0.7}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </Link>
                </View>
                <Link to="/login" component={TouchableOpacity} activeOpacity={0.7}>
                    <Text style={{ paddingTop: 10 }}>Have an Account? Login here!</Text>
                </Link>
            </View>
        </SafeAreaView >
    );
}
export default SignUp;


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
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20
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
