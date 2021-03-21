import React, {useState} from 'react';
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    TouchableWithoutFeedback,
} from 'react-native';

import * as RootNavigation from '../navigation/RootNavigation';

import Input from '../components/login/Input';
import Button from '../components/login/Button';

export default function Login() {
    const [passwordSecure, setPasswordSecure] = useState(true);

    return <View style={styles.container}>
        <Image
            resizeMode="cover"
            style={styles.backgroundImage}
            blurRadius={2}
            source={require('../../assets/login/background.jpg')}
        />
        <View style={styles.formContainer}>
            <Text style={styles.title}>Hotel Booking</Text>
            <Text style={styles.subtitle}>Easy To Book Your Hotel</Text>
            <View style={styles.inputsContainer}>
                <Input
                    placeholder="Email Address"
                    leadingIcon={require("../../assets/login/mail.png")}
                />
                <View style={{height: 25}} />
                <Input
                    placeholder="Password"
                    endingAction={()=>setPasswordSecure(!passwordSecure)}
                    leadingIcon={require("../../assets/login/key.png")}
                    endingIcon={require("../../assets/login/view.png")}
                />
            </View>
            <Button title="Login to account" action={()=> RootNavigation.navigate("main")} />
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
    inputsContainer: {
        paddingVertical: 30,
        width: '100%',
    },
    accountActions:{
        width: '100%',
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    accountActionText:{
        color: '#fff',
        fontSize: 13,
    },
});