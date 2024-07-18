import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView style={ styles.home}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    home: {
        paddingTop: Platform.OS === "android" ? 30 : 0
    }
})