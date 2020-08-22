import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import { StyleSheet, Dimensions, Text, View, ScrollView, Alert, Image } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import DraggableFlatList from "react-native-draggable-flatlist";
import { TouchableOpacity } from 'react-native-gesture-handler';

const fullWidth = Dimensions.get('window').width
export default function App() {

  const [menuItems, setMenuItems ] = useState([
    {
      title: "Teste",
      onPress: () => Alert.alert("Menu 1")
    },
    {
      title: "Teste 2",
      onPress: () => Alert.alert("Menu 2")
    },
    {
      title: "Teste 3",
      onPress: () => Alert.alert("Menu 3")
    },
    {
      title: "Teste 4",
      onPress: () => Alert.alert("Menu 4")
    },
    
  ])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        
      <Image 
        source={{uri: 'https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-0.png'}} 
        style={{width: 122.5, height: 72.5, marginVertical: 20}} />
      <View style={styles.whiteBox}> 
        <Text style={{textAlign: 'center'}}>
          {`Open up App.jsto start\nworking on your app!`}
        </Text>
      </View>
      
    
        <DraggableFlatList
          horizontal={true}
          data={menuItems}
          renderItem={({item, index, drag, isActive}) => { 
            return(
              <TouchableOpacity style={styles.button} onLongPress={drag}>
                <Text><AntDesign name="creditcard" size={24} color="white" /></Text>
                <Text style={styles.buttonText}>
                  { item.title } 
                </Text>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => `draggable-item-${item.title}`}
          onDragEnd={({ data }) => setMenuItems(data)}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#8A14BE',
    paddingTop: 45,
  },
  whiteBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400, 
    width: fullWidth - 80, 
    marginBottom: 50, 
    backgroundColor: '#fff'
  },
  button: {
    justifyContent: 'space-between',
    width: 120,
    height: 120,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginHorizontal:5,
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
  },

});
