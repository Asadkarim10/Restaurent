import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Modals from '../model/Modals'


const GarminModal = ({ navigation }) => {





    return (
        <View style={{
            flex: 1,

        }} >


            <View style={{
                backgroundColor: "white",
            }}>
                <ImageBackground
                    // source={{
                    //     uri: 'https://thumbs.dreamstime.com/b/medicine-healthcare-concept-doctor-stethoscope-clinic-close-up-global-125171698.jpg',
                    // }}

                    source={require('../assets/background2.png')}
                    style={{
                        height: 250,
                        width: wp('100%'),
                        position: 'relative', // because it's parent  
                    }}>


                    <View style={{
                        backgroundColor: 'transparent',
                        width: wp('90%'),
                        top: 100,
                        borderColor: "white",
                        borderWidth: 1,
                        justifyContent: 'center',
                        height: 70,
                        alignSelf: 'center',
                        borderRadius: 30
                    }}>
                        <View style={{
                            alignItems: "center",
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontSize: 26,
                                fontWeight: '400',
                                color: '#44474d'
                            }}>Paciento  irenginian</Text>
                        </View>

                    </View>

                </ImageBackground>
            </View>

              

            <View>


                         

            </View>




            <Modals  />


        </View>
    );
};

export default GarminModal;

const styles = StyleSheet.create({

});