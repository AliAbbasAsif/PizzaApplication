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
import {useDispatch} from 'react-redux';
import { add } from '../Store/cartSlice';

function Home({navigation,route}) {
  // console.log('uid',route.params);
  // let dat = route.params;
  const dispatch = useDispatch();
  const [data, setdata] = useState();
  console.log('13', data);
  let [loader, setloader] = useState(false);
  let getdata = () => {
    setloader(true);
    database()
      .ref('Menu/')
      .on('value', res => {
        setdata(Object.values(res.val()));
        setloader(false);
        console.log(res);
      });
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <View style={{flex: 1, width: null, height: null}}>
        <ImageBackground
          source={{
            uri: 'https://i.pinimg.com/564x/5a/36/30/5a36306e5da8e7716d955af3859a1481.jpg',
          }}
          style={{width: '100%', height: '100%', flex: 1}}>
          <View
            style={{
              marginTop: 220,
            }}>
            <ScrollView
              style={{height: '85%'}}
              showsVerticalScrollIndicator={false}>
              <View>
                {data && data.length > 0 ? (
                  <View style={{padding: 13}}>
                    {data.map((item, index) => (
                      <View
                        key={index}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          padding: 26,
                          borderRadius: 25,
                          marginBottom: 11,
                        }}>
                        <View>
                          <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 25, flex: 3}}>
                              {item.deal}
                            </Text>
                          </View>
                          <Image
                            source={require('../Images/p2.png')}
                            style={{
                              width: 250,
                              height: 120,
                              resizeMode: 'contain',
                            }}
                          />
                          <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 20, flex: 3}}>
                              {item.flavour}
                            </Text>
                            <Text style={{fontSize: 20}}>Rs:{item.price}</Text>
                          </View>
                          <Text style={{fontSize: 16}}>
                            Servings For {item.servings} persons{' '}
                          </Text>
                          <Text>{item.desc}</Text>

                          <View>
                            <View style={{paddingTop: 8}}>
                              <CSButton
                                label={'Add to Cart'}
                                loader={false}
                                fs={16}
                                fw={'600'}
                                color={'white'}
                                bgcolor={'red'}
                                onPress={() => dispatch(add(item))}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                    ))}
                  </View>
                ) : (
                  <View>
                    <Text>Wait plz Wait</Text>
                    <ActivityIndicator size={80} color="white" />
                  </View>
                )}
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

export default Home;
