import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { DataTable } from 'react-native-paper';
import { Link } from "react-router-native";

const image = { uri: 'https://www.modcloth.com/dw/image/v2/ABAT_PRD/on/demandware.static/-/Sites-modcloth-master/default/dwdf5d73a5/images/10130977_pure_drama_maxi_dress_black_MAIN.jpg?sw=913&sh=1304&sm=fit' };

const DressExpanded = () => {
    return (
        <SafeAreaView>
            <Link to="/dress" component={TouchableOpacity} activeOpacity={0.7}><Text style={styles.subLink}>back</Text></Link>
            <View style={styles.container}>
                <Image source={image} style={styles.image} resizeMode="contain"></Image>
                <Text style={styles.h1}>
                    Joe Brown
            </Text>
                <Text>Pure Drama Maxi Dress</Text>
                <DataTable style={styles.dataTable}>
                    <DataTable.Header>
                        <DataTable.Title >Chest</DataTable.Title>
                        <DataTable.Title >Waist</DataTable.Title>
                        <DataTable.Title >Hip</DataTable.Title>
                        <DataTable.Title numeric >Size</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell >40"</DataTable.Cell>
                        <DataTable.Cell >33"</DataTable.Cell>
                        <DataTable.Cell >42"</DataTable.Cell>
                        <DataTable.Cell numeric>XL</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
        </SafeAreaView>

    );
}

export default DressExpanded;

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
    },
    h2: {
        fontSize: 27,
        marginBottom: 20,
    },
    image: {
        height: 400,
        width: 200
    },
    dataTable: {
        width: "85%",
        marginTop: 40
    },
    subLink: {
        fontSize: 20,
        color: 'gray',
        marginLeft: 20
    },

})