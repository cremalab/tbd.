import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Icon from "../Icon"
import Row from "../Row"

export default function RecentDrawCard() {
  const styles = StyleSheet.create({
    card: {
      height: 65,
      width: 311,
      backgroundColor: "transparent",
      borderBottomColor: "rgba(255, 255, 255, 0.23)",
      borderBottomWidth: 1,
    },
    cardHeader: {
      color: "white",
      fontSize: 12,
    },
    date: {
      fontSize: 11,
      color: "rgba(255, 255, 255, 0.23)",
      paddingTop: 6,
    },
  })
  return (
    <View style={styles.card}>
      <Row style={{ justifyContent: "space-between" }}>
        <Row>
          <View>
            <Icon iconName="film" backgroundColor="#EB5757" />
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              padding: 7,
              height: "100%",
            }}
          >
            <Text style={styles.cardHeader}>Texting here</Text>
            <Text style={styles.date}>08.13.2021 | You</Text>
          </View>
        </Row>

        <View>
          <Icon iconName="union" />
        </View>
      </Row>
    </View>
  )
}
