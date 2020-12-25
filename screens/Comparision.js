import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,  Image, StatusBar, ScrollView } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/FontAwesome';


const Comparision = ({ navigation }) => {
    var isRecording = false;

    var backColor = "#ffffff"

    const toggleClick = () => {
        navigation.toggleDrawer();
        backColor = "white";
    }


    return (
        <View style={{
            flex: 1,
            backgroundColor: backColor,
            alignItems: 'center',
            justifyContent: 'center',
        }} >
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={{
                color: 'white',
                flex: 2,
                width: wp('100%'),
                backgroundColor: backColor,
                height: 100
            }}>
                <View style={{
                    flex: 6,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: "row",
                    marginRight:30,
                    marginLeft: 30
                }}>
                    <TouchableOpacity onPress={() => {navigation.navigate("Comparision") }}>
                        <Image
                            source={require('../assets/back.png')}
                        />
                        </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleClick()}>
                        <Image
                            source={require('../assets/hamburger.png')}
                        />
                    </TouchableOpacity>
                    {/* <Text style={styles.text1} >Hassam saleem</Text> */}
                </View>
                <View style={{
                    color: 'white',
                    backgroundColor: backColor,
                    flex: 8
                }} >
                    <Text style={styles.text2}>Comparision</Text>
                </View>
            </View>
            <View style={{

                width: wp('100%'),
                backgroundColor: backColor,
                flex: 2.5,
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: backColor,
                    borderWidth: 5,
                    width: 320,
                    height: 160,
                    borderColor: "white",
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                    elevation: 6,
                }}>
                    <View>
                        <Text style={{
                            color: "#162343",
                            marginTop: 5,
                            fontSize: 20,
                            fontWeight: "bold"
                        }}>Reference Text</Text>
                    </View>
                    <ScrollView style={{
                        maxHeight: 110
                    }}>
                        <View>
                            <Text style={{
                                color: "#162343",
                                marginTop: 10,
                                direction: "rtl",
                                fontSize: 20,
                            }}>jkdshasdasdwefretgrtjhtrujtyjtjtrytjhrhtrertrgegregfregegerrgefksjfadasdaadadadadasdasdasdsadaadsdsadsadsasahjksdhjkfdshjkdshskdjkhfsjkhsdfkjsdhksfsfdsfsffdsfsfsdfsfsddfsdsfsfsfsjdshkjdshkjfdshkjfhkjshfkjhsfkjhskjhf</Text>
                        </View>
                    </ScrollView>
                </View>

            </View>

            <View style={{
                flex: 2.5,
                color: 'white',
                width: wp('100%'),
                alignItems: 'center',
                backgroundColor: backColor,
            }}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: backColor,
                    borderWidth: 5,
                    width: 320,
                    height: 160,
                    borderColor: "white",
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                    elevation: 6,
                }}>
                    <View>
                        <Text style={{
                            color: "#162343",
                            marginTop: 5,
                            fontSize: 20,
                            fontWeight: "bold"
                        }}>Your Text</Text>
                    </View>
                    <ScrollView style={{
                        maxHeight: 110
                    }}>
                        <View>
                            <Text style={{
                                color: "#162343",
                                marginTop: 10,
                                direction: "rtl",
                                fontSize: 20,
                            }}>jkdshasdasdwefretgrtjhtrujtyjtjtrytjhrhtrertrgegregfregegerrgefksjfadasdaadadadadasdasdasdsadaadsdsadsadsasahjksdhjkfdshjkdshskdjkhfsjkhsdfkjsdhksfsfdsfsffdsfsfsdfsfsddfsdsfsfsfsjdshkjdshkjfdshkjfhkjshfkjhsfkjhskjhf</Text>
                        </View>
                    </ScrollView>

                </View>
            </View>

            <View style={{
                flex: 1.5,
                color: 'white',
                width: wp('100%'),
                backgroundColor: backColor,
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: "row"
            }}>
                <TouchableOpacity onPress={() => {navigation.navigate("Discard") }}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: "#fb5253",
                    borderWidth: 5,
                    width: 150,
                    height: 50,
                    borderColor: "#fb5253",
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    marginTop: 30,
                    marginLeft: 30,
                    marginRight: 10,

                }}>

                    <Text style={styles.text5}>Discard</Text>

                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Save") }}>
                <View style={{
                    // alignItems: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: "#1ee167",
                    borderWidth: 5,
                    width: 150,
                    height: 50,
                    borderColor: "#1ee167",
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    marginTop: 30,
                    marginLeft: 10,
                    marginRight: 30,
                    // borderRadius: 100 
                    // alignItems: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={styles.text5}>Save</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Comparision;

const styles = StyleSheet.create({
    text1: {
        color: 'white',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        // backgroundColor: "brown",
        textAlign: "right",
        marginRight: 20,
        marginTop: 20
    },

    text2: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        paddingLeft: 20,
        // backgroundColor: "black"
    },
    text3: {
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 50
    },
    text4: {
        backgroundColor: "#1ee167",
        width: wp('100%'),
        height: 2
    },
    text5: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        //  marginTop: 5 ,
        //  marginBottom: 1
        //  paddingLeft: 20,
        // backgroundColor: "black"
    },
});