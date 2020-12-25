import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,  Image, StatusBar, ScrollView, TextInput } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/FontAwesome';


const Discard = ({ navigation }) => {
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

            <View style={{
                width: wp('100%'),
                backgroundColor: backColor,
                flex: 4.5,
                alignItems: 'center',
                justifyContent: "center",
            }}>
                <View style={{
                    backgroundColor: backColor,
                    borderWidth: 5,
                    width: wp('80%'),
                    height: hp('45%'),
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
                    <View style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Image
                            source={require('../assets/delete.png')}
                        />
                        <Text style={{
                            color: "#162343",
                            fontSize: 20,
                            fontWeight: "bold",
                            marginTop: 20,
                            textAlign: "center"
                        }}>Are you sure you want to delete this file?</Text>
                    
                        <TextInput style={{
                            width: 'auto',
                            height: hp('6%'),
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 5,
                            marginTop: 10
                        }}
                            placeholder="Voice Note_06/08/2020"
                            placeholderTextColor="#989fb3"
                        ></TextInput>
                    
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate("Comparision") }}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: "#fb5253",
                            borderWidth: 5,
                            width: 150,
                            height: 50,
                            borderColor:"#fb5253",
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 5,
                            marginBottom: 10
                        }}>
                            <Text style={styles.text5}>Delete</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>

            </View>
        </View>
    );
};

export default Discard;

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