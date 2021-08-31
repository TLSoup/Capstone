import React from 'react';
import { View, StyleSheet, Image, Platform, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";

function Navbar() {
    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <View style={styles.buttonContainer}>
                    <Link to="/top" component={TouchableOpacity} activeOpacity={0.7}>
                        <Image source={require("../assets/Matches.png")} style={styles.icon} />
                    </Link>
                </View>
                <View style={styles.buttonContainer}>
                    <Link to="addType" component={TouchableOpacity} activeOpacity={0.7}>
                        <Image source={require("../assets/Add.png")} style={styles.icon} />
                    </Link>
                </View>
                <View style={styles.buttonContainer}>
                    <Link to="/Account" component={TouchableOpacity} activeOpacity={0.7}>
                        <Image source={require("../assets/Account.png")} style={styles.icon} />
                    </Link>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    nav: {
        width: '100%',
        height: Platform.OS === 'ios' ? 70 : 60,
        backgroundColor: '#ef473e',
        padding: 15,
        paddingBottom: 20,
        flexDirection: "row",
        position: 'absolute',
        bottom: 0,
    },
    icon: {
        width: 30,
        height: 30,
    },
    buttonContainer: {
        flex: 1,
        alignItems: "center"
    },

});
export default Navbar;