import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, ListItem, Icon, Divider } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import logoufrn from './images/logo-ufrn-60-anos.png';
import logoapp from './images/logo-app.png';

const list = [
  {
    title: 'NFC suportado:',
    icon: 'thumbs-up',
    color: '#1d9900'
  },
  {
    title: 'NFC habilitado (Android):',
    icon: 'thumbs-down',
    color: '#c80000'
  },
  {
    title: 'GPS habilitado:',
    icon: 'thumbs-up',
    color: '#1d9900'
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.View animation="pulse" iterationCount="infinite" easing="ease-out">
          <Image style={styles.imageApp} source={logoapp} />
        </Animatable.View>
        <Text style={styles.headerText}>LOCALIZE-SE</Text>
        <Divider style={{ backgroundColor: 'blue' }} />
      </View>

      <View style={styles.body}>
        <Image style={styles.imageUfrn} source={logoufrn} />
        <View style={styles.box}>
          
          {/* 
            https://fontawesome.com/icons
            https://react-native-training.github.io/react-native-elements/docs/getting_started.html
            https://github.com/oblador/react-native-animatable
            https://css-tricks.com/snippets/css/a-guide-to-flexbox/
          */}
          
          <Card containerStyle={{
              paddingHorizontal: 0, margin: 0, 
              borderTopStartRadius: 20, borderTopEndRadius: 20
            }}>
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  subtitle={item.subtitle}
                  rightIcon={{ name: item.icon, type: 'font-awesome', color: item.color }}
                  containerStyle={{ paddingVertical: 5 }}
                />
              ))
            }
          </Card>

          <Text style={styles.boxText}>Aguardando leitura da TAG NFC...</Text>
          
          <Animatable.View animation="rotate" iterationCount="infinite" easing="linear" duration={3000}>
            <Icon name='spinner' type='font-awesome' color='#063e5f' />
          </Animatable.View>

          <Text style={styles.boxText}>JSON</Text>
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>NAVEGAR</Text>
        </TouchableOpacity>

        <View style={styles.question}>
          <Icon name='question' type='font-awesome' color='#FFF' 
            iconStyle={{ marginRight: 10, fontSize: 20 }} />
          <Text style={styles.questionText}>
            Posicione o celular próximo a tag NFC para visualizar a rota da sua posição atual até o destino desejado.
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Grupo:</Text>
        <Text style={styles.footerText}>Daniel Olinto / Gileno Rocha / Júlio César</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#063e5f',
    alignItems: 'center',
    padding: 30
  },
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingBottom: 20
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  },
  imageApp: {
    width: 40,
    height: 40,
    marginRight: 20
  },
  body: {
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  imageUfrn: {
    width: 140,
    height: 45,
    marginBottom: 10
  },
  box: {
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  boxText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 50
  },
  button: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#def3ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20
  },
  buttonText: {
    color: '#063e5f',
    fontWeight: 'bold',
    fontSize: 16
  },
  question: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10
  },
  questionText: {
    color: '#FFF',
    fontSize: 12,
  },
  footer: {
    marginTop: 20,
  },
  footerTitle: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  footerText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center'
  }
});

export default App;
