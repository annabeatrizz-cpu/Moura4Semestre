import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
    const router = useRouter ()
    return(
   
        <View style = {styles.container}>

        <Text style= {styles.title}> Bem Vindo - Home </Text>

        <TouchableOpacity style={styles.button}
        onPress={() => {
            router.push("/produtos")
        }}>
            <Text style={styles.buttonText}>Produtos</Text>
        </TouchableOpacity>

          <Link href="/" style={styles.link}> Pagina de Perfil </Link>
         
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  link: {
    marginVertical: 15,
    color: "blue",
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
