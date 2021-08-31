import React from 'react';
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { DataTable } from 'react-native-paper';
import { Link } from "react-router-native";

import MatchNav from '../../components/MatchNav'

function OnePiece() {
    return (
        <View style={styles.container}>
            <MatchNav />
            <DataTable style={styles.dataTable}>
                <DataTable.Header>
                    <DataTable.Title>Brand & Style</DataTable.Title>
                    <DataTable.Title numeric>Size</DataTable.Title>
                </DataTable.Header>
                <ScrollView>

                    <Link to="/onePieceExpanded">
                        <DataTable.Row style={styles.gray}>
                            <DataTable.Cell><Text style={styles.boldText}>Little Mistress</Text></DataTable.Cell>
                            <DataTable.Cell numeric>16</DataTable.Cell>
                        </DataTable.Row>
                    </Link>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>The Cozy Chillout Knit Jumpsuit</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>ModCloth</Text></DataTable.Cell>
                        <DataTable.Cell numeric>L</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Relaxed and Refined Jumpsuit</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell><Text style={styles.boldText}>ModCloth</Text></DataTable.Cell>
                        <DataTable.Cell numeric>L</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>A Velvet Persuasion Jumpsuit</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>ModCloth</Text></DataTable.Cell>
                        <DataTable.Cell numeric>10-12</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Influencer of Fine Utility Jumpsuit</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell><Text style={styles.boldText}>Louche</Text></DataTable.Cell>
                        <DataTable.Cell numeric>12</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>Early Autumn Nights Jumpsuit</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>Banned</Text></DataTable.Cell>
                        <DataTable.Cell numeric>14</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Stripe Hype Wide-Leg Jumpsuit</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell><Text style={styles.boldText}>Emily and Fin</Text></DataTable.Cell>
                        <DataTable.Cell numeric>10</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>Quirk du Soleil Wide-Leg Jumpsuit</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>ModCloth</Text></DataTable.Cell>
                        <DataTable.Cell numeric>XL</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Sartorial Enjoyment Knit Jumpsuit</DataTable.Cell>
                    </DataTable.Row>
                </ScrollView>
            </DataTable>
        </View >
    );
}

export default OnePiece;

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
