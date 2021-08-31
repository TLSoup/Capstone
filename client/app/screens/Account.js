import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, } from "react-native";
import { Link } from "react-router-native";

function AddType(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/becca-mchaffie-Fzde_6ITjkw-unsplash.jpg")}>
            <View style={styles.container}>
                <Text style={styles.h1}>Account</Text>
                <View style={styles.measurements}>
                    <Text style={styles.bodyText}>Chest: 38</Text>
                    <Text style={styles.bodyText}>Waist: 32</Text>
                    <Text style={styles.bodyText}>Hips: 39</Text>
                    <Text style={styles.bodyText}>Inseam: 25</Text>
                    <View style={styles.yellowButton}>
                        <Link to="/updateMeasurements" component={TouchableOpacity} activeOpacity={0.7}><Text style={styles.buttonText}>Update</Text></Link>
                    </View>
                </View>
                <View style={styles.accountBox}>
                    <Text style={styles.bodyText1}>Username: Tracy</Text>
                    <Text style={styles.bodyText1}>Password: ****</Text>
                    <View style={styles.yellowButton}>
                        <Link to="/editAccount" component={TouchableOpacity} activeOpacity={0.7}><Text style={styles.buttonText}>Update</Text></Link>
                    </View>
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
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
    h1: {
        fontSize: 40,
        fontWeight: "bold",
        color: '#fff',
        textAlign: "center",
        fontWeight: 'bold',
        marginBottom: 40,
        marginTop: 80
    },
    bodyText: {
        fontSize: 20,
        color: "black",
        marginHorizontal: 30,
        marginTop: 20,
    },
    bodyText1: {
        fontSize: 20,
        color: "white",
        marginHorizontal: 30,
        marginTop: 20,
    },
    measurements: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: 'rgba(255, 255, 255, 0.90)',
        marginHorizontal: 30,
        padding: 20,
        borderRadius: 10,
        marginBottom: 60
    },
    accountBox: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        marginHorizontal: 30,
        padding: 20,
        borderRadius: 10,
    },
    yellowButton: {
        width: '80%',
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
    subLink: {
        fontSize: 20,
        color: '#fff',
        textAlign: "center",
    },
})

export default AddType;