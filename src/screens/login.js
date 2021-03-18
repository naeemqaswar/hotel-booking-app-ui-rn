import React, {useState} from 'react';
import { 
    View, 
    Text, 
    Image, 
    TextInput,
    StyleSheet, 
    TouchableHighlight,
    TouchableWithoutFeedback,
} from 'react-native';

import * as RootNavigation from '../navigation/RootNavigation';

export default function Login() {
    const [passwordSecure, setPasswordSecure] = useState(true);

    return <View style={[styles.container]}>
        <Image
            resizeMode="cover"
            style={styles.backgroundImage}
            blurRadius={2}
            source={require('../../assets/login/background.jpg')}
        />
        <View style={styles.formContainer}>
            <Text style={styles.title}>Hotel Booking</Text>
            <Text style={styles.subtitle}>Easy To Book Your Hotel</Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputGroup}>
                    <Image
                        source={require("../../assets/login/mail.png")}
                        style={styles.inputIcon}
                        resizeMode="contain"
                    />
                    <TextInput
                        placeholder="Email Address" 
                        placeholderTextColor="#fff"
                        style={styles.inputField}
                    />
                </View>
                <View style={{height: 20}} />
                <View style={styles.inputGroup}>
                    <Image
                        source={require("../../assets/login/key.png")}
                        style={styles.inputIcon}
                        resizeMode="contain"
                    />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={passwordSecure}
                        placeholderTextColor="#fff"
                        style={[styles.inputField, styles.inputPassword]}
                    />
                    <TouchableWithoutFeedback onPress={()=>setPasswordSecure(!passwordSecure)}>
                        <View style={styles.inputAction}>
                            <Image
                                source={require("../../assets/login/view.png")}
                                style={[styles.inputIcon, styles.inputEndingIcon]}
                                resizeMode="contain"
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <TouchableHighlight 
                onPress={()=> RootNavigation.navigate("main")}
                style={styles.submitAction}
                underlayColor="rgba(0, 0, 0, 0.7)"
            >
                <Text style={styles.submitText}>Login to account</Text>
            </TouchableHighlight>
            <View style={styles.accountActions}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <Text style={styles.accountActionText}>Forgot Password?</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <Text style={styles.accountActionText}>No Account Yet?</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        borderWidth: 1,
        justifyContent: 'center', 
        alignContent: 'center',
    },
    backgroundImage: {},
    formContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 9,
        paddingHorizontal: '8%',
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 13,
        color: '#fff',
        textAlign: 'center',
    },
    inputContainer: {
        paddingVertical: 40,
        width: '100%',
    },
    inputGroup:{
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: 'rgba(225, 225, 225, 0.5)'
    },
    inputIcon:{
        width: 15,
        height: 15,
        marginRight: 20,
    },
    inputEndingIcon:{
        width: 20,
        height: 20,
        marginRight: 0,
    },
    inputField:{
        color: '#fff',
        fontSize: 13,
        width: '90%',
    },
    inputPassword:{
        width: '80%',
    },
    inputAction:{
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    submitAction:{
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    submitText:{
        color: '#fff',
        fontSize: 13,
        textAlign: 'center',
    },
    accountActions:{
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    accountActionText:{
        color: '#fff',
        fontSize: 13,
    },
});