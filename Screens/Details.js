import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import database from '@react-native-firebase/database';
import CSButton from '../Components/CSButton';
function Details({navigation, route}) {
  console.log(route.params);
  let data = route.params;
  return (
    <>
      <View style={{flex: 1, width: null, height: null}}>
        <ImageBackground
          source={{
            uri: 'https://i.pinimg.com/564x/0a/a8/bf/0aa8bfa73e2f93d3816b75bbd1b4a95a.jpg',
          }}
          style={{width: '100%', height: '100%', flex: 1}}>
          <View>
            <View style={{padding: 20, marginTop: 50}}>
              <Image
                source={require('../Images/p2.png')}
                style={{
                  width: 260,
                  height: 150,
                  resizeMode: 'contain',
                  marginLeft: 21,
                }}
              />
            </View>
            <ScrollView style={{height: '85%'}}>
              <View
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  padding: 26,
                  borderRadius: 25,
                  marginBottom: 11,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    borderBottomWidth: 2,
                    borderBottomColor: '#ffffff',
                  }}>
                  {data.deal}
                </Text>
                <Text style={{fontSize: 18}}>flavour:{data.flavour}</Text>
                <Text
                  style={{
                    fontSize: 18,
                  }}>
                  {data.desc}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 20, flex: 3}}>Rs:{data.price}</Text>
                  <Text style={{fontSize: 20}}>
                    For {data.servings} peoples
                  </Text>
                </View>
              </View>
              <Text>Payment method:Cash on Delivery</Text>
                <View style={{paddingHorizontal: 20}}>
                  <CSButton
                    label={'Place Order'}
                    loader={false}
                      onPress={()=>{navigation.navigate('Further')}}
                    color={'black'}
                    bgcolor={'white'}
                  />
                </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

export default Details;
