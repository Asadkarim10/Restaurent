import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';



const Patient = ({ navigation }) => {





    return (
        <View style={{
            flex: 1,

        }} >


            <View style={{
                backgroundColor: "white"
            }}>
                <ImageBackground
                    source={{
                        uri: 'https://thumbs.dreamstime.com/b/medicine-healthcare-concept-doctor-stethoscope-clinic-close-up-global-125171698.jpg',
                    }}

                    //  source={require('../assets/background1.png')}
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


<View style  = {{
    backgroundColor:'#042cd4',
    height: 700,

}}>

            <View style={{
                // flex:1,
                marginTop: -20,
                height: 700,
                backgroundColor: '#3c5ce6',
                width: wp('98%'),
                borderTopRightRadius: 25,
                borderColor: '#3c5ce6'
            }}>

                <View style={{
                    // flex:1,
                    marginTop: 20,
                    height: 700,
                    backgroundColor: 'white',
                    width: wp('94%'),
                    alignItems: "center",
                    borderTopRightRadius: 25,
                    borderColor: '#3c5ce6'
                }}>

<ScrollView>
                    <View style={{
                        marginTop: 20,
                        height: 90,
                        flexDirection: 'row',
                        width: wp('80%'),
                        backgroundColor: '#f1f3ff',
                        borderRadius: 40,
                        paddingTop:5

                    }}>
                        <View style={{
                            width: wp('15%'),
                            alignItems:'center',

                        }}>
                          <Icon name="search" size={30} />

                        </View>

                        <View style={{
                            width: wp('55%')
                        }}>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end'
                            }}>
                                <Text style={{
                                    color: '#4a52dc',
                                    fontSize: 15,
                                    fontWeight:'bold'
                                }}>
                                    2020/10/01 13:46
         </Text>
                            </View>

                            <View style={{
                                width: wp('40%'),
                                alignSelf: 'center'
                            }}>
                                <Text style={{
                                    color: '#404145',
                                    fontSize: 18,
                                    width: wp('80%'),
                                    fontWeight: '500'


                                }} >
                                    Ismanusis
         </Text>
                            </View>
                            <View style={{
                                width: wp('40%'),
                                alignSelf: 'center'
                            }}>
                                <Text style={{
                                    color: '#404145',
                                    fontSize: 18,
                                    width: wp('80%'),
                                    fontWeight: '500',

                                }} >
                                    laikrodis/apyranke
         </Text>
                            </View>


                        </View>

                    </View>




                    <View style={{
                        marginTop: 20,
                        height: 90,
                        flexDirection: 'row',
                        width: wp('80%'),
                        backgroundColor: '#f1f3ff',
                        borderRadius: 40,
                        paddingTop:5

                    }}>
                        <View style={{
                            width: wp('20%'),
                            alignItems:'center',


                        }}>
                      <Icon name="search" size={30} />

                        </View>

                        <View style={{
                            width: wp('55%')
                        }}>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end'
                            }}>
                                <Text style={{
                                    color: '#4a52dc',
                                    fontSize: 15,
                                    fontWeight:'bold'

                                }}>
                                    2020/10/01 13:46
         </Text>
                            </View>

                            <View style={{
                                  width:wp('50%'),
                                alignSelf: 'center',
                                height: 40,
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    color: '#404145',
                                    fontSize: 18,
                                    fontWeight: '500'


                                }} >
                                    Gliukometras
         </Text>
                            </View>



                        </View>

                    </View>









                    <View style={{
                        marginTop: 20,
                        height: 90,
                        flexDirection: 'row',
                        width: wp('80%'),
                        backgroundColor: '#f1f3ff',
                        borderRadius: 40,
                        paddingTop:5

                    }}>
                        <View style={{
                            width: wp('20%'),
                            alignItems:'center',


                        }}>
                             <Icon name="search" size={30} />

                        </View>

                        <View style={{
                            width: wp('55%')
                        }}>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end'
                            }}>
                                <Text style={{
                                    color: '#4a52dc',
                                    fontSize: 15,
                                    fontWeight:'bold'

                                }}>
                                    2020/10/01 13:46
         </Text>
                            </View>

                            <View style={{
                                  width:wp('50%'),
                                alignSelf: 'center'
                            }}>
                                <Text style={{
                                    color: '#404145',
                                    fontSize: 18,
                                    fontWeight: '500'


                                }} >
                                    Krauju
         </Text>
                            </View>
                            <View style={{
                                width: wp('50%'),
                                alignSelf: 'center'
                            }}>
                                <Text style={{
                                    color: '#404145',
                                    fontSize: 17,
                                    fontWeight: '500',
                                    alignSelf:'center'


                                }} >
                                    Spaudimo matuoklis
  </Text>
                            </View>


                        </View>

                    </View>




                    <View style={{
                        marginTop: 20,
                        height: 90,
                        flexDirection: 'row',
                        width: wp('80%'),
                        backgroundColor: '#f1f3ff',
                        borderRadius: 40,
                        paddingTop:5
                    }}>
                        <View style={{
                            width: wp('20%'),
                            alignItems:'center',


                        }}>
                            <Icon name="search" size={30} />

                        </View>

                        <View style={{
                            width: wp('55%')
                        }}>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end'
                            }}>
                                <Text style={{
                                    color: '#4a52dc',
                                    fontSize: 15,
                                    fontWeight:'bold',
                                    fontWeight:'bold'


                                }}>
                                    2020/10/01 13:46
         </Text>
                            </View>

                            <View style={{
                              width:wp('50%'),
                                height: 50,
                                justifyContent: 'center',
                                alignSelf: 'center'
                            }}>
                                <Text style={{
                                    color: '#404145',
                                    fontSize: 18,
                                    fontWeight: '500',
                                    alignSelf:'center'


                                }} >
                                    Kuno mases svarstykles
         </Text>
                            </View>



                        </View>

                    </View>




                    <View style={{
                        marginTop: 20,
                        height: 90,
                        flexDirection: 'row',
                        width: wp('80%'),
                        backgroundColor: '#f1f3ff',
                        borderRadius: 40,
                        paddingTop:5
                    }}>
                        <View style={{
                            width: wp('20%'),
                            alignItems:'center',


                        }}>
                                                
                                <Icon name="search" size={30} />

                        </View>

                        <View style={{
                            width: wp('55%')
                        }}>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end'
                            }}>
                                <Text style={{
                                    color: '#4a52dc',
                                    fontSize: 15,
                                    fontWeight:'bold'
                                }}>
                                    2020/10/01 13:46
         </Text>
                            </View>

                            <View style={{
                                alignSelf: 'center',
                                //  width:wp('50%'),
                                height: 50,
                                justifyContent: 'center',
                            }}>
                                <Text style={{
                                    color: '#404145',
                                    fontSize: 18,
                                    fontWeight: '500'
                                }} >
                                    liksve pionojo oro ir FEVI</Text>
                                               
                                <Text style={{
                                    color: '#404145',
                                    fontSize: 18,
                                    fontWeight: '500',
                                    alignSelf:'center'
                                }} >matulaics
                                        </Text>
                            </View>
                
                           


                        </View>

                    </View>

                    </ScrollView>
                </View>

                </View>

            </View>







        </View>
    );
};

export default Patient;

const styles = StyleSheet.create({

});