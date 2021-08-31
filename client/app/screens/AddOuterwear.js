import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ImageBackground, TouchableOpacity, Alert } from "react-native";
import { Link } from "react-router-native";

const AddOuterwear = () => {
    const [clothing, setClothing] = useState({
        clothingType: "outerwear",
        clothingBrand: "",
        clothingStyle: "",
        clothingSize: "",
        clothingChest: "",
    })

    const onSubmit = () => {
        Alert.alert("Got it!", "We've added your outerwear to our database.")
        setClothing({
            clothingType: "outerwear",
            clothingBrand: "",
            clothingStyle: "",
            clothingSize: "",
            clothingChest: "",
            imageUrl: ""
        })
    }

    return (
        <ImageBackground style={styles.background}
            source={require("../assets/kai-pilger-7YwWjgS7aJs-unsplash.jpg")}>
            <View style={styles.container}>
                <Link to="/addType" component={TouchableOpacity} activeOpacity={0.7}><Text style={styles.subLink}>back</Text></Link>
                <Text style={styles.h1}>Tell us about your outerwear:</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Brand</Text>
                    <TextInput
                        onChangeText={(text) => setClothing({ ...clothing, clothingBrand: text })}
                        clothing={clothing.brand}
                        placeholder={'Brand'}
                        style={styles.input1}
                    />
                    <Text style={styles.label}>Style</Text>
                    <TextInput
                        onChangeText={(text) => setClothing({ ...clothing, clothingStyle: text })}
                        clothing={clothing.clothingStyle}
                        placeholder={'Style'}
                        style={styles.input1}
                    />
                    <Text style={styles.label}>Size</Text>
                    <Text style={styles.label}>Chest</Text>
                    <TextInput
                        onChangeText={(number) => setClothing({ ...clothing, clothingSize: number })}
                        clothing={clothing.clothingSize}
                        placeholder={'Size'}
                        style={styles.input}
                    />
                    <TextInput
                        onChangeText={(number) => setClothing({ ...clothing, clothingChest: number })}
                        clothing={clothing.clothingChest}
                        placeholder={'Chest'}
                        style={styles.input}
                    />
                    <Text style={styles.label}>Image URL</Text>
                    <TextInput
                        onChangeText={(number) => setClothing({ ...clothing, imageURL: number })}
                        clothing={clothing.imageURL}
                        placeholder={'http://image.com'}
                        style={styles.input1}
                    />
                </View>
                <View style={styles.buttonBox}>
                    <View style={styles.yellowButton}>
                        <Link to="/top"
                            title={'Submit'}
                            onPress={onSubmit}
                            component={TouchableOpacity}
                            activeOpacity={0.7}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </Link>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        paddingBottom: 80
    },
    h1: {
        fontSize: 40,
        fontWeight: "bold",
        color: '#fff',
        textAlign: "center",
        fontWeight: 'bold',
        marginHorizontal: 30,
    },
    label: {
        color: "white",
        marginTop: 15,
        margin: 5,
        width: "45%"
    },
    formContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 30
    },
    input1: {
        width: '92%',
        fontSize: 20,
        height: 60,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.90)',
        borderRadius: 10,
    },
    input: {
        width: '43%',
        fontSize: 20,
        height: 60,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.90)',
        borderRadius: 10,
        marginRight: 20,
    },
    buttonBox: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 30
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
    subLink: {
        fontSize: 20,
        color: 'white',
        marginLeft: 20,
        marginTop: 10
    },
});

export default AddOuterwear;