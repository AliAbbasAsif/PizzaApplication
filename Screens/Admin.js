import React, {useState} from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import database from '@react-native-firebase/database';
import CSButton from '../Components/CSButton';
import CSTextField from '../Components/CSTextField';
function Admin() {
  const [model, setModel] = useState({});
  let [loader, setloader] = useState(false);
  let sendData = () => {
    setloader(true);
    console.log(model);
    const reference = database().ref('Menu/');
    const newref = reference.push();
    newref.set(model)
      .then(res => {
        console.log(res);
        setloader(false);
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
            uri: 'https://i.pinimg.com/564x/0a/a8/bf/0aa8bfa73e2f93d3816b75bbd1b4a95a.jpg',
          }}
          style={{width: '100%', height: '100%', flex: 1}}>
          <View>
            <ScrollView>
              <View>
                <View style={{marginTop: 55}}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '800',
                      fontSize: 50,
                      textAlign: 'center',
                    }}>
                    Add Menu.
                  </Text>
                </View>

                <View
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    marginTop: 40,
                  }}>
                  <CSTextField
                    placeholder="Deal Name"
                    placeholderTextColor="white"
                    onChangeText={e => setModel({...model, deal: e})}
                  />
                </View>
                <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
                  <CSTextField
                    placeholder="Flavour"
                    placeholderTextColor="white"
                    onChangeText={e => setModel({...model, flavour: e})}
                  />
                </View>
                <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
                  <CSTextField
                    placeholder="Description"
                    placeholderTextColor="white"
                    onChangeText={e => setModel({...model, desc: e})}
                  />
                </View>
                <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
                  <CSTextField
                    placeholder="Serving size"
                    placeholderTextColor="white"
                    onChangeText={e => setModel({...model, servings: e})}
                  />
                </View>
                <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
                  <CSTextField
                    placeholder="Price"
                    placeholderTextColor="white"
                    onChangeText={e => setModel({...model, price: e})}
                  />
                </View>
                <View style={{paddingHorizontal: 20, paddingTop: 16}}>
                  <CSButton
                    label={'SendData'}
                    loader={loader}
                    color={'black'}
                    bgcolor={'white'}
                    onPress={sendData}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

export default Admin;
