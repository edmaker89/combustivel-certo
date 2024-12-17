import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, Modal, Alert } from 'react-native';
import Resultado from './components/resultado';
import { useState } from 'react';
import { calcularCombustivelCerto } from './functions';

export default function App() {

  const [resultado, setResultado] = useState('');
  const [etanol, setEtanol] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const fecharModal = () => {
    setModalVisible(false);
    setEtanol('');
    setGasolina('');
  }

  const calcularCombustivel = () => {
    if (etanol == '' || gasolina == '') {
      Alert.alert("Atenção!",'Preencha os campos');
      return;
    }
    setResultado(calcularCombustivelCerto(gasolina, etanol));
    setModalVisible(true);
  }

  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.imgLogo} source={require('./assets/img/logo.png')} />
      <Text style={styles.titulo}> Qual a melhor opção?</Text>
      <View style={styles.areaInput}>
        <Text style={styles.label}>Álcool (preço por litro):</Text>
        <TextInput style={styles.input} placeholder="Preço do litro" onChangeText={(text) => setEtanol(text)}
          keyboardType='numeric' value={etanol}
          />
      </View>
      <View style={styles.areaInput}>
        <Text style={styles.label}>Gasolina (preco por litro):</Text>
        <TextInput style={styles.input} placeholder="Preço do litro" onChangeText={(text) => setGasolina(text)}
         keyboardType='numeric' value={gasolina}
          />
      </View>
      <TouchableOpacity style={styles.btnPrincipal} onPress={() => calcularCombustivel()}>
        <Text style={styles.txtBtnPrincipal}>Calcular</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">
        <Resultado resultado={resultado} etanol={etanol} gasolina={gasolina} fecharModal={fecharModal}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00224D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgLogo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 80,
    color: '#EEEEEE',
  },
  areaInput: {
    marginBottom: 20,
    width: '80%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#EEEEEE',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#EEEEEE',
    fontSize: 20,
  },
  btnPrincipal: {
    width: '80%',
    height: 50,
    backgroundColor: '#FF204E',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  txtBtnPrincipal: {
    fontSize: 20, 
    color: '#EEEEEE',
    fontWeight: 'bold',
  }
});
