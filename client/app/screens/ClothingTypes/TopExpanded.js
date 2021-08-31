import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { DataTable } from 'react-native-paper';
import { Link } from "react-router-native";

const image = { uri: 'https://images-na.ssl-images-amazon.com/images/I/71-ExgcG0ML._AC_UL1500_.jpg' };

const TopExpanded = () => {
    return (
        <SafeAreaView>
            <Link to="/top" component={TouchableOpacity} activeOpacity={0.7}><Text style={styles.subLink}>back</Text></Link>
            <View style={styles.container}>
                <Image source={image} style={styles.image} resizeMode="contain"></Image>
                <Text style={styles.h1}>
                    Amazon Essentials
            </Text>
                <Text>Men's Slim-Fit Short-Sleeve Crewneck Pocket T-Shirt</Text>
                <DataTable style={styles.dataTable}>
                    <DataTable.Header>
                        <DataTable.Title >Chest</DataTable.Title>
                        <DataTable.Title numeric >Size</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell >38"</DataTable.Cell>
                        <DataTable.Cell numeric>M</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
        </SafeAreaView>

    );
}

export default TopExpanded;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: "90%",
        width: "100%",
    },
    h1: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 20
    },
    h2: {
        fontSize: 27,
        marginBottom: 20,
    },
    image: {
        height: 200,
        width: 200
    },
    dataTable: {
        width: "50%",
        marginTop: 40
    },
    subLink: {
        fontSize: 20,
        color: 'gray',
        marginLeft: 20
    },

})