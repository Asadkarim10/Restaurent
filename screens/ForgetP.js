import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'react-native'

class ForgetP extends Component {

    createTwoButtonAlert = (props) =>
    Alert.alert(
      "Password link has been sent to your email address",
    
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => props.navigation.navigate('SignIn') }
      ],
      { cancelable: false }
    );



    render() {
      return (
          <View style = {styles.container}>
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

              <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                  {/* <Icon name="arrow"  size={20}/> */}
       <Image source={require('../Assetss/left.png')} style = {{height:20,width:20, marginTop:3}} />         
           </TouchableOpacity> 


            </View>

         


          </View>
        </View>



<View style = {{
                alignItems:'center',
                height:hp('40%'),
                justifyContent:'center'
            }}>

<Image
          source={require('../assets/home.jpg')}
          style = {{height:hp('20%') ,width:wp('40%') , borderRadius:20 }}
        />


 </View>




              <View style = {{
                  width:wp('84%'),
                  height:hp('50%'),
                  alignSelf:"center",
                  justifyContent:'flex-start'
              }}>



                  <Text style = {{
                      fontSize:25,
                      fontWeight:'600'
                  }}>
                        Forget password?
                  </Text>
                  <Text>
                        Enter your email and we will send you the reset link
                  </Text>
                  <View style = {{
                      height:100,
                      justifyContent:'center',
                  }}>
                  <TextInput 
                  placeholder="Email Address"
                  placeholderTextColor='#817f81'
                  style={{ alignSelf:'center', width:wp('84%'), margin:8, borderRadius:10, height:hp('6%'), borderColor:'#9d9c9d', paddingLeft:14, fontWeight:'500', fontSize:17, padding:5, backgroundColor:'white', borderWidth:1,}}
                  />
                  </View>
                  <View style = {{
                      width:wp('84%'),
                      alignSelf:'center',
                      alignItems:'center',
                  }}>
                  <TouchableOpacity  onPress={this.createTwoButtonAlert}
  
  style = {{
      height:hp('6%'),
      width:wp('36%'),
      backgroundColor:'#2bc5c1',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:8
  }}>
      <Text style = {{
          color:'white',
          fontSize:24,
          fontWeight:'500'
      }}>Send</Text>
  </TouchableOpacity>
                  </View>
              </View>
        </View>
      );
    }
  }
  
  export default ForgetP;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
     justifyContent:'center',
      backgroundColor: 'white'
  
    },
    header: {
        marginTop:40,
        flex: 1,
        backgroundColor: '#2bc5c1',
        alignItems: 'center',
        justifyContent: 'center'
      },
  
  
  text : {
      fontWeight:'500', 
      fontSize:17,
  },
  textView : {
  
          height:hp('4%'),
          width:wp('84%'),
          alignSelf:'center',
          justifyContent:'flex-end',
      },
  loginbtn : {
      textDecorationLine: 'underline',
      fontWeight:'500'

  }
  
   
  
  
  
  
  });