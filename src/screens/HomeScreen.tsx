import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { FlatGrid } from 'react-native-super-grid';

const items = [
    { name: 'Facebook', image: require('../assets/images/Facebook.png')},
    { name: 'Instagram', image: require('../assets/images/Instagram.png')},
    { name: 'Youtube', image: require('../assets/images/Youtube.png')},
    { name: 'TikTok', image: require('../assets/images/Tiktok.png')},
    { name: 'WhatsApp', image: require('../assets/images/Whatsapp.png')},
]

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Platforms />
        </View> 
    )
}

function Platforms() {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>Select Platforms</Text>
            <CheckModules />
        </View>
    );
}

function CheckModules() {
   return (
         <ListOfPlatforms />
   );
}

function ListOfPlatforms() {
    const navigation = useNavigation();
    const listItemClick = (platformName:never) => {
        navigation.navigate(platformName)
    }

    return ( 
        <FlatGrid
            itemDimension={130}
            data={items}
            style={styles.gridView}
            spacing={10}
            renderItem={({ item }) => (
            <TouchableOpacity onPress={() => listItemClick(item.name as never)}>
                <View style={[styles.itemContainer]}>
                    <Image style={styles.itemImage} source={item.image as ImageSourcePropType}/>
                    <Text style={styles.itemName}>{item.name}</Text>
                </View>
            </TouchableOpacity>
            )}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDE7E3'
    },
    textContainer: {
        flex: 1,
        padding: 20
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    gridView: {
        marginTop: 10,
        flex: 1,
      },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        height: 150,
    },
    itemName: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
        fontWeight: '600',
    },
    itemImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});