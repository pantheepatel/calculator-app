// TODO: to make scientific calculator
// FIXME: 2+1=3 when user presses any number again it will be added to thi string like 31,32,...; --v
// if number is pressed then that should be replaced and if that is the sign then it should be displayed like 3+ or 3*

import React, { useState } from 'react'
import { View, Text, ScrollView, Pressable, Switch, TouchableOpacity } from 'react-native'
import styles from './Styles'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const MainScreen = () => {
    const [value, setValue] = useState('0')
    const [darkTheme, setDarkTheme] = useState(false)
    const [bracket, setBracketOpen] = useState(false)
    const [ans, setAns] = useState(false)

    // const handlePress = (key) => {
    //     console.log(key)
    //     if (key == 'AC') { setValue('0') }
    //     else if (key == 'back') {
    //         setValue(value.slice(0, -1))
    //     }
    //     else if (value == 'Format Error') {
    //         setValue(key)
    //     }
    //     else if (key == '( )') {
    //         if (value == '0') {
    //             setValue('(')
    //             setBracketOpen(true)
    //         }
    //         else if (isNaN(value.slice(-1))) {
    //             setValue(value + '(')
    //             setBracketOpen(true)
    //         }
    //         else {
    //             if (bracket) {
    //                 setValue(value + ')')
    //             }
    //             else {
    //                 setValue(value + '(')
    //             }
    //             setBracketOpen(!bracket)
    //         }
    //     }
    //     else if (key == '=') {
    //         try {
    //             if (!isNaN(value.slice(-1))) {

    //             }
    //         }
    //         catch (e) {
    //             setValue('Format Error')
    //         }
    //     }
    //     else {
    //         if (value == '0') {
    //             // console.log(isNaN(key))
    //             if (key == '.' || key == '%' || key == '*' || key == '+' || key == '/' || key == '-') {
    //                 // console.log('looging3')
    //                 setValue(value + key)
    //             }
    //             else {
    //                 setValue(key)
    //             }
    //         }
    //         else if (isNaN(key)) {
    //             if (isNaN(value.slice(-1))) {
    //                 setValue(value.slice(0, -1) + key)
    //             }
    //             else {
    //                 setValue(value + key)
    //             }
    //         }
    //         else {
    //             setValue(value + key)
    //         }
    //     }
    // }

    const colors = {
        dark: '#22252d',
        dark1: '#292b36',
        dark2: '#272b33',
        light: '#fff',
        light1: "#f1f1f1",
        light2: "#f7f7f7",
        gray: '#292724',
    }

    const getTheme = (light, dark) => darkTheme ? dark : light;

    const calculate = (key) => {
        if (!isNaN(key) && ans) {
            console.log('pppp')
            setValue(key)
            setAns(false)
            console.log('value',value,ans)
        }
        if (key == 'AC') { setValue('0') }
        else if (key == 'DEL') {
            setValue(value.slice(0, -1))
        }
        else if (value == 'Format Error') {
            setValue(key)
        }
        else if (key == '=') {
            if(!isNaN(value.slice(-1))){
                const answer = Number(eval(value).toFixed(3)).toString()
                setValue(answer)
                // setAns(true)
            }
            else{
                setValue('Format Error')
            }
            setAns(true)
        }
        else {
            if (value == '0') {
                if ((key == '.' || key == '%' || key == '*' || key == '+' || key == '/')) {
                    console.log('here')
                    setValue(value + key)
                }
                else {
                    setValue(key)
                }
            }
            else if (isNaN(key) && (key != '-')) {
                if (isNaN(value.slice(-1))) {
                    setValue(value.slice(0, -1) + key)
                }
                else {
                    setValue(value + key)
                }
            }
            else {
                setValue(value + key)
            }
        }
        // console.log('here')
        // if (!ans) { setValue('0') }
    }

    const Btn = ({ title, type }) => (
        <TouchableOpacity
            onPress={() => calculate(title)}
            style={{
                // padding: 1,
                borderRadius: 15,
                elevation: 5,
                height: 70,
                width: 70,
                margin: 10,
                // paddingTop:70,
                // marginTop:40,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: getTheme(colors.light, colors.dark),
            }}
        >
            <Text
                style={{
                    fontSize: 30,
                    color: getBtnColor(type),
                }}
            >{title}</Text>
        </TouchableOpacity>
    )

    const getBtnColor = (type) => {
        if (type == 'top') { return '#35fbd6' }
        else if (type == 'right') { return '#eb6363' }
        else { return getTheme(colors.dark, colors.light) }
    }

    return (
        <View style={{
            marginTop: '10%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: getTheme(colors.light, colors.dark),
        }}>
            <Switch value={darkTheme} onValueChange={() => setDarkTheme(!darkTheme)}
                thumbColor={getTheme(colors.dark, colors.light)} trackColor={{ true: colors.light2, false: colors.dark2 }}></Switch>

            <ScrollView style={{
                elevation: 10,
                backgroundColor: 'white',
                width: '95%',
                // height: '30%',
                borderRadius: 10,
                display: 'flex',
                padding: 10,
                backgroundColor: getTheme(colors.light1, colors.dark1),
            }} ref={ref => { this.scrollView = ref }}
                onContentSizeChange={() => this.scrollView.scrollToEnd({ animation: true })}>
                <Text style={{
                    fontSize: 50,
                    textAlign: 'right',
                    paddingBottom: 9,
                    color: getTheme(colors.dark, colors.light),
                }}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
            </ScrollView>

            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                height: '65%',
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: getTheme(colors.light, colors.dark1),
            }}>
                <Btn onPress={() => handlePress('AC')} title='AC' type='top' />
                <Btn onPress={() => handlePress('DEL')} title='DEL' type='top' />
                <Btn onPress={() => handlePress('/')} title='/' type='top' />
                <Btn onPress={() => handlePress('%')} title='%' type='top' />
                <Btn onPress={() => handlePress('9')} title='9' type='number' />
                <Btn onPress={() => handlePress('8')} title='8' type='number' />
                <Btn onPress={() => handlePress('7')} title='7' type='number' />
                <Btn onPress={() => handlePress('*')} title='*' type='right' />
                <Btn onPress={() => handlePress('6')} title='6' type='number' />
                <Btn onPress={() => handlePress('5')} title='5' type='number' />
                <Btn onPress={() => handlePress('4')} title='4' type='number' />
                <Btn onPress={() => handlePress('-')} title='-' type='right' />
                <Btn onPress={() => handlePress('3')} title='3' type='number' />
                <Btn onPress={() => handlePress('2')} title='2' type='number' />
                <Btn onPress={() => handlePress('1')} title='1' type='number' />
                <Btn onPress={() => handlePress('+')} title='+' type='right' />
                <Btn onPress={() => handlePress('00')} title='00' type='number' />
                <Btn onPress={() => handlePress('0')} title='0' type='number' />
                <Btn onPress={() => handlePress('.')} title='.' type='number' />
                <Btn onPress={() => handlePress('=')} title='=' type='right' />
            </View>


            {/* <View style={styles.keypad}>
                <View style={styles.keypad_row}>
                    <Pressable onPress={() => handlePress('AC')}>
                        <View style={styles.button_outer2}>
                            <Text style={styles.button2}>AC</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('%')}>
                        <View style={styles.button_outer2}>
                            <Text style={styles.button2}>%</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('/')}>
                        <View style={styles.button_outer2}>
                            <Text style={styles.button2}>/</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.keypad_row}>
                    <Pressable onPress={() => handlePress('9')}>
                        <View style={styles.button_outer1}>
                            <Text style={styles.button1}>9</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('8')}>
                        <View style={styles.button_outer1}>
                            <Text style={styles.button1}>8</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('7')}>
                        <View style={styles.button_outer1}>
                            <Text style={styles.button1}>7</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('*')}>
                        <View style={styles.button_outer2}>
                            <Text style={styles.button2}>*</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.keypad_row}>
                    <Pressable onPress={() => handlePress('6')}>
                        <View style={styles.button_outer1}>
                            <Text style={styles.button1}>6</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('5')}>
                        <View style={styles.button_outer1}>
                            <Text style={styles.button1}>5</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('4')}>
                        <View style={styles.button_outer1}>
                            <Text style={styles.button1}>4</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('-')}>
                        <View style={styles.button_outer2}>
                            <Text style={styles.button2}>-</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.keypad_row}>
                    <Pressable onPress={() => handlePress('3')}>
                        <View style={styles.button_outer1}>
                            <Text style={styles.button1}>3</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('2')}>
                        <View style={styles.button_outer1}>
                            <Text style={styles.button1}>2</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('1')}>
                        <View style={styles.button_outer1}>
                            <Text style={styles.button1}>1</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('+')}>
                        <View style={styles.button_outer2}>
                            <Text style={styles.button2}>+</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.keypad_row}>
                    <Pressable onPress={() => handlePress('back')}>
                        <View style={styles.button_outer1}>
                            <Text style={styles.button1}>&lt;</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('0')}>
                        <View style={styles.button_outer1}>
                            <Text style={styles.button1}>0</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('.')}>
                        <View style={styles.button_outer1}>
                            <Text style={styles.button1}>.</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('=')}>
                        <View style={styles.button_outer2}>
                            <Text style={styles.button2}>=</Text>
                        </View>
                    </Pressable>
                </View>
            </View> */}

        </View>
    )
}

export default MainScreen