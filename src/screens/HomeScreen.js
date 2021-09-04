import React, { useEffect, useState } from 'react';
import { ScrollView,StyleSheet, View} from 'react-native';
import {Text,Tooltip} from 'react-native-elements';

import CoinItem from '../components/coinItem';

const HomeScreen = () => {

    const [coins, setCoins] = useState([]);

    const loadData = async () => {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        const data = await res.json();
        setCoins(data)
    }

    useEffect(() => {
        loadData();
    })

    return (

        <ScrollView style= {styles.container}>
            <View style = {styles.textContainer}>
                <Text  style = {styles.tarifa}>Tarifas de cambio</Text>
                <Text style={styles.timeExchange}>1D</Text>
            </View>

            {
                coins.map((coin, index) => {
                    return (<CoinItem key={index} coin={coin} index={index} />)
                })
            }

            
        </ScrollView>

        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff'
    },
    textContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tarifa:{
        marginLeft: 30,
        marginTop: 15,
        fontSize: 15
    },
    timeExchange:{
        color: '#fff',
        textAlign: 'center',
        width: 45,
        backgroundColor: '#A0A0A0',
        marginRight: 60,
        marginTop: 15,
        fontSize: 15,
        borderRadius: 25
    }

})

export default HomeScreen
