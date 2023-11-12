import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default ({title, onPress}) => {

    return(
        <>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    btn:{
        padding:4,
        marginLeft:20,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        borderWidth:1,
        borderColor:"#fff"
    },
    title:{
        color:"#fff"
    }
})