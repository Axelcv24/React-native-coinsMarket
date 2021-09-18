import React from 'react'
import { StyleSheet, View,Text } from 'react-native'
import { Avatar } from 'react-native-elements';

const coinItem = ({ coin }) => {
    return (
        <View style={styles.containerItem}>
            <View style={styles.coinName}>
                <Avatar source={{uri: coin.image}}/>
                <View style={styles.containerName}>
                    <Text style={styles.text}>{coin.name}</Text>
                    <Text style={styles.textSymbol}>{coin.symbol}</Text>
                </View>
            </View>
            <View style={styles.coinPrice}>
                <Text style={styles.textPrice}>${coin.current_price}</Text>
                <Text style={[styles.pricePercentage, coin.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown]}>{coin.price_change_percentage_24h}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: 'white',
        paddingTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    coinName: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20
    },
    containerName: {
        marginLeft: 10
    },
    text: {
        color: 'black'
    },
    image: {
        width: 30,
        height: 30
    },
  
    textSymbol: {
        color: '#434343',
        textTransform: 'uppercase'
    },
    coinPrice:{
        marginRight: 20,
        marginTop: 10
       
    },
    textPrice: {
        color: 'black',
        textAlign: 'right'
    },

    pricePercentage: {
        textAlign: 'right'
    },
    priceUp: {
        color: '#00B5B9'
    },
    priceDown: {
        color: '#fc4422'
    }

})

export default coinItem
