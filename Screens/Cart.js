import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import database from '@react-native-firebase/database';
import CSButton from '../Components/CSButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {remove, removeAll} from '../Store/cartSlice';
function Cart({navigation}) {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cartItems
    .map(x => parseInt(x.price))
    .reduce((partialSum, a) => partialSum + a, 0);

  console.log('totalprice', totalPrice);
  const [model, setModel] = useState({});
  
  let sendData = () => {
    model.items = cartItems;
    model.total = totalPrice;
    model.totalItems = cartItems.length;
    navigation.navigate('Info',model)
  };
  return (
    <>
      <View style={{flex: 1, width: null, height: null}}>
        <ImageBackground
          source={{
            uri: 'https://i.pinimg.com/564x/0a/a8/bf/0aa8bfa73e2f93d3816b75bbd1b4a95a.jpg',
          }}
          style={{width: '100%', height: '100%', flex: 1}}>
          <View style={{height: '100%', width: '100%'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                {cartItems && cartItems.length > 0 ? (
                  cartItems.map((x, i) => (
                    <View key={i}>
                      <View
                        key={x.id}
                        style={{
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          marginVertical: 10,
                          marginHorizontal: 12,
                          borderRadius: 20,
                          padding: 5,
                          justifyContent: 'space-around',
                          alignItems: 'center',
                        }}>
                        <View style={{flex: 1}}>
                          <Image
                            source={require('../Images/p2.png')}
                            resizeMode="contain"
                            style={{
                              height: 70,
                              width: 90,
                              margin: 10,
                              borderRadius: 20,
                            }}
                          />
                        </View>
                        <View
                          style={{
                            flex: 2,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            flexWrap: 'wrap',
                            marginLeft: 5,
                            padding: 10,
                          }}>
                          <Text
                            style={{
                              fontSize: 16,
                              color: '#fff',
                              textAlign: 'left',
                              fontWeight: '800',
                            }}>
                            {x.deal}
                          </Text>
                          <Text
                            style={{
                              fontSize: 13,
                              color: '#e6e6e6',
                              textAlign: 'left',
                              fontWeight: '800',
                            }}>
                            {x.flavour}
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              color: '#e6e6e6',
                              textAlign: 'left',
                            }}>
                            {x.desc}
                          </Text>
                          <Text
                            style={{
                              fontSize: 18,
                              color: '#ffffff',
                              textAlign: 'left',
                              fontWeight: '900',
                            }}>
                            Rs{x.price}
                          </Text>
                        </View>
                        <View>
                          <TouchableOpacity
                            onPress={() => {
                              dispatch(remove(x.id));
                            }}
                            activeOpacity={0.6}
                            style={{
                              paddingRight: 10,
                              borderRadius: 20,
                            }}>
                            <Icon name="delete" size={25} color="#D00000" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  ))
                ) : (
                  <View>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 37,
                        textAlign: 'center',
                        marginTop: 150,
                      }}>
                      Plz fill Cart
                    </Text>
                  </View>
                )}
              </View>
            </ScrollView>
            {totalPrice && totalPrice > 0 ? (
              <>
                <View
                  style={{
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    paddingHorizontal: 20,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.0,

                    elevation: 24,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      padding: 7,
                      borderRadius: 10,
                    }}
                    onPress={() => dispatch(removeAll())}>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          color: '#D00000',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}>
                        Remove All
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: '#A9A9A9',
                      fontSize: 15,
                    }}>
                    {cartItems.length} Food Item
                    {cartItems.length > 1 ? 's' : ''} |
                  </Text>
                </View>
                <View style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 17,
                      fontWeight: 'bold',
                      marginLeft: 20,
                      marginTop: 7,
                    }}>
                    Sub Total: Rs{totalPrice}
                  </Text>
                </View>
                <View style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                  <TouchableOpacity
                  onPress={sendData}
                    style={{
                      backgroundColor: 'red',
                      width: 50,
                      margin: 10,
                      marginHorizontal: 10,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                      paddingHorizontal: 15,
                      paddingVertical: 10,
                      width: 'auto',
                    }}>
                    <Icon name="logout" size={18} color="white" />
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 14,
                        marginLeft: 5,
                        fontWeight: 'bold',
                      }}>
                      Checkout
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : null}
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

export default Cart;
