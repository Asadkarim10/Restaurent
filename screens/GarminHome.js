import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';



const GarminHome = ({ navigation }) => {





    return (
        <View style={{
            flex:1,
            backgroundColor:'white'
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
                        backgroundColor: '#d5dbf7',
                        width: wp('90%'),
                        top: 100,
                        height: hp("8%"),
                        alignSelf: 'center',
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 30
                    }}>
                        <View style={{
                            alignItems: "center",
                        }}>
                            <Text style={{
                                fontSize: 26,
                                fontWeight: '700',
                                color: '#44474d'
                            }}>Ismanioji apyranke</Text>
                        </View>
                        <View style={{
                        }}>
                            <Text style={{
                                fontSize: 20,
                                alignSelf: 'center',
                                color: '#8b91a2'
                            }}>Gar min Connect Device a-25134321</Text>
                        </View>
                    </View>


                    <View style={{
                        marginTop: 65,
                        flexDirection: 'row',
                        backgroundColor: '#d5dbf7',
                        width: wp('90%'),
                        alignSelf: 'center',
                        top: 60,
                        height: 70,
                        borderRadius: 30
                    }}>
                        <View style={{
                            justifyContent: 'center',
                            width: wp('15%'),
                            alignItems: 'center'
                        }}>
                           
                            <Icon name="search" size={30} />
                        </View>
                        <View style={{
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontSize: 25,
                                alignSelf: 'center',
                                color: '#353538',
                            }}>Duomenu atnaujinimo data</Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end'
                            }}>
                                <Text style={{
                                    width: wp('30%'),
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    color: "#284bda"
                                }}
                                >2020/10/01 13:45</Text>
                            </View>
                        </View>



                    </View>


                </ImageBackground>


            </View>
         


            <View>




            </View>



            <View style = {{
                marginTop:50
            }}>
                <ScrollView>
            <View style = {{
                height:80,
                justifyContent:'flex-end',
                width:wp('90%'),
                borderBottomColor:'#f1f3ff',
                borderBottomWidth:1,
            }}>
                    <View style = {{
                        width:wp('80%'),
                        flexDirection:'row',
                        alignSelf:'center',
                        alignContent:'center'
                    }}>
                        <View style = {{
                            width:wp('10%')
                        }}>
                              <Icon name="search" size={30} />

                        </View>
                        <View style = {{
                            flexDirection:'row',
                            width:wp('75%'),
                            justifyContent:'space-between'
                        }}>
                            <Text style = {{
                                fontSize:20
                            }}>Zingsniai:</Text>
                            <Text style = {{
                                color:'#7e80e6',
                                fontSize:25,
                                fontWeight:"700"
                            }}>1582/ 8000</Text>
                        </View>
                        
                    </View>
                    </View>



                    <View style = {{
                width:wp('90%'),
                height:90,
                flexDirection:'column',
                justifyContent:"flex-end",
                borderBottomColor:'#f1f3ff',
                borderBottomWidth:1,
            }}>
                    <View style = {{
                        width:wp('80%'),
                        
                        flexDirection:'row',
                         alignSelf:'center',
                    }}>
                        <View style = {{
                            width:wp('10%')
                        }}>
                       <Icon name="fire" size={30} />
                        </View>
                        <View style = {{
                            flexDirection:'row',
                            width:wp('75%'),
                            justifyContent:'space-between'
                        }}>
                            <Text style = {{
                                fontSize:20
                            }}>Kalorijos:</Text>
                            <Text style = {{
                               
                                color:'#7e80e6',
                                fontSize:25,
                                fontWeight:"700"
                            }}>92 kcals.</Text>
                        </View>
                        
                    </View>
                    </View>



                    <View style = {{
                width:wp('90%'),
                height:95, 
                               justifyContent:'flex-end',
                borderBottomColor:'#f1f3ff',
                borderBottomWidth:1,
            }}>
                    <View style = {{
                        width:wp('80%'),
                      
                        flexDirection:'row',
                        alignSelf:'center',
                        // alignContent:'center'
                    }}>
                        <View style = {{
                            width:wp('10%')
                        }}>                           
                         <Icon name="map-marker" size={30} />

                        </View>
                        <View style = {{
                            flexDirection:'row',
                            width:wp('75%'),
                            justifyContent:'space-between'
                        }}>
                            <Text style = {{
                                fontSize:20
                            }}>Dienos distancija:</Text>
                            <Text style = {{
                                color:'#7e80e6',
                                fontSize:25,
                                fontWeight:"700"

                            }}>1,521 km</Text>
                        </View>
                        
                    </View>
                    </View>



                    <View style = {{
                width:wp('90%'),
                height:95,
                justifyContent:'flex-end',
                borderBottomColor:'#f1f3ff',
                borderBottomWidth:1,
            }}>
                    <View style = {{
                        width:wp('80%'),
                      
                        flexDirection:'row',
                        alignSelf:'center',
                        alignContent:'center'
                    }}>
                        <View style = {{
                            width:wp('10%')
                        }}>
                       <Icon name="map-marker" size={30} />

                        </View>
                        <View style = {{
                            flexDirection:'row',
                            width:wp('75%'),
                            justifyContent:'space-between'
                        }}>
                            <Text style = {{
                                fontSize:20
                            }}>Paros miego Kokybe:</Text>
                            <Text style = {{
                                color:'#7e80e6',
                                fontSize:25,
                                fontWeight:"700"

                            }}>6h 35 min</Text>
                        </View>
                        
                    </View>
                    </View>


                    <View style = {{
                width:wp('90%'),
                height:95,
                justifyContent:'flex-end',
                borderBottomColor:'#f1f3ff',
                borderBottomWidth:1,
            }}>
                    <View style = {{
                        width:wp('80%'),
                      
                        flexDirection:'row',
                        alignSelf:'center',
                        alignContent:'center'
                    }}>
                        <View style = {{
                            width:wp('10%')
                        }}>
                       <Icon name="map-marker" size={30} />

                        </View>
                        <View style = {{
                            flexDirection:'row',
                            width:wp('75%'),
                            justifyContent:'space-between'
                        }}>
                            <Text style = {{
                                fontSize:20
                            }}>Intensyvumas:</Text>
                            <Text style = {{
                                color:'#7e80e6',
                                fontSize:25,
                                fontWeight:"700"
                            }}>35 min</Text>
                        </View>
                        
                    </View>
                    </View>


                    <View style = {{
                width:wp('90%'),
                height:95,
                justifyContent:'flex-end',
                borderBottomColor:'#f1f3ff',
                borderBottomWidth:1,
            }}>
                    <View style = {{
                        width:wp('80%'),
                      
                        flexDirection:'row',
                        alignSelf:'center',
                        alignContent:'center'
                    }}>
                        <View style = {{
                            width:wp('10%')
                        }}>
                         <Icon name="map-marker" size={30} />

                        </View>
                        <View style = {{
                            flexDirection:'row',
                            width:wp('75%'),
                            justifyContent:'space-between'
                        }}>
                            <Text style = {{
                                fontSize:20
                            }}>lapotic vilvel </Text>
                            <Text style = {{
                                color:'#7e80e6',
                                fontSize:25,
                                fontWeight:"700"
                            }}>150</Text>
                        </View>
                        
                    </View>
                    </View>



                    <View style = {{
                width:wp('90%'),
                height:95,
                justifyContent:'flex-end',
                borderBottomColor:'#f1f3ff',
                borderBottomWidth:1,
            }}>
                    <View style = {{
                        width:wp('80%'),
                      
                        flexDirection:'row',
                        alignSelf:'center',
                        alignContent:'center'
                    }}>
                        <View style = {{
                            width:wp('10%')
                        }}>
                             <Icon name="map-marker" size={30} />

                        </View>
                        <View style = {{
                            flexDirection:'row',
                            width:wp('75%'),
                            justifyContent:'space-between'
                        }}>
                            <Text style = {{
                                fontSize:20
                            }}>Sirdies ritmas</Text>
                            <Text style = {{
                                color:'#7e80e6',
                                fontSize:25,
                                fontWeight:"700"
                            }}>68</Text>
                        </View>
                        
                    </View>
                    </View>


                    <View style = {{
                width:wp('90%'),
                height:95,
                justifyContent:'flex-end',
                borderBottomColor:'#f1f3ff',
                borderBottomWidth:1,
            }}>
                    <View style = {{
                        width:wp('80%'),
                      
                        flexDirection:'row',
                        alignSelf:'center',
                        alignContent:'center'
                    }}>
                        <View style = {{
                            width:wp('10%')
                        }}>
                       <Icon name="map-marker" size={30} />

                        </View>
                        <View style = {{
                            flexDirection:'row',
                            width:wp('75%'),
                            justifyContent:'space-between'
                        }}>
                            <Text style = {{
                                fontSize:20
                            }}>Streso lygis</Text>
                            <Text style = {{
                                color:'#7e80e6',
                                fontSize:25,
                                fontWeight:"700"
                            }}>Aukstas</Text>
                        </View>
                        
                    </View>
                    </View>



                    <View style = {{
                width:wp('90%'),
                height:95,
                justifyContent:'flex-end',
                borderBottomColor:'#f1f3ff',
                borderBottomWidth:1,
            }}>
                    <View style = {{
                        width:wp('80%'),
                      
                        flexDirection:'row',
                        alignSelf:'center',
                        alignContent:'center'
                    }}>
                        <View style = {{
                            width:wp('10%')
                        }}>
                      <Icon name="map-marker" size={30} />

                        </View>
                        <View style = {{
                            flexDirection:'row',
                            width:wp('75%'),
                            justifyContent:'space-between'
                        }}>
                            <Text style = {{
                                fontSize:20
                            }}>Judesio IQ:</Text>
                         <Icon name="map-marker" size={30} />

                        </View>
                        
                    </View>
                    </View>


                    <View style = {{
                width:wp('90%'),
                height:95,
                justifyContent:'flex-end',
                borderBottomColor:'#f1f3ff',
                borderBottomWidth:1,
            }}>
                    <View style = {{
                        width:wp('80%'),
                      
                        flexDirection:'row',
                        alignSelf:'center',
                        alignContent:'center'
                    }}>
                        <View style = {{
                            width:wp('10%')
                        }}>
                         <Icon name="map-marker" size={30} />

                        </View>
                        <View style = {{
                            flexDirection:'row',
                            width:wp('75%'),
                            justifyContent:'space-between'
                        }}>
                            <Text style = {{
                                fontSize:20
                            }}>Judesio Intensyvumas:</Text>
                            <Text style = {{
                                color:'#7e80e6',
                                fontSize:25,
                                fontWeight:"700"
                            }}>3h 05 min</Text>
                        </View>
                        
                    </View>
                    </View>


                    <View style = {{
                width:wp('90%'),
                height:95,
                justifyContent:'flex-end',
                borderBottomColor:'#f1f3ff',
                borderBottomWidth:1,
            }}>
                    <View style = {{
                        width:wp('80%'),
                      
                        flexDirection:'row',
                        alignSelf:'center',
                        alignContent:'center'
                    }}>
                        <View style = {{
                            width:wp('10%')
                        }}>
                           <Icon name="map-marker" size={30} />

                        </View>
                        <View style = {{
                            flexDirection:'row',
                            width:wp('75%'),
                            justifyContent:'space-between'
                        }}>
                            <Text style = {{
                                fontSize:20
                            }}>Pulso oksimetrija:</Text>
                            <Text style = {{
                                color:'#7e80e6',
                                fontSize:25,
                                fontWeight:"700"
                            }}>95%</Text>
                        </View>
                        
                    </View>
                    </View>


                    <View style = {{
                width:wp('90%'),
                height:95,
                justifyContent:'flex-end',
                borderBottomColor:'#f1f3ff',
                borderBottomWidth:1,
            }}>
                    <View style = {{
                        width:wp('80%'),
                      
                        flexDirection:'row',
                        alignSelf:'center',
                        alignContent:'center'
                    }}>
                        <View style = {{
                            width:wp('10%')
                        }}>
                             <Icon name="map-marker" size={30} />

                        </View>
                        <View style = {{
                            flexDirection:'row',
                            width:wp('75%'),
                            justifyContent:'space-between'
                        }}>
                            <Text style = {{
                                fontSize:20
                            }}>Kuno baterija:</Text>
                            <Text style = {{
                                color:'#7e80e6',
                                fontSize:25,
                                fontWeight:"700"
                            }}>21</Text>
                        </View>
                        
                    </View>
                    </View>


                   


                   

                    <View style = {{
                width:wp('90%'),
                borderBottomColor:'#f1f3ff',
                borderBottomWidth:1,
                height:95,
                justifyContent:'flex-end',
            }}>
                    <View style = {{
                        width:wp('80%'),
                        flexDirection:'row',
                        alignSelf:'center',
                        alignContent:'center'
                    }}>
                        <View style = {{
                            width:wp('10%')
                        }}>
                             <Icon name="map-marker" size={30} />

                        </View>
                        <View style = {{
                            flexDirection:'row',
                            width:wp('75%'),
                            justifyContent:'space-between'
                        }}>
                            <Text style = {{
                                fontSize:20
                            }}>Kvepavimas:</Text>
                            <Text style = {{
                                color:'#7e80e6',
                                fontSize:25,
                                fontWeight:"700"
                            }}>15 ikvepimu/min</Text>
                        </View>
                        
                    </View>
                    </View>



                </ScrollView>

<View style = {{
    marginTop:10,
    alignSelf:'center',
    alignItems:'center',
    backgroundColor:'red',
    width:wp('40%'),
    justifyContent:'center',
    height:40,
    borderRadius:5
}}>
    <Text>
        Asad karim mughal
    </Text>
</View>


            </View>

                    


        </View>
    );
};

export default GarminHome;

const styles = StyleSheet.create({
   
});