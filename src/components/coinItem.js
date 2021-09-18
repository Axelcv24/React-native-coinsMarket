import React from 'react'
<<<<<<< HEAD
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
=======
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
>>>>>>> 386551eae497b13df7fb040d1c2407678281a5cd
    )
}

const styles = StyleSheet.create({
<<<<<<< HEAD
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
=======
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },  
>>>>>>> 386551eae497b13df7fb040d1c2407678281a5cd
    priceUp: {
        color: '#00B5B9'
    },
    priceDown: {
        color: '#fc4422'
<<<<<<< HEAD
    }

=======
    },

    coinPrice:{
        marginLeft: 60,
        textAlign: 'right'
    }
>>>>>>> 386551eae497b13df7fb040d1c2407678281a5cd
})

export default coinItem
