import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,  Image, StatusBar } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//import Icon from 'react-native-vector-icons/FontAwesome';


const StopRecording = ({ navigation }) => {
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
                </View>
                <View style={{
                    color: 'white',
                    backgroundColor: backColor,
                    flex: 8
                }} >
                    <Text style={styles.text2}>Start a Recording</Text>
                </View>
            </View>
            <View style={{

                width: wp('100%'),
                backgroundColor: backColor,
                flex: 2,
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}>
                <View style={{
                    backgroundColor: "#1ee167",
                    borderWidth: 4,
                    width: 130,
                    height: 130,
                    borderColor: "#1ee167",
                    borderRadius: 130 / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={() => {navigation.navigate("Comparision") }}>
                    {/* <Icon name="stop" color="white" size={45} /> */}
                    </TouchableOpacity>
                    <Text style={{
                        color: "white",
                        marginTop: 5,
                        fontSize: 11,
                    }}>Tap to Stop</Text>
                </View>

            </View>

            <View style={{
                flex: 1,
                color: 'white',
                width: wp('100%'),
                alignItems: 'center',
                backgroundColor: backColor,
                marginBottom: 40
            }}>
                <Text style={styles.text3}>00 : 15 : 34</Text>
            </View>

            {/* <WaveForm 
    source={require('./path/to/your/file.mp3')}  
    waveFormStyle={{waveColor:'red', scrubColor:'white'}}
>
</WaveForm> */}


            <View style={{
                flex: 1,
                color: 'white',
                width: wp('100%'),
                alignItems: 'center',
                backgroundColor: backColor
            }}>
                <Text style={styles.text4}></Text>
            </View>

            <View style={{
                flex: 2,
                color: 'white',
                width: wp('100%'),
                // alignItems: 'center',
                backgroundColor: backColor,
            
                justifyContent: 'center',
                justifyContent:'space-around',
                 flexDirection: "row"
            }}>
                <View style={{
                    // alignItems: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop:25,
                    backgroundColor: backColor,
                    borderWidth: 5,
                    width:wp('30%'),
                    height: 130,
                    borderColor: "white",
                    borderRadius:10,
                    marginTop: 10,
                    // borderRadius: 100 ,
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    
                    elevation: 5,
                }}>
                    
                     <Image source={require('../assets/play-button.png')} />
                     <Text style={styles.text5}>PlayBack </Text>

                </View>
                <View style={{
                    // alignItems: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop:25,
                    backgroundColor: backColor,
                    borderWidth: 5,
                    width:wp('30%'),
                    height: 130,
                    borderColor: "white",
                    borderRadius:10,
                    marginTop: 10,
                    // borderRadius: 100 ,
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    
                    elevation: 5,
                }}>
                  <Image source={require('../assets/text.png')} 
                    style={{
                        width:50,
                        height:50
                    }} />

                </View>
                <View style={{
                    // alignItems: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop:25,
                    backgroundColor: backColor,
                    borderWidth: 5,
                    width:wp('30%'),
                    height: 130,
                    borderColor: "white",
                    borderRadius:10,
                    marginTop: 10,
                    // borderRadius: 100 ,
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    
                    elevation: 5,
                }}>
                    <Image source={require('../assets/save.png')} 
                    style={{
                        width:100,
                        height:100
                    }} />
                    <Text style={styles.text5}>PlayBack </Text>
                </View>
            </View>
        </View>
    );
};

export default StopRecording;

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
        color: 'black',
        fontSize: 17,
        marginTop: 25 ,
      //  marginBottom: 1
      //  paddingLeft: 20,
        // backgroundColor: "black"
    },    
});