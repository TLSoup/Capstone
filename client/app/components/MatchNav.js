import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, Platform } from "react-native";
import { Link } from "react-router-native";
import { Searchbar } from 'react-native-paper';

function MatchNav(props) {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View>
            <View style={styles.nav}>
                <View style={styles.buttonContainer}>
                    <Link to="top" component={TouchableOpacity} activeOpacity={0.7}>
                        <Image source={require("../assets/Top.png")} style={styles.icon} />
                    </Link>
                    <Text style={styles.buttonText}>Tops</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Link to="bottom" component={TouchableOpacity} activeOpacity={0.7}>
                        <Image source={require("../assets/Bottom.png")} style={styles.icon} />
                    </Link>
                    <Text style={styles.buttonText}>Bottoms</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Link to="dress" component={TouchableOpacity} activeOpacity={0.7}>
                        <Image source={require("../assets/Dress.png")} style={styles.icon} />
                    </Link>
                    <Text style={styles.buttonText}>Dresses</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Link to="onePiece" component={TouchableOpacity} activeOpacity={0.7}>
                        <Image source={require("../assets/onePiece.png")} style={styles.icon} />
                    </Link>
                    <Text style={styles.buttonText}>One Pieces</Text>
                </View>
                <View style={styles.buttonContainer} >
                    <Link to="outerwear" component={TouchableOpacity} activeOpacity={0.7}>
                        <Image source={require("../assets/Outerwear.png")} style={styles.icon} />
                    </Link>
                    <Text style={styles.buttonText}>Outerwear</Text>
                </View>
            </View>
            <Searchbar />
        </View>
    );
}
const styles = StyleSheet.create({
    nav: {
        width: '100%',
        height: Platform.OS === 'ios' ? 105 : 60,
        backgroundColor: '#ef473e',
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: 'space-evenly',
        paddingBottom: 5
    },
    buttonContainer: {
        padding: 10,
        height: 60,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff',
    },
    icon: {
        width: 38,
        height: 38,
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "contain"
    },
});

export default MatchNav;