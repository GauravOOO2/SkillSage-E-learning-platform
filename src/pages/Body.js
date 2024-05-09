import React from 'react'
import Header from '../components/Header'
import Tabs from '../components/Tabs'
import BodyDivision1 from '../components/BodyDivision1'
import BodyDivision2 from '../components/BodyDivision2'
import BodyDivision3 from '../components/BodyDivision3'
import DropDownMenu from '../components/DropDownMenu'

const Body = () => {
  return (
    <div>
        <Header />
        <Tabs />
        <BodyDivision1 />
        <BodyDivision2 />
        <BodyDivision3 />
        <DropDownMenu />
    </div>
  )
}

export default Body