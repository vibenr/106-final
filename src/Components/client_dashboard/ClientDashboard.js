import * as React from 'react'
import Header from '../Header/Header'
import Unverified from '../unverified/Unverified'
import AddLand from '../AddLand/AddLand'
import MyLand from '../MyLand/MyLand'
import SearchLand from '../Search_land/search'
import Payment from '../Payment_page/Payment'

export default function ClientDashboard() {
    return (
        <>
            <Header />
            <Unverified />
            <AddLand />
            <MyLand />
            <SearchLand/>
            <Payment/>
        </>
    )
}