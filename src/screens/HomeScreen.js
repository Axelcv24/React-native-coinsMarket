import React, { useEffect, useState } from 'react';
import {StyleSheet,FlatList } from 'react-native';


import CoinItem from '../components/coinItem';

const HomeScreen = () => {

    const [coins, setCoins] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(() => {
        try {

            fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`)
                .then(results => results.json())
                .then(data => {
                    setCoins(coins.concat(data))
                    
                })

            return () => {

            }

        } catch (error) {
            console.log(error)
        }



    })

    const handleLoadMore = () => {
        setPage(page + 1);
    }


    return (
        <FlatList
            data={coins}
            renderItem={({ item }) => {
                return <CoinItem coin={item} />
            }}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            onEndReached={handleLoadMore}

        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    }


})

export default HomeScreen
