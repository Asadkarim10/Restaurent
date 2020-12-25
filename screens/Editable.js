import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { StatusBar } from 'react-native'


class Editable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Inventory Name', 'Volumn', 'Current Quantity', 'Required Quantity', 'Input Quantity'],
      tableData: [
        ['sausages', '4539', '1000ml', '4539', '4539'],
        ['sausages', '4539', '1000ml', '4539', '4539'],
        ['sausages', '4539', '1000ml', '4539', '4539'],
        ['sausages', '4539', '1000ml', '4539', '4539'],
        ['sausages', '4539', '1000ml', '4539', '4539'],
        ['sausages', '4539', '1000ml', '4539', '4539'],
        ['sausages', '4539', '1000ml', '4539', '4539'],
        ['sausages', '4539', '1000ml', '4539', '4539'],
        ['sausages', '4539', '1000ml', '4539', '4539'],
        ['sausages', '4539', '1000ml', '4539', '4539'],
        ['sausages', '4539', '1000ml', '4539', '4539'],
        ['sausages', '4539', '1000ml', '4539', '4539'],
        ['sausages', '4539', '1000ml', '4539', '4539'],
        ['sausages', '4539', '1000ml', '4539', '4539'],
        ['sausages', '4539', '1000ml', '4539', '4539'],
        ['sausages', '4539', '1000ml', '4539', '4539'],
      ]
    }
  }

  _inputType(index) {
    <TextInput />
  }





  render() {
    const state = this.state;

    const element = (data, index) => (
      <View style={styles.input}>
        <TextInput />
      </View>
    );

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

              <Icon name="bars" color='white' size={26} />


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
            flexDirection: 'row',
            justifyContent: 'flex-start',

          }}>

            <View style={{
              width: wp('48%'),
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Welcomes')}  >
                <Image source={require('../Assetss/left.png')} style = {{height:20,width:20, marginTop:3}} />         
                </TouchableOpacity>
              </View>

              <View style={{
                justifyContent: 'center'
              }}>
                <Text style={{
                  fontSize: 20,
                  fontWeight: '700'
                }}>Update Inventory</Text>
              </View>

            </View>
          </View>
        </View>




        <View style={styles.btn}>


          <TouchableOpacity

            style={{
              backgroundColor: '#2bc5c1',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              height:hp('4.4%') ,
              borderRadius: 6,
              width: wp("41%")
            }}>
            <Icon style={{
              width:wp('5%'),
              paddingLeft:5
            }} name="save" color="white" size={15} />
            <Text style={{
              fontSize: 16,
              width:wp('28%'),
              color: "white"
            }}>Save Changes</Text>
          </TouchableOpacity>



        </View>


        <View style={styles.search}>

          <View style={{
            width: wp('90%'),
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderWidth: 1,
            borderRadius: 5,
            borderColor:'#dcdbdc',
            alignItems: 'center'
          }}>
            <TextInput
              placeholder='Search for an item Or ID'
              placeholderTextColor="#7f8083"
              style={{
                height: 50, width: ('80%'), fontSize: 18, paddingLeft: 5, borderRadius: 5,
                borderColor: 'gray', borderWidth: 0
              }}
            />

            <TouchableOpacity>
            <Image source={require('../Assetss/search.jpg')} style = {{height:20, width:20}} />         
            </TouchableOpacity>

          </View>


        </View>






        <View style={styles.Cards}>




          <Table >
          <View style = {{
           shadowColor: "#000",
           shadowOffset: {
             width: 0,
             height: 2,
           },
           backgroundColor:'white',
           shadowOpacity: .25,
           shadowRadius: 1.84,
           
           elevation: 1,
           
          }}>
          <Row  data={state.tableHead} style={styles.head} textStyle={styles.text1}/>

          </View>
            <ScrollView>

              {
                state.tableData.map((rowData, index) => (

                  <TableWrapper key={index} style={styles.row} xz>

                    {
                      rowData.map((cellData, cellIndex) => (

                        <Cell key={cellIndex} data={cellIndex === 4 ? element(cellData, index) : cellData} textStyle={styles.text} />

                      ))
                    }

                  </TableWrapper>



                ))
              }
            </ScrollView>

          </Table>



        </View>






      </View>
    );
  }
}

export default Editable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'

  },

  head: {
    height: hp('10%'),
    backgroundColor: '#ffffff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,

  },

  header: {
    flex: .8,
    marginTop:35,
    backgroundColor: '#2bc5c1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Curb: {
    flex: .7,
    backgroundColor: '#eefcfb',
    justifyContent: 'center'
  },

  btn: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: wp('50%'),


  },



  Cards: {
    flex: 7,
    backgroundColor: 'white'
  },
  card: {

    backgroundColor: 'white',
    width: wp('90%'),
    height: 150,
    marginTop: 10,
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
  },

  search: {
    flex: .7,
  },

  text: {
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '500',
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    height: hp('4%'),
    color: 'blue',
    width: wp('100%'),
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: '#eefcfb'
  },
  input:
  {
    width: 58,
    justifyContent: 'center',
    height: hp('3%'), width: wp('18%'),
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black'
  },
  btnText: { color: '#fff' },
  text1: {
    fontWeight: '700',
    textAlign: 'center'
  },

});