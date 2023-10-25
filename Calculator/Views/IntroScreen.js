import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'

const IntroScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Image source={logo4} style={styles.innerimg} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'column',
        height:'100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner: {},
    innerimg: {}
});

export default IntroScreen