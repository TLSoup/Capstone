import React from 'react';
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Link } from "react-router-native";
import { DataTable } from 'react-native-paper';
import MatchNav from '../../components/MatchNav'

function Top(props) {
    return (
        <View style={styles.container}>
            <MatchNav />
            <DataTable style={styles.dataTable}>
                <DataTable.Header>
                    <DataTable.Title>Brand & Style</DataTable.Title>
                    <DataTable.Title numeric>Size</DataTable.Title>
                </DataTable.Header>
                <ScrollView>
                    <Link to="/topExpanded">
                        <DataTable.Row style={styles.gray}>
                            <DataTable.Cell><Text style={styles.boldText}>Amazon Essentials</Text></DataTable.Cell>
                            <DataTable.Cell numeric>M</DataTable.Cell>
                        </DataTable.Row>
                    </Link>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>Men's Slim-Fit Short-Sleeve Crewneck Pocket T-Shirt</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>Amazon Essentials</Text></DataTable.Cell>
                        <DataTable.Cell numeric>M</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Men's Standard Tech Stretch Long Sleeve Tee</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell><Text style={styles.boldText}>Amazon Essentials</Text></DataTable.Cell>
                        <DataTable.Cell numeric>L</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>Women's Relaxed-Fit Short-Sleeve Scoopneck Swing Tee</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>Amazon Essentials</Text></DataTable.Cell>
                        <DataTable.Cell numeric>L</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Women's Brushed Tech Stretch Long-Sleeve Crew-Neck Shirt</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell><Text style={styles.boldText}>Bella Canvas</Text></DataTable.Cell>
                        <DataTable.Cell numeric>XL</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>WOMENS TRIBLEND SHORT SLEEVE TEE</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>Bella Canvas</Text></DataTable.Cell>
                        <DataTable.Cell numeric>2XL</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>WOMEN'S SLIM FIT TEE</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell><Text style={styles.boldText}>Bella Canvas</Text></DataTable.Cell>
                        <DataTable.Cell numeric>M</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>WOMEN'S RELAXED JERSEY SHORT SLEEVE TEE</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>Clothing Aventura</Text></DataTable.Cell>
                        <DataTable.Cell numeric>M</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Women's Elena Tank</DataTable.Cell>
                    </DataTable.Row>
                </ScrollView>
            </DataTable>
        </View >
    );
}
export default Top;

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

