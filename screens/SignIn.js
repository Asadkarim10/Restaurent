import React, {Component} from 'react';
import { connect } from "react-redux";
import { View, Text, StyleSheet,TextInput, TouchableOpacity, ImageBackground, Image, ScrollView , Alert} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import Checkboxs from '../components/Checkboxs'

// import { createStackNavigator, createAppContainer } from 'react-navigation';
  import RestDialogBox from "../components/RestDialogBox";
// import { callAPI , updateAPIConfig } from "../api";
 import { restAction, API_CONTS, storeData } from "../actions/constant";
// import { authUser, logout } from "../actions/authAction";


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: null,
        password: null,
        show_password: false,
        showAlert: true,
        isPasswordShow: false,
    }
 }



 callTabsAction = (name) => {
  this.setState(prev = ({

    isPasswordshow: true,
   
      ...{ [name]: true }
  }))
}

 


// componentDidMount() {
//     setTimeout(() => {
//         this.props.logout();
//     }, 500);
// }

loginClick =  () => {
    try {

        const restInit = {
            IS_LOADING: true,
            RETURN: false,
            IS_RETURN: false,
            RETURN_MESSAGE: "Something wrong",
        }
        this.props.restAction(restInit);
        const postsData = callAPI(API_CONTS.LOGIN, "post", {
            "username": this.state.email, "password": this.state.password
        }).then(res => {
            restInit.IS_LOADING = false;
            restInit.RETURN_MESSAGE = res.message;
            restInit.IS_RETURN = true;
            restInit.RETURN = res.return;
            if (res.return === false) {
                this.props.logout();
                this.props.restAction(restInit);
            } else {
                const authUserInit = {
                    userType: res.users.usertype,
                    authToken: res.token,
                    userAuthenticates: true,
                    id: res.users.id,
                    user: res.users
                }
                restInit.IS_RETURN = false;
                this.setUserData(authUserInit);
                this.props.restAction(restInit);
                this.props.authUser(authUserInit)
            }
        });
    } catch (error) {
        this.props.restAction(
            {
                IS_LOADING: false,
                IS_RETURN: true,
                RETURN: false,
                RETURN_MESSAGE: "Network request failed"
            });

    }
}
setUserData = async (authUserInit) => {
    await storeData("authToken", authUserInit.authToken);
    updateAPIConfig(authUserInit.authToken);
    await storeData("userAuthenticates", authUserInit.userAuthenticates);
    await storeData("userType", authUserInit.userType);
    await storeData("id", authUserInit.id);
    await storeData("user", JSON.stringify(authUserInit.user));
 }
  render() {
    const {showAlert} = this.state;
   
    return (
        <View style= {styles.container}>
            <View style = {{
                justifyContent:'center',
                alignItems:'center',
                height:hp('90%'),
            }}>

<Image
          source={require('../assets/home.jpg')}
          style = {{height:100 ,width:wp('30%') }}
        />

<View style = {{
    width:wp('63%'),
    height:hp('15%'),
    alignItems:"center",
    alignSelf:'center',
    justifyContent:'center'
}}>
        <Text style = {{
            fontSize:26,
            textAlign:'center'
        }} >Welcome to the <Text style = {{
            fontWeight:'600',
            fontSize:26
        }}>Restaurant App!</Text>  
         </Text>
 </View>   
    

    
            

            <View style = {{
                width:wp('95%'),
                alignSelf:"center",
                height:hp('22%'),
                justifyContent:'center',
                
            }}>
                <TextInput  
                    placeholderTextColor='#817f81'
                    onChangeText={(text) =>
                      this.setState({ email: text })
                  }
                  value={this.state.email}
                    placeholder="Enter Email"
                      style={{ alignSelf:'center', width:wp('84%'),  paddingLeft:14, height:hp('6%'), borderColor:'#9d9c9d', borderRadius:10, fontWeight:'500', fontSize:17, padding:5, backgroundColor:'white', borderWidth:1,}}
                />


                <View style = {{
                  alignSelf:'center',
                  justifyContent:'center',
                   width:wp('84%'), margin:8, borderRadius:10, paddingLeft:10, height:hp('6%'), borderColor:'#9d9c9d',  fontWeight:'500', fontSize:17, padding:5, backgroundColor:'white', borderWidth:1,
                }}>   

                <View style = {{
                  flexDirection:'row',
                  justifyContent:'space-between',
                  width:wp('78%')
                }}>           
                <TextInput 
                 onChangeText={(text) =>
                  this.setState({ password: text })  }
              secureTextEntry={!this.state.show_password}
              value={this.state.password}
              placeholder="Enter your password"
                secureTextEntry={true}
                placeholderTextColor='#817f81'
                style={{  fontWeight:'500', fontSize:17, backgroundColor:'white'}}        />
<TouchableOpacity 
 onPress={
  () => { this.callTabsAction("isPasswordShow")}} style = {{
  justifyContent:'center',

}}>
         


{
    this.state.isPasswordShow === true ?
<Image
          source={require('../Assetss/eye.png')}
        />
    :
    <Image
    source={require('../Assetss/eyec.png')}
  />
} 




        </TouchableOpacity>
</View>

</View>
            

                <View style = {{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                     height:hp('4%'),
                    alignSelf:'center',
                    width:wp('85%')
                    
                }}>
                
                <View style = {{
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    alignItems:'center',
                   paddingLeft:2,

                }}>

                <Checkboxs />
                <Text style = {{
                    width:wp('35%'),
                    fontSize:15,
                    fontWeight:'600',
                    paddingLeft:5
                }} >Remember me</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgetP')} >
                <View>
                <Text style = {{
        textDecorationLine: 'underline',
        color:'#55e2f4',
        fontWeight:'500',
        fontSize:15,
        
                }}>Forgot Password?</Text>
                </View>
                </TouchableOpacity>
                </View>
                </View>

<View>
</View>


<View style = {{
    justifyContent:"center"
}}>

                 <TouchableOpacity   onPress={() => { this.loginClick() }}

                style = {{
                    height:hp('6%'),
                    width:wp('36%'),
                    backgroundColor:'#2bc5c1',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:6
                }}>
                    <Text style = {{
                        color:'white',
                        fontSize:22,
                        fontWeight:'500'
                    }}>Login</Text>
                </TouchableOpacity>
                
                </View>
                <View style = {{
                  width:wp("84%"),
                  flexDirection:'row',
                  height:hp('3%'),
                  marginTop:5,
                  alignContent:'center',
                  justifyContent:'center',
                  justifyContent:'flex-end'
                }}>
                <Text>Dont have an account
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                     <Text style = {{
                       fontWeight:'500',
                       textDecorationLine:'underline'
                     }}> SignUp</Text>
                     </TouchableOpacity></Text>
                </View>

</View>
<RestDialogBox />

            </View>
    );
  }
}

// export default SignIn;
const mapStateToProps = state => ({
  auth: state.auth,
  rest: state.rest,
});

const mapDispatchToProps = dispatch => ({
  authUser: payload => dispatch(authUser(payload)),
  restAction: payload => dispatch(restAction(payload)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
  
    },
  
    header: {
      flex: 1,
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