import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Perfil() {
    return(
   
        <View style = {styles.container}>

        <Text style= {styles.title}> Bem Vindo - Perfil </Text>
         <Link href="/" style= {style.link}>
         Pagina Home</Link>
         <Link href="/produtos" style= {style.link}>
         Pagina Produtos</Link>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
