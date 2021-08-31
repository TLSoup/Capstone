import React from 'react';
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Link } from "react-router-native";
import { DataTable } from 'react-native-paper';
import MatchNav from '../../components/MatchNav'

function Bottom() {
    return (
        <View style={styles.container}>
            <MatchNav />
            <DataTable style={styles.dataTable}>
                <DataTable.Header>
                    <DataTable.Title>Brand & Style</DataTable.Title>
                    <DataTable.Title numeric>Size</DataTable.Title>
                </DataTable.Header>
                <ScrollView>
                    <Link to="/bottomExpanded">
                        <DataTable.Row style={styles.gray}>
                            <DataTable.Cell><Text style={styles.boldText}>Amazon Essentials</Text></DataTable.Cell>
                            <DataTable.Cell numeric>M</DataTable.Cell>
                        </DataTable.Row>
                    </Link>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>Men's Fleece Jogger Pant</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>Carhartt</Text></DataTable.Cell>
                        <DataTable.Cell numeric>12</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Women's Petite Force Extremes Pant</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell><Text style={styles.boldText}>DIBAOLONG</Text></DataTable.Cell>
                        <DataTable.Cell numeric>XL</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>Womens Yoga Joggers Loose Workout Sweat Pants Comfy Lounge Pants with Pockets</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>Dockers</Text></DataTable.Cell>
                        <DataTable.Cell numeric>33</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Men's Classic Fit Easy Khaki Pants - Pleated</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell><Text style={styles.boldText}>Levi's</Text></DataTable.Cell>
                        <DataTable.Cell numeric>32</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>Men's 505 Regular Fit Jeans</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>Russell Athletic</Text></DataTable.Cell>
                        <DataTable.Cell numeric>M</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Men's Cotton Rich 2.0 Premium Fleece Sweatpants</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell><Text style={styles.boldText}>Wrangler</Text></DataTable.Cell>
                        <DataTable.Cell numeric>32</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>Authentics Men's Classic 5-Pocket Regular Fit Flex Jean</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>Z SUPPLY</Text></DataTable.Cell>
                        <DataTable.Cell numeric>M</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>The Camo Jogger Pant</DataTable.Cell>
                    </DataTable.Row>
                </ScrollView>
            </DataTable>
        </View >
    );
}
export default Bottom;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: "100%"
    },
    dataTable: {
        flex: 1,
        marginBottom: 70
    },
    gray: {
        backgroundColor: '#f3f3f3',
    },
    boldText: {
        fontWeight: "bold"
    }

});

