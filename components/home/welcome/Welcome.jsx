import { useState } from 'react' 
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons,SIZES } from '../../../constants'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList 
} from 'react-native'




const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      {/* The name and the welocome text: */}
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Ali</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      {/*  search bar: */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
          style={styles.searchInput}
          />
        </View>
      </View>

    </View>
  )
}

export default Welcome