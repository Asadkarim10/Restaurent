import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from "react-redux";

import { StatusBar } from 'react-native'
import Checkboxs from '../components/Checkboxs'
import RestDialogBox from "../components/RestDialogBox";
import { callAPI } from "../api";
import { restAction, API_CONTS } from "../actions/constant";



class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            password: null,
            confirmPassword: null,
            show_password: false
        }
    }



    nextRoutes = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (this.state.name === null) {
            this.props.restAction({
                IS_RETURN: true,
                RETURN: false,
                IS_LOADING: false,
                RETURN_MESSAGE: "Please enter your name"
            })
        }


        else if (this.state.email === null) {
            this.props.restAction({
                IS_RETURN: true,
                RETURN: false,
                IS_LOADING: false,
                RETURN_MESSAGE: "Please enter email address"
            })
        }
        else if (reg.test(this.state.email) === false) {
            // Yay! valid
            this.props.restAction({
                IS_RETURN: true,
                RETURN: false,
                IS_LOADING: false,
                RETURN_MESSAGE: "Email address is not valid"
            })
        }
        else if (this.state.password === null) {
            this.props.restAction({
                IS_RETURN: true,
                RETURN: false,
                IS_LOADING: false,
                RETURN_MESSAGE: "Please enter password"
            })
        } else if (this.state.password.length < 8) {
            this.props.restAction({
                IS_RETURN: true,
                RETURN: false,
                IS_LOADING: false,
                RETURN_MESSAGE: "Email address is not valid"
            })
        }

        else if (this.state.confirmPassword === null) {
            this.props.restAction({
                IS_RETURN: true,
                RETURN: false,
                IS_LOADING: false,
                RETURN_MESSAGE: "confirm your password please"
            })
        }
        else {
            this.props.restAction({
                IS_RETURN: false,
                RETURN: false,
                IS_LOADING: true,
                RETURN_MESSAGE: "Email address is not valid"
            })
            const postsData = callAPI(API_CONTS.EMAILCHECK, "post", {
                email: this.state.email
            }).then(res => {

                if (res.return === true) {
                    this.props.restAction({
                        IS_RETURN: true,
                        RETURN: false,
                        IS_LOADING: false,
                        RETURN_MESSAGE: "Email already registered"
                    })
                } else {
                    this.props.restAction({
                        IS_RETURN: false,
                        RETURN: false,
                        IS_LOADING: false
                    });
                    this.props.navigation.navigate("SignIn", this.state)
                }
            });
        }
    }


    render() {



        return (
            <View style={styles.container}>

                <StatusBar
                    barStyle="dark-content"
                    // dark-content, light-content and default
                    hidden={false}
                    //To hide statusBar
                    backgroundColor="white"
                    //Background color of statusBar only works for Android
                    // translucent = {false}
                    //allowing light, but not detailed shapes
                    networkActivityIndicatorVisible={true}
                />
                <View style={{
                    backgroundColor: '#2bc5c1',
                    height: hp('6%'),

                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 30,
                        color: 'white'
                    }}>Create Account</Text>
                </View>

                <View style={{
                    alignItems: 'center',
                    height: hp('80%'),
                }}>
                    {/* <Text style = {{
                         fontSize:28
                     }}>Create Account</Text> */}

                    <View style={{
                        width: wp('90%'),
                        height: hp('13%'),
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontSize: 28,
                            fontWeight: '600'
                        }}>Hi there!</Text>
                        <Text>Fill in the form to create an account</Text>
                    </View>





                    <View style={{
                        width: wp('95%'),
                        alignSelf: "center",
                        justifyContent: 'center',

                    }}>
                        <View style={styles.textView}>
                            <Text style={styles.text}>Name</Text>
                        </View>
                        <TextInput
                            placeholderTextColor='#817f81'
                            placeholder="Name"
                            onChangeText={(text) =>
                                this.setState({ name: text })
                            }
                            value={this.state.name}
                            returnKeyType="next"
                            blurOnSubmit={false}
                            style={{ alignSelf: 'center', width: wp('84%'), margin: 8, paddingLeft: 14, height: hp('6%'), borderColor: '#9d9c9d', borderRadius: 10, fontWeight: '500', fontSize: 17, padding: 5, backgroundColor: 'white', borderWidth: 1, }}
                        />

                        <View style={styles.textView}>

                            <Text style={styles.text}>Email Address</Text>
                        </View>
                        <TextInput
                            onChangeText={(text) =>
                                this.setState({ email: text })
                            }
                            value={this.state.email}
                            placeholder="example@example.com"
                            placeholder="Email Address"
                            placeholderTextColor='#817f81'
                            blurOnSubmit={false}
                            style={{ alignSelf: 'center', width: wp('84%'), margin: 8, borderRadius: 10, height: hp('6%'), borderColor: '#9d9c9d', paddingLeft: 14, fontWeight: '500', fontSize: 17, padding: 5, backgroundColor: 'white', borderWidth: 1, }}
                        />
                        <View style={styles.textView}>

                            <Text style={styles.text}>Password</Text>
                        </View>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor='#817f81'
                            onChangeText={(text) =>
                                this.setState({ password: text })
                            }
                            secureTextEntry={!this.state.show_password}
                            value={this.state.password}
                            placeholder="xxx-xxx-xxxx"
                            blurOnSubmit={false}
                            style={{ alignSelf: 'center', width: wp('84%'), margin: 8, borderRadius: 10, height: hp('6%'), borderColor: '#9d9c9d', paddingLeft: 14, fontWeight: '500', fontSize: 17, padding: 5, backgroundColor: 'white', borderWidth: 1, }} />


                        <View style={styles.textView}>
                            <Text style={styles.text}>Confirm Password</Text>
                        </View>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Confirm Password"
                            placeholderTextColor='#817f81'
                            onChangeText={(text) =>
                                this.setState({ confirmPassword: text })
                            }
                            secureTextEntry={!this.state.show_password}
                            value={this.state.confirmPassword}
                            placeholder="xxx-xxx-xxxx"
                            blurOnSubmit={false}
                            style={{ alignSelf: 'center', width: wp('84%'), margin: 8, borderRadius: 10, height: hp('6%'), borderColor: '#9d9c9d', paddingLeft: 14, fontWeight: '500', fontSize: 17, padding: 5, backgroundColor: 'white', borderWidth: 1, }} />

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: hp('4%'),
                            alignSelf: 'center',
                            width: wp('85%')

                        }}>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                paddingLeft: 2,

                            }}>

                                <Checkboxs />
                                <Text style={{
                                    width: wp('75%'),
                                    fontSize: 15,
                                    fontWeight: '500',
                                    paddingLeft: 5
                                }} >I agree all statements in  <TouchableOpacity ><Text style={styles.loginbtn}>Terms of Services</Text></TouchableOpacity> </Text>
                            </View>

                        </View>
                    </View>

                    <View style={{
                        justifyContent: "center",
                        height: hp('10%'),
                    }}>

                        <TouchableOpacity onPress={() => { this.nextRoutes() }}

                            style={{
                                height: hp('6%'),
                                width: wp('36%'),
                                backgroundColor: '#2bc5c1',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 8
                            }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 22,
                                fontWeight: '500'
                            }}>Sign Up</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        width: wp('84%'),
                        flexDirection: 'row',
                        justifyContent: 'flex-end'
                    }}>
                        <Text>Have already an account? <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}><Text style={styles.loginbtn}>Login here</Text></TouchableOpacity>  </Text>

                    </View>

                </View>
            </View>);
    }
}

const mapStateToProps = state => ({
    rest: state.rest,
});

const mapDispatchToProps = dispatch => ({
    restAction: payload => dispatch(restAction(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'

    },



    text: {
        fontWeight: '500',
        fontSize: 17,
    },


    textView: {

        height: hp('4%'),
        width: wp('84%'),
        alignSelf: 'center',
        justifyContent: 'flex-end',
    },
    loginbtn: {
        textDecorationLine: 'underline',
        fontWeight: '500'

    }






});