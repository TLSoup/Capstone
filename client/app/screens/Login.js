import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { Link } from "react-router-native";

const Login = () => {
    const [userSettings, setUserSettings] = useState({
        email: "",
        password: ""
    })

    const onSubmit = () => {
        console.log(userSettings)
        setUserSettings({
            email: "",
            password: ""
        })
    }

    return (
        <View style={styles.container}>
            <Link to="/" component={TouchableOpacity} activeOpacity={1}>
                <Image style={styles.logo} source={require("../assets/fitlyLogo.png")} />
            </Link>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    onChangeText={(text) => setUserSettings({ ...userSettings, email: text })}
                    userSettings={userSettings.email}
                    placeholder={'Email'}
                    style={styles.input}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    onChangeText={(text) => setUserSettings({ ...userSettings, password: text })}
                    userSettings={userSettings.password}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />
            </View>
            <View style={styles.buttonBox}>
                <View style={styles.yellowButton}>
                    <Link to="/top"
                        title={'Submit'}
                        onPress={onSubmit}
                        component={TouchableOpacity} activeOpacity={0.7}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </Link>
                </View>
            </View>
            <Link to="/SignUp" component={TouchableOpacity} activeOpacity={0.7}>
                <Text style={{ paddingTop: 10 }}>No Account? Sign up here!</Text>
            </Link>
        </View>
    );
}
export default Login;


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 95,
        height: 64,
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