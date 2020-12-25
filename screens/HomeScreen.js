import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,  Image, StatusBar } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//import Icon from 'react-native-vector-icons/FontAwesome';


const HomeScreen = ({ navigation }) => {
  var isRecording =  false ; 

  var backColor = "#162343"

  const toggleClick = () => {
    navigation.toggleDrawer();
    backColor = "white";
  }


  return (
    <View style={{
      flex: 1,
      backgroundColor: backColor ,
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
          color: 'white',
          backgroundColor: backColor,
          flex: 6,
          alignItems: 'flex-end',
          justifyContent: 'center',
          marginRight: 30 
        }}>
          
          <TouchableOpacity onPress={() => toggleClick() }>
          <Image
              source={require('../assets/sidebar.png')}
            />
          </TouchableOpacity>
          {/* <Text style={styles.text1} >Hassam saleem</Text> */}
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
          backgroundColor: "#fb5253",
          borderWidth: 4,
          width: 120,
          height: 120,
          borderColor: "#fb5253",
          borderRadius: 120 / 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => {navigation.navigate("StopRecording") }}>
      
         {/* <Icon name="microphone" color="white" size={56} />  */}
          </TouchableOpacity> 
          <Text style={{
            color: "white",
            marginTop: 0,
            fontSize: 12,
          }}>Tap to record</Text>
      
        </View>
        
      </View>

      <View style={{
        flex: 1,
        color: 'white',
        width: wp('100%'),
        alignItems: 'center',
        backgroundColor: backColor
      }}>
        <Text style={styles.text3}>00 : 00 : 00</Text>
      </View>
      <View style={{
        flex: 2,
        color: 'white',
        width: wp('100%'),
        alignItems: 'center',
        backgroundColor: backColor
      }}>
        <Text style={styles.text4}></Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text1: {
    color: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    // backgroundColor: "brown",
    textAlign: "right",
    marginRight: 20 ,
    marginTop: 20
  },

  text2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    paddingLeft: 20,
    // backgroundColor: "black"
  },
  text3: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
  },
  text4: {
    backgroundColor: "#fb5253" ,
    width:  wp('100%'),
    height: 2 ,
    marginTop: 50
  }



});