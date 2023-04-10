import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../../assets/stylesheets/about';

const About = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.aboutMsg}>
                Este app é apenas uma demo.
                Sinta-se livra para explorar e testar as funcionalidades. {'\n'}
            </Text>

            <View style={styles.previewArea}>

                <Text style={styles.featureText}>
                    Forms
                </Text>

                <View style={styles.forms1}>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Senha'
                        underlineColorAndroid={'transparent'}
                    />
                    <TouchableOpacity style={styles.forms1Btn}>
                        <Text style={{color: '#fff', textAlign: 'center'}}>Entrar</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </ScrollView>
    );
}

export default About;
