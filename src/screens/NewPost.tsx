import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Header from '../components/Header'
import User from '../components/User'
import { MaterialIcons } from '@expo/vector-icons'
import Button from '../components/Button'

const headerProps = {
  source: 'https://images.unsplash.com/photo-1555786750-7c3c2b9a6b0e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

const userProps = {
  source: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  username: 'Anderson Godoy',
  userSlug: '@AndersonGodoy'
}

export default function NewPost() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header source={headerProps.source} />
        <User username={userProps.username} source={userProps.source} userSlug={userProps.userSlug} />

        <View style={{ marginHorizontal: 8 }}>
          <Text style={styles.label}>Título</Text>

          <TextInput placeholder='Insira o título aqui...' style={styles.textInput} />
        </View>

        <View style={{ marginTop: 32, marginHorizontal: 8 }}>
          <Text style={styles.label}>Imagem</Text>

          <View style={styles.imageInput}>
            <MaterialIcons name='file-upload' size={22} color={'#484646'} style={{ marginRight: 8 }} />
            <Text style={styles.label}>Adicionar imagem</Text>
          </View>
        </View>


        <View style={{ flexDirection: 'row', gap: 8 }}>
          <View style={{ flex: 1 }}>
            <Button text='Cancelar' />
          </View>

          <View style={{ flex: 1 }}>
            <Button text='Enviar' />
          </View>
        </View>

      </ScrollView>

      <StatusBar style='light' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#484646',
    marginBottom: 4
  },
  textInput: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#484646',
    paddingHorizontal: 4
  },
  imageInput: {
    backgroundColor: '#c1c1c1',
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderRadius: 4
  }
})