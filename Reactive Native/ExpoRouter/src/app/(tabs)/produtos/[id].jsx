import { Link, useLocalSearchParams } from "expo-router"
import { TouchableOpacity } from "react-native"
import { StyleSheet, View } from "react-native/types_generated/index"

export default function DetalheProduto(){
    const {id} = useLocalSearchParams()
    return (
        <View>
            <Text> Produto {id}</Text>

            <TouchableOpacity onPress={() =>{
                router.back()
            }}>
                <Text style={meuCSS.link}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const meuCSS = StyleSheet.create({
    linl: {
        color: "blue",
        fontSize: 16,
        marginVertical: 15
    }
})