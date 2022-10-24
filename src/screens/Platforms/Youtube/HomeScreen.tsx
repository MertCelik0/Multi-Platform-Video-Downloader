import * as React from 'react'
import { View, StyleSheet, Dimensions, Text, Pressable } from 'react-native'
import { TextInput } from 'react-native-paper';

export default function HomeScreen() {
    const [ytLink, setYtLink] = React.useState("");

    const pressedButton = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <TextInput
                 label="Youtube Video Link"
                 value={ytLink}
                 style={styles.textInput}
                 onChangeText={link => setYtLink(link)}
                />
                <View style={styles.paddingView}></View>
                <Pressable style={styles.button} onPress={pressedButton}>
                    <Text style={styles.buttonText}>Convert Video</Text>
                </Pressable>
                <View style={styles.hrLine}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDE7E3'
    },
    mainView: {
        alignItems: 'center',
        padding: 20,
    },
    textInput: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width - 200,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 20,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    paddingView: {
        padding: 10
    },
    hrLine: {
        backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'
    },
});