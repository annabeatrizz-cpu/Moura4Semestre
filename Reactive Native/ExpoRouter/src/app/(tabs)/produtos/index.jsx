import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Produtos() {
    const router = useRouter
    return(
   
        <View style = {styles.container}>

        <Text style= {styles.title}> Bem Vindo - Produtos </Text>

        <Link href={"/produtos/12"} >Codigo: 12 | Tenis</Link>
        <Link href={"/produtos/25"}>Codigo: 25 | Camiseta</Link>
       
         
        <View style={style.botoesBox}>
               <TouchableOpacity 
            style={styles.button}
                onPress={() => {
                    router.push("/")
                }}>
                    <Text style={styles.buttonText}>Produtos</Text>
                </TouchableOpacity>
         <Link href="/" style={styles.link}> Home </Link>
                <TouchableOpacity style={styles.button}
                onPress={() => {
                    router.back()
                }}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>


        </View>
              
          
        </View>
    )
}

const styles = StyleSheet.create({

    botoesBox: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        gap: 20
    },
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
