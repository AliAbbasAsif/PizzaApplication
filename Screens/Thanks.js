import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CSButton from '../Components/CSButton';
function Thanks({navigation}) {
  return (
    <>
      <View>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#222',
            padding: 25,
          }}>
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: 10,
              borderRadius: 20,
              position: 'relative',
              top: 210,
            }}>
            <Text
              style={{
                fontSize: 28,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Order Sent Successfully
            </Text>
            <Icon
              name="done-all"
              size={80}
              color="green"
              style={{textAlign: 'center'}}
            />
            <Text style={{color: 'white', fontSize: 15}}>
              Your order have been sent please wait for verification call{' '}
            </Text>
            <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
              Your order id is: 6t38q7iutg3f98rwoiur0293
            </Text>
            <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
              Thanks!!
            </Text>
        <View style={{padding:11}}>
          <CSButton
            label={'Go Back To Home'}
            loader={false}
            color={'white'}
            bgcolor={'green'}
            fs={15}
            fw={'800'}
            onPress={() => navigation.navigate('TabRoute')}
          />
        </View>
          </View>
        </View>

      </View>
    </>
  );
}

export default Thanks;
