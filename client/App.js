import React from "react";
import { NativeRouter, Route } from "react-router-native";
import { StyleSheet, View, ScrollView } from "react-native";

import HomeScreen from './app/screens/HomeScreen'
import Login from './app/screens/Login'
import SignUp from './app/screens/SignUp'
import About from './app/screens/About'
import Account from './app/screens/Account'
import Navbar from './app/components/Navbar'
import Bottom from './app/screens/ClothingTypes/Bottom'
import Dress from './app/screens/ClothingTypes/Dress'
import OnePiece from './app/screens/ClothingTypes/OnePiece'
import Top from './app/screens/ClothingTypes/Top'
import Outerwear from './app/screens/ClothingTypes/Outerwear'
import MatchNav from './app/components/MatchNav'
import EditAccount from './app/screens/EditAccount'
import AddType from './app/screens/AddType'
import AddBottom from './app/screens/AddBottom'
import AddDress from './app/screens/AddDress'
import AddTop from './app/screens/AddTop'
import AddOnePiece from './app/screens/AddOnePiece'
import AddOuterwear from './app/screens/AddOuterwear'
import UpdateMeasurements from './app/screens/UpdateMeasurements'
import TopExpanded from './app/screens/ClothingTypes/TopExpanded'
import BottomExpanded from './app/screens/ClothingTypes/BottomExpanded'
import DressExpanded from './app/screens/ClothingTypes/DressExpanded'
import OnePieceExpanded from './app/screens/ClothingTypes/OnePieceExpanded'
import OuterwearExpanded from './app/screens/ClothingTypes/OuterwearExpanded'

export default function App() {

  const DefaultContainer = () => {
    return (
      <View style={styles.container}>
        <Route path="/account" component={Account} />
        <Route path="/bottom" component={Bottom} />
        <Route path="/dress" component={Dress} />
        <Route path="/onepiece" component={OnePiece} />
        <Route path="/top" component={Top} />
        <Route path="/outerwear" component={Outerwear} />
        <Route path="/matchNav" component={MatchNav} />
        <Route path="/editAccount" component={EditAccount} />
        <Route path="/updateMeasurements" component={UpdateMeasurements} />
        <Route path="/topExpanded" component={TopExpanded} />
        <Route path="/bottomExpanded" component={BottomExpanded} />
        <Route path="/dressExpanded" component={DressExpanded} />
        <Route path="/OnePieceExpanded" component={OnePieceExpanded} />
        <Route path="/OuterwearExpanded" component={OuterwearExpanded} />
        <Navbar />
      </View>
    )
  }
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path='/addType' component={AddType} />
        <Route path='/addTop' component={AddTop} />
        <Route path='/addBottom' component={AddBottom} />
        <Route path='/addDress' component={AddDress} />
        <Route path='/addOnePiece' component={AddOnePiece} />
        <Route path='/addOuterwear' component={AddOuterwear} />
        <Route component={DefaultContainer} />
      </View>
    </NativeRouter>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
})

