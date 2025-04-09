import React, {useState} from "react"
import{View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native"
import {supabase} from"..//supabaseClient";

export default function RegisterScreen({onClose}:any){
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[fullname,setFullname] = useState("");
    const[mobilephone,setMobilephoone] = useState("");
    const[loading, setLoading] = useState(false);
    const[errorMessage,setMessage] = useState("")

    const HandleRegister = async () =>{
        setLoading(true);
        setErrorMessage("");
    

    const(data,error) = await supabase.auth.singUp({
        email,password
    });

    if (error){
        setErrorMessage(error.messages);
        setLoading(false);
        return;
    }
    


    //Inser 
    const{error: InsertError} = await supabase.from("users").insert{(
        {
            email: email,
            password: password,
            fullname: fullname,
            mobile_phone: mobilephone
        }
    )}

    setLoading(false);
    if(InsertError){
        setErrorMessage(InsertError.messages);

    }else{
        alert("user has been create succesfuly")
        onClose();
    }

    return(

        <View>
             <Text>singn up </Text>
             <TouchableOpacity onPress={onClose}/> 
                <Text>Back to login</Text>
        </View>
    );
}