import React, { Fragment } from "react";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import { styles } from "../../assets/stylesheets/home";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const QuickMenu = () => {

    return (

        <View>

            <Text style={styles.quickMenuHeader}>Ações Rápidas</Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.quickMenu}>

                <View style={styles.btnSegment}>
                    <TouchableOpacity style={styles.button}>
                        <MaterialCommunityIcons name="dots-horizontal" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.btnText}>Mais Ações</Text>
                </View>

                <View style={styles.btnSegment}>
                    <TouchableOpacity style={styles.button}>
                        <FontAwesome5 name="dollar-sign" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.btnText}>Financeiro</Text>
                </View>

                <View style={styles.btnSegment}>
                    <TouchableOpacity style={styles.button}>
                        <FontAwesome5 name="dolly" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.btnText}>Estoque</Text>
                </View>

                <View style={styles.btnSegment}>
                    <TouchableOpacity style={styles.button}>
                        <MaterialCommunityIcons name="file-document-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.btnText}>Relatórios</Text>
                </View>

                <View style={styles.btnSegment}>
                    <TouchableOpacity style={styles.button}>
                        <MaterialCommunityIcons name="sprout-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.btnText}>Controle de Safra</Text>
                </View>

                <View style={styles.btnSegment}>
                    <TouchableOpacity style={styles.button}>
                        <FontAwesome5 name="sliders-h" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.btnText}>Configurações</Text>
                </View>

            </ScrollView>

        </View>

    )

}

export default QuickMenu;