import React, {Component} from 'react';
import { 
    View, 
    Text, 
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

import { styles } from '../../assets/stylesheets/home';
import QuickMenu from '../QuickMenu';

const Home = () => {
    return (
        <View style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
    
                <QuickMenu />

            </ScrollView>

            <Text style={styles.welcomeMsg}>
                Seja bem-vindo ao Sappling! {'\n'} 
                Seu app para gestão do seu agronegócio.
            </Text>

        </View>
    );
}

export default Home;
