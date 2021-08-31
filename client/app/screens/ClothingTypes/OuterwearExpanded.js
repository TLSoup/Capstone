import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { DataTable } from 'react-native-paper';
import { Link } from "react-router-native";

const image = { uri: 'https://www.modcloth.com/dw/image/v2/ABAT_PRD/on/demandware.static/-/Sites-modcloth-master/default/dw95c52ec0/images/10131005_prepared_for_play_jacket_navy_MAIN.jpg?sw=768&sh=1097&sm=fit' };

const OuterwearExpanded = () => {
    return (
        <SafeAreaView>
            <Link to="/outerwear" component={TouchableOpacity} activeOpacity={0.7}><Text style={styles.subLink}>back</Text></Link>
            <View style={styles.container}>
                <Image source={image} style={styles.image} resizeMode="contain"></Image>
                <Text style={styles.h1}>
                    Joe Brown
            </Text>
                <Text>Prepared For Play Jacket</Text>
                <DataTable style={styles.dataTable}>
                    <DataTable.Header>
                        <DataTable.Title >Chest</DataTable.Title>
                        <DataTable.Title numeric >Size</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell >38"</DataTable.Cell>
                        <DataTable.Cell numeric>10-12</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
        </SafeAreaView>

    );
}

export default OuterwearExpanded;

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
        height: 300,
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