import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements';

const coinItem = ({ coin, index }) => {
    return (
        <ListItem key={index}>
            <Avatar source={{ uri: coin.image }} />
            <View style = {styles.container}>
                <ListItem.Content >
                    <ListItem.Title>{coin.name}</ListItem.Title>
                    <ListItem.Subtitle>{coin.symbol.toUpperCase()}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content style = {styles.coinPrice}>
                    <ListItem.Title>${coin.current_price}</ListItem.Title>
                    <ListItem.Subtitle style={coin.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown}>{coin.price_change_percentage_24h}</ListItem.Subtitle>
                </ListItem.Content>
            </View>

        </ListItem>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },  
    priceUp: {
        color: '#00B5B9'
    },
    priceDown: {
        color: '#fc4422'
    },

    coinPrice:{
        marginLeft: 60,
        textAlign: 'right'
    }
})

export default coinItem
