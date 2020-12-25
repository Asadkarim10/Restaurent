import React, { Component } from 'react';
import { StyleSheet, View , ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export default class InventoryStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Inventory Name', 'Inventory ID', 'Volumn', 'Current Quantity' ,'Required Quantity'],
      tableData: [
        ['sausages', '4539', '1000ml', '4539','4539'],
        ['sausages', '4539', '1000ml', '4539','4539'],
        ['sausages', '4539', '1000ml', '4539','4539'],
        ['sausages', '5', '1000ml', '4539','4539'],
        ['sausages', '45', '1000ml', '4539','4539'],
        ['sausages', '3', '1000ml', '4539','4539'],
        ['sausages', '4539', '1000ml', '4539','4539'],
        ['sausages', '4539', '1000ml', '4539','4539'],
        ['sausages', '53', '1000ml', '4539','4539'],
        ['sausages', '4539', '1000ml', '4539','4539'],
        ['sausages', '4539', '1000ml', '4539','4539'],
        ['sausages', '4539', '1000ml', '4539','4539'],
        ['sausages', '9', '1000ml', '4539','4539'],
        ['sausages', '4539', '1000ml', '4539','4539'],
        ['sausages', '4539', '1000ml', '4539','4539'],
        ['sausages', '4539', '1000ml', '4539','4539'],

      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
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
          <Rows style = {{backgroundColor:'#eefcfb', margin:5}} data={state.tableData} textStyle={styles.text}/>
          </ScrollView>
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1,  backgroundColor: '#fff' },
  head: {
     height:hp('8%')
  },

    text1 :{
      fontWeight:'700',
      textAlign:'center'
    },
  text: { margin: 6 , textAlign:'center' ,backgroundColor: '#f1f8ff'  }
});