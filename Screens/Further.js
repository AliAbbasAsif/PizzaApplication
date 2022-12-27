import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';

function Further() {
  const [lang, setlang] = useState('-345678');
  const [long, setlong] = useState('2345678');
  console.log(lang, long);
  Geolocation.getCurrentPosition(info => {
    console.log(info);
    setlong(info.coords.longitude);
    setlang(info.coords.latitude);
  });
  return (
    <>
      <View>
        {/* <Icon name="rocket" size={30} color="#900" /> */}
        <View>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={{
              height: 500,
              width: 400,
            }}
            region={{
              latitude: lang,
              longitude: long,
              latitudeDelta: 0.009,
              longitudeDelta: 0.0009,
            }}>
            <Marker
              coordinate={{latitude: lang, longitude: long}}
              title="test description"
              pinColor='blue'
              description="test description"></Marker>
          </MapView>
        </View>
      </View>
    </>
  );
}

export default Further;