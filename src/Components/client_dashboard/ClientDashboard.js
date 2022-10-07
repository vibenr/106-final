import * as React from 'react'
import Header from '../Header/Header'
import Unverified from '../unverified/Unverified'
import AddLand from '../AddLand/AddLand'
import MyLand from '../MyLand/MyLand'

export default function ClientDashboard() {
    return (
        <>
            <Header />
            <Unverified />
            <AddLand />
            <MyLand/>
        </>
    )
}