import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Button } from 'react-native';

const Login = ({ email, password, isValidEmail, isValidPassword, onChangeText, onSubmit }) => {     
    return (            
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Login :</Text>

                {!isValidEmail && email.length > 0 && 
                    <Text style={styles.invalidText}>Enter a valid email</Text>
                }
                <TextInput 
                    style={!isValidEmail && email.length > 0  ? styles.invalid : styles.input}
                    placeholder="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    onChangeText={input => onChangeText('email', input)}
                />

                {!isValidPassword && password.length > 0 && 
                    <Text style={styles.invalidText}>Enter more than 6 characters</Text>
                }
                <TextInput 
                    style={!isValidPassword  && password.length > 0 ? styles.invalid : styles.input}
                    placeholder="password (more than 6 characters)"
                    textContentType="password"
                    secureTextEntry={true}
                    onChangeText={input => onChangeText('password', input)}
                />

                <Button
                    title="Login"
                    color="gray"
                    onPress={onSubmit}
                    />
            </View>
        </View>
    );
}


let height = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {      
        height: height
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        height: 35,
        marginBottom: 5,                
        width: '75%',
        padding: 5             
    },    
    invalid: {
        borderColor: 'red',        
        borderWidth: 1,
        height: 35,
        marginBottom: 5,                
        width: '75%',
        padding: 5  
    },
    invalidText: {
        color: 'red'
    },
    inputTitle: {
        fontSize: 30,
        marginBottom: 20
    }
})


export default Login;