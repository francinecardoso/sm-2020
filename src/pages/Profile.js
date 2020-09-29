import React from 'react'
import { View, Text } from 'react-native'

export function Profile(props) {

    const {imc} = props.route.params;
    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>IMC: {imc.toFixed(2)}</Text>
        </View>
    )
}
