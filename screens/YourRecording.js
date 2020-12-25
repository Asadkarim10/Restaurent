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
                    marginRight: 30,
                    marginLeft: 30
                }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("Comparision") }}>
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
                    <Text style={styles.text2}>Your Recording</Text>
                </View>
            </View>
            <ScrollView style={{
                maxHeight: 500
            }}>
                <View style={{
                    width: wp('100%'),
                    backgroundColor: backColor,
                    flex: 2.5,
                    alignItems: 'center',
                    justifyContent: 'flex-start',

                }}>
                    <View style={{
                        backgroundColor: backColor,
                        borderWidth: 5,
                        width: wp('90%'),
                        height: hp('20%'),
                        borderColor: "white",
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
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
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: "flex-start"
                        }}>
                            <Text style={{
                                color: "#162343",
                                fontSize: 18,
                                fontWeight: "bold"
                            }}>Title of the recording</Text>

                            <View style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-around",
                                marginLeft: 30

                            }}>
                                <TouchableOpacity onPress={() => { navigation.navigate("Discard") }}>
                                    <Icon name="trash" color="gray" size={20} />
                                </TouchableOpacity>
                                <Icon name="share-alt" color="gray" size={20} />
                                <Icon name="heart" color="red" size={20} />
                            </View>
                        </View>
                        <Text style={{
                            color: "#162343",
                            fontSize: 18,
                            marginTop: -15
                        }}>06/09/2020</Text>



                        <View style={{
                            flex: 1,
                            flexDirection: "row",
                            alignItems: 'center',
                            marginTop: 10
                        }}>
                            <View style={{
                                backgroundColor: "white",
                                width: 45,
                                height: 45,
                                borderColor: "white",
                                borderRadius: 45 / 2,
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
                                <Icon name="pause" color="#fb5253" size={20} />
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",

                            }}>
                                <Text style={styles.text4}></Text>
                            </View>
                        </View>
                        <Text style={{
                            color: "#162343",
                            fontSize: 8,
                            textAlign: "right",
                            marginTop: -13,
                            marginRight: 5
                        }}>06/09/2020</Text>

                    </View>

                </View>


                <View style={{

                    width: wp('100%'),
                    backgroundColor: backColor,
                    flex: 2.5,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    marginTop: 20
                }}>
                    <View style={{
                        backgroundColor: backColor,
                        borderWidth: 5,
                        width: wp('90%'),
                        height: hp('20%'),
                        borderColor: "white",
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
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
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: "flex-start"
                        }}>
                            <Text style={{
                                color: "#162343",
                                fontSize: 18,
                                fontWeight: "bold"
                            }}>Title of the recording</Text>

                            <View style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-around",
                                marginLeft: 30

                            }}>
                                <TouchableOpacity onPress={() => { navigation.navigate("Discard") }}>
                                    <Icon name="trash" color="gray" size={20} />
                                </TouchableOpacity>
                                <Icon name="share-alt" color="gray" size={20} />
                                <Icon name="heart" color="gray" size={20} />
                            </View>
                        </View>
                        <Text style={{
                            color: "#162343",
                            fontSize: 18,
                            marginTop: -15
                        }}>06/09/2020</Text>



                        <View style={{
                            flex: 1,
                            flexDirection: "row",
                            alignItems: 'center',
                            marginTop: 10
                        }}>
                            <View style={{
                                backgroundColor: "white",
                                width: 45,
                                height: 45,
                                borderColor: "white",
                                borderRadius: 45 / 2,
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
                                <Icon name="play" color="#1ee167" size={20} />
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",

                            }}>
                                <Text style={styles.text4}></Text>
                            </View>
                        </View>
                        <Text style={{
                            color: "#162343",
                            fontSize: 8,
                            textAlign: "right",
                            marginTop: -13,
                            marginRight: 5
                        }}>06/09/2020</Text>

                    </View>

                </View>


                <View style={{
                    width: wp('100%'),
                    backgroundColor: backColor,
                    flex: 2.5,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    marginTop: 20
                }}>
                    <View style={{
                        backgroundColor: backColor,
                        borderWidth: 5,
                        width: wp('90%'),
                        height: hp('20%'),
                        borderColor: "white",
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
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
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: "flex-start"
                        }}>
                            <Text style={{
                                color: "#162343",
                                fontSize: 18,
                                fontWeight: "bold"
                            }}>Title of the recording</Text>

                            <View style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-around",
                                marginLeft: 30

                            }}>
                                <TouchableOpacity onPress={() => { navigation.navigate("Discard") }}>
                                    <Icon name="trash" color="gray" size={20} />
                                </TouchableOpacity>
                                <Icon name="share-alt" color="gray" size={20} />
                                <Icon name="heart" color="gray" size={20} />
                            </View>
                        </View>
                        <Text style={{
                            color: "#162343",
                            fontSize: 18,
                            marginTop: -15
                        }}>06/09/2020</Text>



                        <View style={{
                            flex: 1,
                            flexDirection: "row",
                            alignItems: 'center',
                            marginTop: 10
                        }}>
                            <View style={{
                                backgroundColor: "white",
                                width: 45,
                                height: 45,
                                borderColor: "white",
                                borderRadius: 45 / 2,
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
                                <Icon name="play" color="#1ee167" size={20} />
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",

                            }}>
                                <Text style={styles.text4}></Text>
                            </View>
                        </View>
                        <Text style={{
                            color: "#162343",
                            fontSize: 8,
                            textAlign: "right",
                            marginTop: -13,
                            marginRight: 5
                        }}>06/09/2020</Text>

                    </View>

                </View>

                <View style={{
                    width: wp('100%'),
                    backgroundColor: backColor,
                    flex: 2.5,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    marginTop: 20
                }}>
                    <View style={{
                        backgroundColor: backColor,
                        borderWidth: 5,
                        width: wp('90%'),
                        height: hp('20%'),
                        borderColor: "white",
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
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
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: "flex-start"
                        }}>
                            <Text style={{
                                color: "#162343",
                                fontSize: 18,
                                fontWeight: "bold"
                            }}>Title of the recording</Text>

                            <View style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-around",
                                marginLeft: 30

                            }}>
                                <TouchableOpacity onPress={() => { navigation.navigate("Discard") }}>
                                    <Icon name="trash" color="gray" size={20} />
                                </TouchableOpacity>
                                <Icon name="share-alt" color="gray" size={20} />
                                <Icon name="heart" color="gray" size={20} />
                            </View>
                        </View>
                        <Text style={{
                            color: "#162343",
                            fontSize: 18,
                            marginTop: -15
                        }}>06/09/2020</Text>



                        <View style={{
                            flex: 1,
                            flexDirection: "row",
                            alignItems: 'center',
                            marginTop: 10
                        }}>
                            <View style={{
                                backgroundColor: "white",
                                width: 45,
                                height: 45,
                                borderColor: "white",
                                borderRadius: 45 / 2,
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
                                <Icon name="play" color="#1ee167" size={20} />
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",

                            }}>
                                <Text style={styles.text4}></Text>
                            </View>
                        </View>
                        <Text style={{
                            color: "#162343",
                            fontSize: 8,
                            textAlign: "right",
                            marginTop: -13,
                            marginRight: 5
                        }}>06/09/2020</Text>

                    </View>

                </View>

                <View style={{
                    width: wp('100%'),
                    backgroundColor: backColor,
                    flex: 2.5,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    marginTop: 20
                }}>
                    <View style={{
                        backgroundColor: backColor,
                        borderWidth: 5,
                        width: wp('90%'),
                        height: hp('20%'),
                        borderColor: "white",
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
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
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: "flex-start"
                        }}>
                            <Text style={{
                                color: "#162343",
                                fontSize: 18,
                                fontWeight: "bold"
                            }}>Title of the recording</Text>

                            <View style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-around",
                                marginLeft: 30

                            }}>
                                <TouchableOpacity onPress={() => { navigation.navigate("Discard") }}>
                                    <Icon name="trash" color="gray" size={20} />
                                </TouchableOpacity>
                                <Icon name="share-alt" color="gray" size={20} />
                                <Icon name="heart" color="gray" size={20} />
                            </View>
                        </View>
                        <Text style={{
                            color: "#162343",
                            fontSize: 18,
                            marginTop: -15
                        }}>06/09/2020</Text>



                        <View style={{
                            flex: 1,
                            flexDirection: "row",
                            alignItems: 'center',
                            marginTop: 10
                        }}>
                            <View style={{
                                backgroundColor: "white",
                                width: 45,
                                height: 45,
                                borderColor: "white",
                                borderRadius: 45 / 2,
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
                                <Icon name="play" color="#1ee167" size={20} />
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",

                            }}>
                                <Text style={styles.text4}></Text>
                            </View>
                        </View>
                        <Text style={{
                            color: "#162343",
                            fontSize: 8,
                            textAlign: "right",
                            marginTop: -13,
                            marginRight: 5
                        }}>06/09/2020</Text>

                    </View>
                    <View style={{
                        marginTop: 20
                    }}></View>

                </View>





            </ScrollView>

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
        width: wp('70%'),
        height: 3,
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