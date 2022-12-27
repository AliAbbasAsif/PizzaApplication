import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  View,
} from 'react-native';

function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 3000);
  return (
    <>
      <View style={{flex: 1, width: null, height: null}}>
        <ImageBackground
          source={{
            uri: 'https://i.pinimg.com/564x/a9/de/2e/a9de2e9999679b83b7bf32571969a6a4.jpg',
          }}
          style={{width: '100%', height: '100%', flex: 1}}>
          <View style={{width:'100%',height:'100%'}}>
            <View style={{position:'relative',top:190}}>
            <Text style={{textAlign:'center',color: 'white', fontWeight: '800', fontSize: 50}}>
              PiZZAA !!
            </Text>
            </View>
            <View style={{alignItems:'center',position:'relative',top:90}}>
              <Image
                source={require('../Images/i1.png')}
                style={{width: 220, resizeMode: 'contain'}}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                width: '100%',
                position: 'relative',
                top: 120,
              }}>
              <ActivityIndicator size={80} color="white" />
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

export default SplashScreen;
