import React from 'react';
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { DataTable } from 'react-native-paper';
import { Link } from "react-router-native";

import MatchNav from '../../components/MatchNav'

function Outerwear() {
    return (
        <View style={styles.container}>
            <MatchNav />
            <DataTable style={styles.dataTable}>
                <DataTable.Header>
                    <DataTable.Title>Brand & Style</DataTable.Title>
                    <DataTable.Title numeric>Size</DataTable.Title>
                </DataTable.Header>
                <ScrollView>

                    <Link to="/outerwearExpanded">
                        <DataTable.Row style={styles.gray}>
                            <DataTable.Cell><Text style={styles.boldText}>Joe Brown</Text></DataTable.Cell>
                            <DataTable.Cell numeric>10-12</DataTable.Cell>
                        </DataTable.Row>
                    </Link>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>Prepared For Play Jacket</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>ModCloth</Text></DataTable.Cell>
                        <DataTable.Cell numeric>L</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Bold Moves Blazer</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell><Text style={styles.boldText}>Princess Highway</Text></DataTable.Cell>
                        <DataTable.Cell numeric>14</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>Nocturnal Flitters and Critters Puffer Jacket</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>Louche</Text></DataTable.Cell>
                        <DataTable.Cell numeric>12</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>The Shape of My Tart-an Coat</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell><Text style={styles.boldText}>Compania Fantastica</Text></DataTable.Cell>
                        <DataTable.Cell numeric>8</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>Ring My Bell Coat</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>ModCloth</Text></DataTable.Cell>
                        <DataTable.Cell numeric>L</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Celestial Best Blazer</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell><Text style={styles.boldText}>Saint Geraldine</Text></DataTable.Cell>
                        <DataTable.Cell numeric>10-12</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>Wintertime in Aspen Sweater Coat</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>Hell Bunny</Text></DataTable.Cell>
                        <DataTable.Cell numeric>14</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Margot to the T. Plaid Coat</DataTable.Cell>
                    </DataTable.Row>
                </ScrollView>
            </DataTable>
        </View >
    );
}

export default Outerwear;

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
