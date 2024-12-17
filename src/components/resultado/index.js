import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import React from "react";

export default function Resultado(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.imgLogo}
        source={require("../../assets/img/gas.png")}
      />
      <Text style={styles.resultado}> Compensa usar {props.resultado}</Text>
      <View style={styles.areaTexto}>
        <Text style={styles.titulo}>Com os preços:</Text>
        <Text style={styles.texto}>Etanol: R$ {props.etanol.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</Text>
        <Text style={styles.texto}>Gasolina: R$ {props.gasolina}</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={props.fecharModal}>
        <Text style={styles.btnText}>Calcular novamente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00224D",
    alignItems: "center",
    justifyContent: "center",
  },
  imgLogo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#EEEEEE",
  },
  resultado: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#FFE31A",
  },
  titulo: {
    textAlign: "center",
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
    color: "#EEEEEE",
  },
  texto: {
    textAlign: "center",
    marginBottom: 5,
    fontSize: 20,
    color: "#EEEEEE",
  },
  btn: {
    borderWidth: 1,
    borderColor: "#FF204E",
    width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  btnText: {
    color: "#FF204E",
    fontSize: 20,
    fontWeight: "bold",
  },
  
});
