import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView 
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            
          <View style={styles.body}>

            <View>
              <Text style={styles.titulo} >Fábrica de Biscoito de Povilho</Text>
            </View>

            <View style={styles.margin}></View>
            <View>
            <Image style={styles.imagem} source={require("./src/components/cadeado.png")} />
            </View>
            <View style={styles.caixaLogin}>
              <TextInput style={styles.textLogin} >Email</TextInput>
            </View>

            <View style={styles.caixaLogin}>
              <TextInput style={styles.textLogin} 
              secureTextEntry >Senha</TextInput>
            </View>

            <View style={styles.linhaTextoEmbaixo}>
              <Text style={styles.textoEmbaixo} >Não possui uma conta? Cadastre-se </Text>
              <TouchableOpacity><Text style={styles.textoSublinhado} >aqui</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.textoSublinhado2} >Esqueci minha senha</Text></TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.buttonContainer} >
              <Text style={styles.buttonText}>FAZER LOGIN</Text>
            </TouchableOpacity>

            
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },

  body: {
    backgroundColor: "#1E90FF",
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    padding: 10,
  },

  caixaLogin: {   
    backgroundColor: "#DCDCDC",
    borderRadius: 20,
    width: 350,
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 10,
  },

  textLogin: {
    color: "#696969",
    fontSize: 17,
    paddingHorizontal: 10,
  },

  buttonContainer: {
    backgroundColor: "black",
    marginBottom: 10, 
    paddingVertical: 20,
    borderRadius: 20,
    marginTop: 100,
  },

  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 17,
  },

  margin: {
    marginTop: 59,
  },

  linhaTextoEmbaixo: {
    display: "flex",
    flexDirection: "row",
  },

  textoEmbaixo: {
    color: "#FFFFFF",
    fontSize: 11,
    marginLeft: 20,
  },
  textoSublinhado: {
    color:"blue",
    fontSize: 11,
    textDecorationLine: "underline",
  },
  textoSublinhado2: {
    color:"blue",
    fontSize: 11,
    marginRight: 20,
    marginLeft: 35,
    textDecorationLine: "underline",
    },

  imagem: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 30,
  },

});

export default App;