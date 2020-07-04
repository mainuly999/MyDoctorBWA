import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Header, Button, Link, Gap } from '../../components';
import { ILPhotoNull, IconTambah } from '../../assets';
import { colors, fonts } from '../../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header text="Upload Photo" onPress={()=> navigation.goBack()}/>
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILPhotoNull} style={styles.avatar}/>
            <IconTambah style={styles.addPhoto}/>
          </View>
          <Gap tinggi={26}/>
          <Text style={styles.name}>Nama</Text>
          <Text style={styles.pekerjaan}>Pekerjaan</Text>
        </View>
        <View>
          <Button tulisan="Upload and Continue"/>
          <Gap tinggi={30}/>
          <Link title="Skip for this" align="center" size={16}/>
        </View>
      </View>
    </View>
  )
}

export default UploadPhoto;

const styles = StyleSheet.create({
  page:{
    backgroundColor:colors.white,
    flex: 1,
  },
  avatar:{
    width: 110,
    height: 110,
  },
  avatarWrapper:{
    width:130,
    height:130,
    borderWidth: 1,
    borderColor:colors.border,
    borderRadius: 130/2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto:{
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name:{
    fontSize:24,
    color: colors.text.default,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  pekerjaan:{
    fontSize: 18,
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    marginTop:4,
  },
  content:{
    padding: '10%',
    paddingBottom: '15%',
    marginTop:0,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile:{
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  }
})
