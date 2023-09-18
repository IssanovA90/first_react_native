import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import logo from "./img/34.jpg";

const TextInputExample = () => {
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonPress = () => {
    const userInfo = {
      Name: name,
      Telephone: telephone,
      Email: email,
    };
    setModalVisible(true);
  };

  const closeButton = () => {
    setName('');
    setTelephone('');
    setEmail('');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Issanov Aslan</Text>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image} />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={text => setName(text)}
        value={name}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setTelephone(text)}
        value={telephone}
        placeholder="Telephone"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="E-mail"
      />
      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Вывести</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.content}>
            <Text style={styles.title}>Информация</Text>
            <Text>Имя: {name}</Text>
            <Text>Телефон: {telephone}</Text>
            <Text>Email: {email}</Text>
            <Pressable
              style={styles.closeButton}
              onPress={() => {
                closeButton()
                setModalVisible(!modalVisible)
              }}
            >
              <Text style={styles.closeButtonText}>Закрыть</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 30,
  },
  input: {
    height: 50,
    width: 300,
    margin: 10,
    color: "red",
    fontWeight: "bold",
    borderWidth: 0,
    padding: 10,
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingBottom: 3,
  },
  button: {
    backgroundColor: "green",
    width: 100,
    height: 40,
    borderRadius: 10,
    padding: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  content: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TextInputExample;
