import React from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Employee from './employeeDetails';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: '',
            valid: true
        };
    }

    isValid() {
        const { userName, password, valid } = this.state;
    
        if (userName.length > 0 && password.length > 0) {
          this.setState({valid: true})
        }
        else if (userName.length === 0) {
                alert('User name is empty');
                this.setState({valid: false});
        }
        else if (password.length === 0) {
              this.setState({ valid: false});
            //   alert(this.state.error)
        }
    
        return valid;
      }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    placeholder={'User name'} 
                    style={styles.TextInput}
                    onChangeText={this.handelUserName}
                />
                <TextInput 
                    placeholder={'Password'} 
                    secureTextEntry autoCorrect={false} 
                    style={styles.TextInput}
                    onChangeText={this.handelPassword}
                />
                <TouchableOpacity 
                    onPress = {() => this.loginPress(this.state.userName, this.state.password)}
                >
                    <Text style={styles.Button}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
    
    handelUserName = (text) => {
        this.setState({userName: text})
    }
    handelPassword = (text) => {
        this.setState({password: text})
    }
    loginPress = (userName,password) => {
        // if(this.isValid) 
        // {
            
        // }
        //alert('User Name' + userName + 'Password' + password);
        if(this.isValid)
        {
            fetch('https://api.myjson.com/bins/m1tm8')
            .then((response) => response.json())
            .then((responseJson) => {
                if(this.state.userName == responseJson.username && this.state.password == responseJson.password)
                 {
                    console.log(responseJson.password);
                    //alert('Logged in');
                    this.props.navigation.navigate('Home');
                }
                else
                {
                    alert('incorrect credentials');
                }
            })
        }
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8aace2'
    },
    TextInput: {
        borderColor: '#FF5722',
        borderWidth: wp('0.5%'),
        width: wp('75%'),
        height : hp('7.5%'),
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        margin: hp('1%')
        
    },
    Button: {
        marginTop: hp('5%'),
        width: wp('40%'),
        height: hp('5%'),
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#841584',
        fontSize: wp('5%'),
        fontWeight: '900'
    },
    placeholder: {
        margin: wp('20%'),
        
    }
});