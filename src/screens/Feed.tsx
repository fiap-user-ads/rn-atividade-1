import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Header from '../components/Header'
import { Post } from '../components/Post'

const headerProps = {
  source: 'https://images.unsplash.com/photo-1555786750-7c3c2b9a6b0e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

export default function Feed() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header source={headerProps.source} />

        <View style={{ marginVertical: 24, flexDirection: 'row', gap: 16, alignItems: 'center', paddingHorizontal: 8 }}>
          <View>
            <View style={styles.profilePhoto} />
          </View>

          <View>
            <Text style={styles.profileName}>Username</Text>
            <Text>@dev</Text>
          </View>
        </View>

        <View>
          <Post username='Username' text='Descrição do post' />
        </View>
      </ScrollView>

      <StatusBar style='light' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  profilePhoto: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#ccc',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#484646',
  }
})