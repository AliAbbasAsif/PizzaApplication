import React, { useState } from 'react'
import {ImageBackground, Text, View} from 'react-native';
import CSButton from '../Components/CSButton';
import CSTextField from '../Components/CSTextField';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

function Login({navigation}) {
    const [model, setModel] = useState({});
    let [loader, setloader] = useState(false);
    let loginUser = () => {
      console.log(model);
      setloader(true);
      auth()
        .signInWithEmailAndPassword(model.email, model.password)
        .then(success => {
          database()
            .ref(`Users/${success.user.uid}`)
            .once('value')
            .then(res => {
              if (res.val().Category === 'Customer') {
                navigation.navigate('Home', res);
              }
            else if (res.val().Category == 'Admin') {
                navigation.navigate('Home');
              }
              setloader(false);
            })
            .catch(er => {
              setloader(false);
              console.log(er);
            });
          console.log('35', success);
        })
        .catch(err => {
          setloader(false);
          console.log(err);
        });
    };
  return (
    <>
  <View style={{flex: 1, width: null, height: null}}>
        <ImageBackground
          source={{
            uri: 'https://i.pinimg.com/564x/54/0b/35/540b350d09d2957bcf5cadda94a74008.jpg',
          }}
          style={{width: '100%', height: '100%', flex: 1}}>
      
      <View style={{width: '100%', height: '100%'}}>
        <View
          style={{position: 'relative', top: 100, padding: 10, marginLeft: 10}}>
          <Text
            style={{
              color: 'white',
              fontWeight: '900',
              fontSize: 45,
              textAlign: 'center',
            }}>
            Login
          </Text>
        </View>

        <View style={{position: 'relative', top: 180}}>
          <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
            <CSTextField
              placeholder="Email"
              placeholderTextColor="white"
              onChangeText={e => setModel({...model, email: e})}
            />
          </View>
          <View style={{paddingHorizontal: 20}}>
            <CSTextField
              placeholder="Password"
              placeholderTextColor="white"
              onChangeText={e => setModel({...model, password: e})}
            />
          </View>
          <View style={{padding: 13, position: 'relative', left: 15}}>
            <Text style={{color: 'white', fontWeight: '600'}}>
              Forgot Password?
            </Text>
          </View>
          <View style={{paddingHorizontal: 20}}>
            <CSButton
              label={'Login'}
              loader={loader}
              onPress={loginUser}
              color={'black'}
              bgcolor={'white'}
            />
          </View>
          <View style={{alignItems: 'center', position: 'relative', top: 100}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'white', fontSize: 16}}>
                Don't have an account
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '900',
                  paddingLeft: 8,
                }}
                onPress={() => navigation.navigate('Signup')}>
                Sign Up
              </Text>
            </View>
          </View>
        </View>
      </View>
       
        </ImageBackground>
      </View>
    </>
  )
}

export default Login
