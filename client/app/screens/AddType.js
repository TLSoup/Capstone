import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, ImageBackground, } from "react-native";
import { Link } from "react-router-native";

function AddType(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/britain-eriksen-qoYLtdyQJkc-unsplash.jpg")}>
            <View style={styles.container}>
                <Text style={styles.h1}>What type of clothing will you be adding?</Text>
                <View style={styles.buttonBox}>
                    <View style={styles.yellowButton}>
                        <Link to="/addTop" component={TouchableOpacity} activeOpacity={0.7}><Text style={styles.buttonText}>Top</Text></Link>
                    </View>
                    <View style={styles.greenButton}>
                        <Link to="/addBottom" component={TouchableOpacity} activeOpacity={0.7}><Text style={styles.buttonText}>Bottom</Text></Link>
                    </View>
                    <View style={styles.blueButton}>
                        <Link to="/addDress" component={TouchableOpacity} activeOpacity={0.7}><Text style={styles.buttonText}>Dress</Text></Link>
                    </View>
                    <View style={styles.redButton}>
                        <Link to="/addOnePiece" component={TouchableOpacity} activeOpacity={0.7}><Text style={styles.buttonText}>One Piece</Text></Link>
                    </View>
                    <View style={styles.yellowButton}>
                        <Link to="/addOuterwear" component={TouchableOpacity} activeOpacity={0.7}><Text style={styles.buttonText}>Outerwear</Text></Link>
                    </View>
                </View>
                <Link to="/top" component={TouchableOpacity} activeOpacity={0.7}><Text style={styles.subLink}>back</Text></Link>
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
        justifyContent: "space-evenly",
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        alignItems: "center"
    },
    h1: {
        fontSize: 40,
        fontWeight: "bold",
        color: '#fff',
        textAlign: "center",
        fontWeight: 'bold',
        marginHorizontal: 40,
    },
    buttonBox: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
    },
    yellowButton: {
        width: '40%',
        backgroundColor: '#ffc843',
        height: 60,
        margin: 10,
        borderRadius: 10,
    },
    greenButton: {
        width: '40%',
        backgroundColor: '#028c45',
        height: 60,
        margin: 10,
        borderRadius: 10,
    },
    blueButton: {
        width: '40%',
        backgroundColor: '#00b3e2',
        height: 60,
        margin: 10,
        borderRadius: 10,
    },
    redButton: {
        width: '40%',
        backgroundColor: '#ef473e',
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
    },
})

export default AddType;