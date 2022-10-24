import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Instagram Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDE7E3'
    },
});