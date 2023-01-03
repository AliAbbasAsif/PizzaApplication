import React, {useState} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import CSButton from '../Components/CSButton';
import CSTextField from '../Components/CSTextField';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import CSDropDown from '../Components/CSDropDown';

function Info({navigation, route}) {
  console.log('infosec', route.params);
  const [model, setModel] = useState({});
  let [loader, setloader] = useState(false);
  let sendData = () => {
    model.paymenmethod = 'Cash on delievery';
    model.order = route.params;
    setloader(true);
    console.log(model);
    const reference = database().ref('Orders/');
    const newref = reference.push();
    newref
      .set(model)
      .then(res => {
        console.log(res);
        setloader(false);
        navigation.navigate('Thanks');
      })
      .catch(dbError => {
        console.log(dbError);
        setloader(false);
      });
  };
  return (
    <>
      <View style={{flex: 1, width: null, height: null}}>
        <ImageBackground
          source={{
            uri: 'https://i.pinimg.com/564x/2a/c6/f1/2ac6f19e8331b63616aef2d3844e780d.jpg',
          }}
          style={{width: '100%', height: '100%', flex: 1}}>
          <View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  padding: 10,
                  marginLeft: 18,
                  marginTop: 50,
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '900',
                    fontSize: 45,
                    textAlign: 'center',
                  }}>
                  Checkout Info
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
                    placeholder="City"
                    placeholderTextColor="white"
                    onChangeText={e => setModel({...model, city: e})}
                  />
                </View>
                <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
                  <CSTextField
                    placeholder="Address"
                    placeholderTextColor="white"
                    onChangeText={e => setModel({...model, address: e})}
                  />
                </View>
                <View
                  style={{flexDirection: 'row', padding: 4, marginLeft: 20}}>
                  <Text style={{color: 'white', fontSize: 14}}>
                    Payment method:{' '}
                  </Text>
                  <Text
                    style={{color: 'white', fontSize: 15, fontWeight: '800'}}>
                    {' '}
                    Cash On delievery
                  </Text>
                </View>
                <View>
                  <View style={{paddingHorizontal: 20, paddingTop: 16}}>
                    <CSButton
                      label={'Continue'}
                      loader={loader}
                      color={'black'}
                      bgcolor={'white'}
                      fs={25}
                      fw={'800'}
                      onPress={sendData}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

export default Info;
