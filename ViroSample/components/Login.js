import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import firebase from 'firebase';

export default class Login extends Component {
    render() {
        return (
            <View>
                <TextInput style={this.Styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="next"
                    placeholder='Email or Mobile Num'
                    placeholderTextColor='black' />

                <TextInput style={this.Styles.input}
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    placeholder='Password'
                    placeholderTextColor='black'
                    secureTextEntry />



            </View>
        )
    }
    Styles = StyleSheet.create({
        container: {
            padding: 20
        },
        input: {
            height: 40,
            backgroundColor: 'rgba(225,225,225,0.2)',
            marginBottom: 10,
            padding: 10,
            color: 'black'
        },
        buttonContainer: {
            backgroundColor: '#2980b6',
            paddingVertical: 15
        },
        buttonText: {
            color: 'black',
            textAlign: 'center',
            fontWeight: '700'
        }
    })

}

