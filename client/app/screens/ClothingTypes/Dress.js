import React from 'react';
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { DataTable } from 'react-native-paper';
import { Link } from "react-router-native";

import MatchNav from '../../components/MatchNav'

function Dress() {
    return (
        <View style={styles.container}>
            <MatchNav />
            <DataTable style={styles.dataTable}>
                <DataTable.Header>
                    <DataTable.Title>Brand & Style</DataTable.Title>
                    <DataTable.Title numeric>Size</DataTable.Title>
                </DataTable.Header>
                <ScrollView>

                    <Link to="/dressExpanded">
                        <DataTable.Row style={styles.gray}>
                            <DataTable.Cell><Text style={styles.boldText}>Joe Brown</Text></DataTable.Cell>
                            <DataTable.Cell numeric>14</DataTable.Cell>
                        </DataTable.Row>
                    </Link>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>Pure Drama Maxi Dress</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>ModCloth</Text></DataTable.Cell>
                        <DataTable.Cell numeric>L</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>The Zig to My Zag Sweater Dress</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell><Text style={styles.boldText}>Chi Chi London</Text></DataTable.Cell>
                        <DataTable.Cell numeric>14</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>Blissful in Burgundy Hi-Lo Dress</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>Sugarhill Brighton</Text></DataTable.Cell>
                        <DataTable.Cell numeric>16</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Wishing On A Shooting Star Fit and Flare Dress</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell><Text style={styles.boldText}>Little Mistress</Text></DataTable.Cell>
                        <DataTable.Cell numeric>10-12</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>Drifting Through a Dream Midi Dress</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>Little Mistress</Text></DataTable.Cell>
                        <DataTable.Cell numeric>10-12</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Sparkling Striations Sequin Midi Dress</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell><Text style={styles.boldText}>Wild Pony</Text></DataTable.Cell>
                        <DataTable.Cell numeric>8</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.gray}>
                        <DataTable.Cell>Heading to the Picture Show Shift Dress</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.boldText}>Closet London</Text></DataTable.Cell>
                        <DataTable.Cell numeric>14</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>A Lesson In Etiquette Midi Dress</DataTable.Cell>
                    </DataTable.Row>
                </ScrollView>
            </DataTable>
        </View >
    );
}

export default Dress;

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
