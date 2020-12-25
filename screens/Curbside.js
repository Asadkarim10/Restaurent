import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Delivered from '../components/Delivered';
import Pending from '../components/Pending'
import Arrived from '../components/Arrived'
import { StatusBar } from 'react-native'

class Curbside extends Component {


  constructor(props) {
    super(props)
    this.state = {
        isArrivedShow: true,
        isPendingShow : false,
        isDeliveredShow : false,
    
    }
}


callTabsAction = (name) => {
    this.setState(prev = ({

      isArrivedShow: false,
      isPendingShow : false,
      isDeliveredShow : false,
        ...{ [name]: true }
    }))
    console.log({ [name]: true }, "tetstst")

}



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

              <Icon name="bars" color='white' size={28} />


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
        <View style={styles.Curb}>

          <View style={{
            width: wp('90%'),
            alignSelf: 'center',
            flexDirection:'row',
            justifyContent:'flex-start',

          }}>

    <View style = {{
        width:wp('48%'),
        flexDirection:'row',
        justifyContent:'space-between'
    }}>        
        <View>   
        
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Welcomes')}>
       <Image source={require('../Assetss/left.png')} style = {{height:20,width:20, marginTop:3}} />         
           </TouchableOpacity>  
        </View>

        <View style = {{
            justifyContent:'center'
        }}>
        <Text style = {{
            fontSize:20,
            fontWeight:'400'
        }}>Curbside Pickup</Text>
        </View>

          </View>
          </View>
        </View>




        <View style={styles.btn}>


<View style = {{ 
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#f6f6f6'
}}>
        <TouchableOpacity onPress={
                            () => { this.callTabsAction("isArrivedShow")}} 
                            style = {{
            height:40,
            width:wp('30%'),
            backgroundColor: (this.state.isArrivedShow === true) ? "#2bc5c1" : "#f6f6f6",
             alignItems:'center',
             justifyContent:'center',
             borderRadius:10,
             
        }}>
            <Text style = {{
                color:'white',
                fontWeight:'bold',
                fontSize:20,
                color: (this.state.isArrivedShow === true) ? "white" : "black",

            }}>Arrived</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={
            () => { this.callTabsAction("isPendingShow")}} 
        
        style = {{
            height:40,
            width:wp('30%'),
            backgroundColor: (this.state.isPendingShow === true) ? "#2bc5c1" : "#f6f6f6",
             alignItems:'center',
             justifyContent:'center',
             borderRadius:10
        }}>
            <Text style = {{
                fontWeight:'500',
                fontSize:20,
                color: (this.state.isPendingShow === true) ? "white" : "black",
                
            }}>Pending</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={
            () => { this.callTabsAction("isDeliveredShow")}} 
        style = {{
            height:40,
            width:wp('30%'),
            backgroundColor: (this.state.isDeliveredShow === true) ? "#2bc5c1" : "#f6f6f6",
             alignItems:'center',
             justifyContent:'center',
             borderRadius:10
        }}>
            <Text style = {{
                fontWeight:'500',
                fontSize:20,
                color: (this.state.isDeliveredShow === true) ? "white" : "black",

            }}>Delivered</Text>
        </TouchableOpacity>
        </View>    
        </View>







<View style = {styles.Cards}>

<ScrollView>



{
    this.state.isDeliveredShow === true ?
    <Delivered   />

    :
    null
}


{
    this.state.isPendingShow === true ?
    <Pending  navigation={this.props.navigation}/>
    :

    null
}


{
    this.state.isArrivedShow === true 
    ?
    <Arrived navigation={this.props.navigation}  />
    :

    null
}



  


</ScrollView>
</View>


      </View>
    );
  }
}

export default Curbside;

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
  Curb: {
    flex: 1,
    backgroundColor: '#eefcfb',
    justifyContent: 'center'
  },

  btn :{

    flex:1,
    justifyContent:'center',
    alignItems:'center'

  },

  Cards: {
    flex: 7,
    backgroundColor: 'white'
  },
  card: {
    backgroundColor: 'white',
    width: wp('90%'),
    height: 150,
    marginTop:10,
    alignSelf: "center",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.9,
    elevation: 5,
  },

  InventoryText: {
    fontSize: 30,
    fontWeight: '500',
  }


});