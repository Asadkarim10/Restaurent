import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, TextInput, ScrollView, TouchableHighlight } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Table, Row, Rows } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['S.No.', 'Item', 'Quantity', 'Price', 'Total'],
            tableData: [
                ['2', 'Crispy Burger', 'X 5', '$ 16', '$ 25'],
                ['2', 'Crispy Burger', 'X 5', '$ 16', '$ 25'],
                ['2', 'Crispy Burger', 'X 5', '$ 16', '$ 25'],
                ['2', 'Crispy Burger', 'X 5', '$ 16', '$ 25'],
                ['2', 'Crispy Burger', 'X 5', '$ 16', '$ 25'],


            ]
        }
    }

    render() {
        const state = this.state;
        const styles = StyleSheet.create({
            text1: {
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18
            },

            text2: {
                color: 'white',
            },
            text3: {
                backgroundColor: "#2bc5c1",
                width: 60,
                height: 50,
                borderColor: "#2bc5c1",
                alignItems: 'center',
                justifyContent: 'center',
            },
            text4: {
                color: "black",
                fontSize: 22,
                fontWeight: 'bold'
            },
            text5: {
                color: "white",
                fontSize: 16,
            },
            container: {
                flex: 3,
                backgroundColor: '#fff',
                alignItems: "center",
                alignSelf: "center",
                width: wp('85%'),
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.41,
                shadowRadius: 3.11,
                elevation: 2,
                borderRadius:5
            },
            head: {
                width: wp("84%"),
                height: 40,
                backgroundColor: '#ffffff',
            },

            text6: {
                fontWeight: '700',
                textAlign: 'center'
            },
            text: { margin: 6, textAlign: 'center', backgroundColor: '#f1f8ff' }
        });


        var backColor = "#ffffff"

        const toggleClick = () => {
            navigation.toggleDrawer();
            backColor = "white";
        }


        return (

            <View style={{
                flex: 1,
                backgroundColor: backColor,
            }} >
                <StatusBar backgroundColor='#009387' barStyle="dark-content" />

                <View style={{
                    width: wp('100%'),
                    height: hp("11%"),
                    marginTop:"12%",
                    backgroundColor: "#2bc5c1",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}>
                    <TouchableOpacity onPress={() => toggleClick()}
                        style={styles.text3}>

                        <SimpleLineIcons name="menu" size={25} color="white" />

                    </TouchableOpacity>


                    <View style={{
                        backgroundColor: "#2bc5c1",
                        borderWidth: 2,
                        flexDirection: 'column',
                        width: wp("60%"),
                        height: 55,
                        borderColor: "#2bc5c1",
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        marginRight: 10,
                        borderRadius: 5
                    }}>
                        <Text style={styles.text1}>UserName</Text>
                        <Text style={styles.text2}>UserName@gmail.com</Text>
                    </View>



                    <View style={{
                        backgroundColor: "#2bc5c1",
                        borderWidth: 2,
                        width: wp("16%"),
                        height: 60,
                        borderColor: "#2bc5c1",
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10,
                        borderRadius: 5,
                    }}>
                        <Image style={{
                            width: wp("16%"),
                            height: 60,
                            transform: [{ scale: 1 }]
                        }}
                            resizeMode='stretch'
                            source={require('../assets/logo.png')}
                        />
                    </View>

                </View>



                <View style={{
                    width: wp('100%'),
                    height: hp("7%"),
                    backgroundColor: "#eefcfb",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",

                }}>
                    <TouchableOpacity onPress={() => toggleClick()}
                        style={{
                            backgroundColor: "#eefcfb",
                            width: 60,
                            height: 50,
                            borderColor: "#eefcfb",
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>

                        <Icon name="arrow-left" size={25} color="black" />

                    </TouchableOpacity>


                    <View style={{
                        backgroundColor: "#eefcfb",
                        borderWidth: 2,
                        flexDirection: 'column',
                        width: wp("60%"),
                        height: hp("7%"),
                        borderColor: "#eefcfb",
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        marginRight: 10,
                        borderRadius: 5
                    }}>
                        <Text style={styles.text4}>Order Details</Text>
                    </View>
                </View>


                <View style={{
                    color: 'white',
                    flex: 1.6,
                    width:wp('90%'),
                    alignItems: "center",
                    flexDirection: "row",
                    alignSelf:'center',
                    justifyContent: "space-between",
                }} >
                    <View style={{
                        backgroundColor: 'white',
                        width: wp("40%"),
                        height: hp("8%"),
                        elevation: 4,
                        borderColor: "white",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 5, 
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 1.84,
                    
                    }}>
                        <View style = {{
                            height:hp('3%'),
                            justifyContent:'center'
                        }}>
                        <Text style={{
                            fontSize: 15,
                            color: "gray"
                        }}>Order ID</Text>
                        </View>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "600"
                        }}>123456-5678</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        width: wp("40%"),
                        height: hp("8%"),
                        elevation: 4,
                        borderColor: "white",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 15,
                        borderRadius: 5,
                        shadowColor: "#000",

                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 1.84,
                        elevation: 5,
                    }}>
                        <View style = {{
                            height:hp('3%'),
                            justifyContent:'center'
                        }}>
                        <Text style={{
                            fontSize: 15,
                            color: "gray"
                        }}>Generated on</Text>
                        </View>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "600"
                        }}>Nov 27, 2020</Text>
                    </View>

                </View>



                <View style={{
                    width: wp('89%'),
                    backgroundColor: 'white',
                    flex: 2,
                    alignSelf:'center',
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <View style={{
                        backgroundColor: backColor,
                        alignItems: 'center',
                        // justifyContent: 'center',
                        width: wp("86%"),
                        height: hp("13%"),
                        borderColor: "white",
                        shadowColor: "#000",

                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.3,
                        shadowRadius: 3,
                        elevation: 5,
                        flexDirection: "column",
                        borderRadius: 5
                    }}>
                        <View style = {{
                            height:hp('4.5%'),
                            justifyContent:'center'
                        }}>
                        <Text style={{
                            fontSize: 16,
                            color: "gray"
                        }}>Delivery Location</Text>
                        </View>
                        <View style = {{
                            width:wp('76%'),
                        }}>                      
                              <Text style={{
                            fontSize: 17,
                            fontWeight: "600",
                            textAlign: "center"
                        }}>Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et</Text>
                        </View>

                    </View>



                </View>

                <View style={{
                    color: 'white',
                    backgroundColor: 'white',
                    flex: 1.5,
                    width: wp('93%'),
                    alignSelf:'center',
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingBottom:5
                }} >
                    <View style={{
                        backgroundColor: 'white',
                        width: wp("40%"),
                        height: hp("9%"),
                        elevation: 4,
                        borderColor: "white",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: 15,
                        borderRadius: 5,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,

                    }}>
                        <Text style={{
                            fontSize: 15,
                            color: "gray"
                        }}>Customer Name</Text>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: "bold"
                        }}>Mr. ABCFGH TtT</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        width: wp("40%"),
                        height: hp("9%"),
                        elevation: 4,
                        borderColor: "white",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 15,
                        borderRadius: 5,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                    }}>
                        <Text style={{
                            fontSize: 15,
                            color: "gray"
                        }}>Total Amount</Text>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: "bold"
                        }}>$ 25.50</Text>
                    </View>

                </View>
{/* <View style={{
    alignItems: "center",
}}> */}
                <View style={styles.container}>
                   <View style = {{
                       height:hp('6%'),
                       justifyContent:'center'

                   }}>
                    <Text style={{
                        fontSize: 18,
                        color: "gray"
                    }}>Delivery Location</Text>
                    </View>
                     <ScrollView>
                    <Table borderStyle={{ borderWidth: 0,height:hp("5%"),flex:3 }}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text6} />
                       
                            <Rows style={{ backgroundColor: '#eefcfb', margin: 5, height:hp("5%") }} data={state.tableData} textStyle={styles.text} />
                        
                    </Table>
                    </ScrollView>
                </View>

                {/* </View> */}
                <View style={{
                    flex: 1,
                    color: 'white',
                    width: wp('100%'),
                    backgroundColor: "white",
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("FrontPage") }}>
                        <View style={{
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            backgroundColor: "#2bc5c1",
                            width: wp("87%"),
                            height: hp("5%"),
                            borderColor: "#2bc5c1",
                            paddingRight:15
                        }}>
                            <Text style={styles.text5}>$ 250.50</Text>
                        </View>
                    </TouchableOpacity>
                </View>



                <View style={{
                    flex: 0.50,
                    color: 'white',
                    width: wp('100%'),
                    backgroundColor: backColor,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom:10
                }}>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("Curbside") }}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: "#2bc5c1",
                            width: wp("60%"),
                            height: hp("5%"),
                            borderColor: "#2bc5c1",
                            borderRadius:10

                        }}>
                            <Text style={styles.text5}>Mark as Delivered</Text>
                        </View>
                    </TouchableOpacity>
                </View>



            </View>

        );
    }
}

export default Order;