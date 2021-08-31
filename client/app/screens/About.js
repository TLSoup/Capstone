import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Platform, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";

function About() {
    return (
        <View>
            <ScrollView>
                <ImageBackground style={styles.background}
                    source={require("../assets/jacob-mejicanos-FoSi0Qeb3Ac-unsplash.jpg")}>
                    <Link to="/" component={TouchableOpacity} activeOpacity={1}>
                        <Image source={require("../assets/fitlyLogo.png")} style={styles.logo} />
                    </Link>
                    <Text style={styles.textbox}>Connecting you to your authentic style.</Text>
                    <View style={styles.textContainer}>
                        <Text style={styles.paragraphText}>
                            Shopping shouldn’t be so complicated. Sizing is subjective from one brand to another and can actually change
                            from season to season based on marketing strategies. Yes, you read that right. Marketing could be to blame
                            for your pants not fitting. Companies size their clothes based on how they would like their target audience
                            to feel, either bigger or smaller, and this has been going on for so long that sizes really mean nothing.
                            Plus if you actually do find something that fits really well, you are going to buy it again and again rather
                            than search for another brand that fits. Clothing companies aren’t likely to give this up any time soon and
                            opt for universal sizing, thus Fitly was born.
                    </Text>
                        <Text style={styles.paragraphText}>
                            Fitly lets you compare your measurements against those of real clothing so you can find what fits you, regardless
                            of the number on the tag, or the department it came out of. Our database is constantly growing and being refreshed
                            by users like you, making it the most accurate and up to date out there.
                    </Text>
                        <Text style={styles.paragraphText}>
                            Fitly was designed and developed by Tracy Campbell, who got tired of clothing not fitting. They dreamed of being
                            able to shop from any department and know that an article of clothing would fit, even when trying it on isn’t an option.
                    </Text>
                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: "100%"
    },
    background: {
        flex: 1,
        justifyContent: "flex-start",
        width: '100%',
        height: Platform.OS === 'ios' ? '50%' : '49%',
    },
    logo: {
        position: 'absolute',
        top: 50,
        width: 95,
        height: 64,
        marginLeft: 30
    },
    textbox: {
        fontSize: 45,
        color: '#fff',
        padding: 30,
        marginTop: Platform.OS === 'ios' ? 300 : 215,
        fontWeight: 'bold',
    },
    textContainer: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 150 : 180,
        margin: 20
    },
    paragraphText: {
        padding: 10,
        lineHeight: 22
    },
});
export default About;