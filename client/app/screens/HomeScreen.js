import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";

function HomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/jason-leung-EtOMMg1nSR8-unsplash.jpg")}>
            <View style={styles.top}>
                <Image style={styles.logo} source={require("../assets/fitlyLogo.png")} />
                <Link to="/about" component={TouchableOpacity} activeOpacity={0.7}><Text style={styles.subLink}>About</Text></Link>
            </View>
            <View style={styles.textbox}>
                <Text style={styles.text}>Take the guesswork out of shopping.</Text>
            </View>
            <View style={styles.buttonBox}>
                <View style={styles.loginButton}>
                    <Link to="/Login" component={TouchableOpacity} activeOpacity={0.7}><Text style={styles.buttonText}>Log In</Text></Link>
                </View>
                <View style={styles.registerButton}>
                    <Link to="/SignUp" component={TouchableOpacity} activeOpacity={0.7}><Text style={styles.buttonText}>Sign Up</Text></Link>
                </View>
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },
    top: {
        top: 50,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 30
    },
    logo: {
        width: 95,
        height: 64,
    },
    subLink: {
        fontSize: 20,
        color: '#fff',
    },
    textbox: {
        marginTop: "70%"
    },
    text: {
        fontSize: 45,
        color: '#fff',
        padding: 30,
        fontWeight: 'bold',
    },
    buttonBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 80 : 50,
    },
    loginButton: {
        width: '60%',
        backgroundColor: '#ef473e',
        height: 60,
        marginVertical: 20,
        borderRadius: 10,
    },
    registerButton: {
        width: '60%',
        backgroundColor: '#ffc843',
        height: 60,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: 13
    }
});

export default HomeScreen;
