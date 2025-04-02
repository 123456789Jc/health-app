import React, {useState} from "react"
import{View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native"

export default function RegisterScreen({onClose}:any){
    return(

        <View>
             <Text>singn up </Text>
             <TouchableOpacity onPress={onClose}> 
                <Text>Back to login</Text>
        </View>
    );
}