import React, { useState } from 'react'
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import CSButton from '../Components/CSButton';
import CSTextField from '../Components/CSTextField';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import CSDropDown from '../Components/CSDropDown'

function Signup({navigation}) {
    const [model, setModel] = useState({});
    let [loader, setloader] = useState(false);
    let signupuser = () => {
        model.Category='Customer'
        setloader(true);
        console.log(model);
        auth()
          .createUserWithEmailAndPassword(model.email, model.password)
          .then(res => {
            console.log(res);
            console.log(res.user.uid);
            database()
              .ref(`Users/${res.user.uid}`)
              .set(model)
              .then(() => {
                navigation.navigate('Home', res.user.uid);
                setloader(false);
              })
              .catch(dbError => {
                console.log(dbError);
                setloader(false);
              });
          })
          .catch(err => {
            // seterror(err)
            console.log(err);
            setloader(false);
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
      
      <View>
        <ScrollView>
          <View style={{padding: 10, marginLeft: 18, marginTop: 90,marginBottom:40}}>
            <Text
              style={{
                color: 'white',
                fontWeight: '900',
                fontSize: 45,
                textAlign: 'center',
              }}>
              Sign Up
            </Text>
          </View>

          <View>
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              <CSTextField
                placeholder="UserName"
                placeholderTextColor="white"
                onChangeText={e => setModel({...model, userName: e})}
              />
            </View>
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              <CSTextField
                placeholder="Phone Number"
                placeholderTextColor="white"
                onChangeText={e => setModel({...model, phonenumber: e})}
              />
            </View>
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              <CSTextField
                placeholder="Email"
                placeholderTextColor="white"
                onChangeText={e => setModel({...model, email: e})}
              />
            </View>
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              <CSTextField
                placeholder="Password"
                placeholderTextColor="white"
                onChangeText={e => setModel({...model, password: e})}
              />
            </View>
          </View>
        </ScrollView>
        <View>
          <View style={{paddingHorizontal: 20, paddingTop: 16}}>
            <CSButton
              label={'SignUp'}
              loader={loader}
              color={'black'}
              bgcolor={'white'}
              onPress={signupuser}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row',marginTop:16}}>
              <Text style={{color: 'white', fontSize: 16}}>
                Already have an account
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '900',
                  paddingLeft: 8,
                }}
                onPress={() => navigation.navigate('Login')}>
                Login
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

export default Signup
