import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { DataTable } from 'react-native-paper';
import { Link } from "react-router-native";

const image = { uri: 'https://www.modcloth.com/dw/image/v2/ABAT_PRD/on/demandware.static/-/Sites-modcloth-master/default/dw7f672a6f/images/10130539_the_cozy_chillout_knit_jumpsuit_rust_ALT02.jpg?sw=600&sm=fit' };

const OnePieceExpanded = () => {
    return (
        <SafeAreaView>
            <Link to="/onePiece" component={TouchableOpacity} activeOpacity={0.7}><Text style={styles.subLink}>back</Text></Link>
            <View style={styles.container}>
                <Image source={image} style={styles.image} resizeMode="contain"></Image>
                <Text style={styles.h1}>
                    Little Mistress
            </Text>
                <Text>The Cozy Chillout Knit Jumpsuit</Text>
                <DataTable style={styles.dataTable}>
                    <DataTable.Header>
                        <DataTable.Title >Chest</DataTable.Title>
                        <DataTable.Title >Waist</DataTable.Title>
                        <DataTable.Title >Hip</DataTable.Title>
                        <DataTable.Title >Inseam</DataTable.Title>
                        <DataTable.Title numeric >Size</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell >41"</DataTable.Cell>
                        <DataTable.Cell >33"</DataTable.Cell>
                        <DataTable.Cell >43"</DataTable.Cell>
                        <DataTable.Cell >--</DataTable.Cell>
                        <DataTable.Cell numeric>16</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
        </SafeAreaView>

    );
}

export default OnePieceExpanded;

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
        width: "80%",
        marginTop: 40
    },
    subLink: {
        fontSize: 20,
        color: 'gray',
        marginLeft: 20
    },

})