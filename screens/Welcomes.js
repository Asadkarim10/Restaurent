import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
 import SvgUri from 'react-native-svg-uri';
import Table from './Table'
import { StatusBar } from 'react-native'

class Welcomes extends Component {
  render() {
    return (
      <View style={styles.container}>



<StatusBar
    barStyle = "dark-content"
    // dark-content, light-content and default
    hidden = {false}
    //To hide statusBar
    backgroundColor = "white"
    //Background color of statusBar only works for Android
    // translucent = {false}
    //allowing light, but not detailed shapes
    networkActivityIndicatorVisible = {true}
/>


        <View style={styles.header}>
        <View style={{
            width: wp('90%'),
            flexDirection: 'row',
            height:hp('5%'),
            alignSelf: 'center',
            justifyContent: 'space-between'
          }}>

            <View style={{
              justifyContent: 'center',
              height:hp('5%'),

            }}>
              <TouchableOpacity>
              <Icon name="bars" color='white' size={27} />
              </TouchableOpacity>

            </View>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',

            }} >
              <View style={{
                marginRight: 5,
                height:hp('5%'),
                justifyContent: 'center',
              }} >

                <Text style={{
                  alignSelf: 'flex-end',
                  width: wp('20%'),
                  fontSize: 15,
                  fontWeight:'bold',
                  color: 'white',
                  justifyContent: 'center'
                }} >User name</Text>
                <Text style={{
                  fontSize: 14,
                  color: "white"
                }}>username@email.com</Text>
              </View>

              <View>
              <Image source={require('../Assetss/mpic.jpg')} style = {{height:40, width:40, borderRadius:5}} />         

              </View>


            </View>


          </View>
        </View>
        <View style={styles.WelcomeNote}>

          <View style={{
            width: wp('90%'),
            alignSelf: 'center',

          }}>
            <Text style={{
              fontSize: 24,
              fontWeight: '700'
            }}>Welcome,Username!</Text>

            <View style={{
              justifyContent: 'center',
              height: 40
            }}>
              <Text style={{
                fontSize: 18,
                color: '#050005',
                fontWeight:'300'
              }}>What would you like to do today?</Text>
            </View>
          </View>

        </View>
        <View style={styles.Cards}>


<TouchableOpacity onPress={() => this.props.navigation.navigate('Table')}>
          <View style={styles.card}>
          <Image source={require('../Assetss/G5.jpg')} style = {{ height:70,width:50}} />         

            <View style = {{
              height:65,
              paddingTop:10
            }}>

            <Text style={styles.InventoryText
            }>Inventory Status</Text>
            </View>
          </View>
 </TouchableOpacity>

<TouchableOpacity onPress={() => this.props.navigation.navigate('Editable')} >

          <View style={styles.card}>

          <Image source={require('../Assetss/update.jpg')} style = {{ height:70,width:50}}  />         


            <View style = {{
              height:65,
              paddingTop:10
            }}>
            <Text style={styles.InventoryText
            }>Update Inventory</Text>
            </View>
          </View>
          </TouchableOpacity>

            <TouchableOpacity  onPress={() => this.props.navigation.navigate('Curbside')} >

          <View style={styles.card}>
          <Image source={require('../Assetss/curbs.jpg')} style = {styles.img} />         
             <View style = {{
              height:60,
              paddingTop:10
            }}>
            <Text style={styles.InventoryText
            }>Curbside Orders</Text>
            </View>
          </View>
          </TouchableOpacity>

        </View>



      </View>
    );
  }
}

export default Welcomes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  header: {
    flex: .8,
    marginTop:35,
    backgroundColor: '#2bc5c1',
    alignItems: 'center',
    justifyContent: 'center'

  },
  WelcomeNote: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  Cards: {
    flex: 9,
    backgroundColor: 'white'
  },
  card: {
    backgroundColor: 'white',
    width: wp('90%'),
    height: hp('18%'),
    marginTop:hp('4%'),
    alignSelf: "center",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .2,
    shadowRadius: 3,
    
  },
  img : {
    height:60,
    width:60
  },

  InventoryText: {
    fontSize: 20,
    fontWeight: '400',
  }


});


// import SvgUri from 'react-native-svg-uri';                                    
// <SvgUri
//                                         width="40"
//                                         height="35"
//                                         source={require('../assets/credit_card_icon.svg')}
//                                     />