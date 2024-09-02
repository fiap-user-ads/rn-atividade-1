import { StyleSheet, Text, View } from "react-native"
import { Feather } from '@expo/vector-icons'

interface PostProps {
  username: string
  text: string
}

export function Post({ text, username }: PostProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <View style={styles.profilePhoto} />
        </View>

        <Text style={styles.profileName}>{username}</Text>
      </View>

      <View style={styles.image} />

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Feather name='heart' size={22} color={'#484646'} style={{ marginRight: 8 }} />
          <Text>8</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Feather name='message-circle' size={22} color={'#484646'} style={{ marginRight: 8 }} />
          <Text>8</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Feather name='link' size={22} color={'#484646'} style={{ marginRight: 8 }} />
          <Text>8</Text>
        </View>
      </View>

      <Text style={{ marginTop: 8, fontSize: 16 }}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 16,
    borderColor: '#FBDF4B',
    paddingHorizontal: 16
  },
  header: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    marginBottom: 8
  },
  profilePhoto: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ccc',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#484646',
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#ccc',
    borderRadius: 16,
    marginBottom: 8
  }
})