import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { IL_Logo, Bg_awal} from '../../assets';
import { Button, Gap } from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={Bg_awal} style={styles.page}>
      <View>
        <IL_Logo/>
        <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
      </View>
      <View>
        <Button tulisan="Register" onPencet={()=> navigation.navigate('Register')}/>
        <Gap tinggi={16}/>
        <Button type="secondary" tulisan="Sign in" onPencet={()=> navigation.navigate('Login')}/>
      </View>
    </ImageBackground>
  )
}

export default GetStarted;

const styles = StyleSheet.create({
  page:{padding:'10%', justifyContent: 'space-between', flex: 1,},
  title:{fontSize:28, color: 'white', marginTop: '23%', fontFamily: 'Nunito-SemiBold'},
})
