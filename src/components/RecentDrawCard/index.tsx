import { Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins"
import AppLoading from "expo-app-loading"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { useTheme } from "../../theme"
import Icon from "../Icon"
import Row from "../Row"

interface Props {
  title: string
  date: string
}

export default function RecentDrawCard({ date, title }: Props) {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  })

  const theme = useTheme()
  const styles = StyleSheet.create({
    card: {
      height: 65,
      width: 311,
      backgroundColor: "transparent",
      borderBottomColor: "rgba(255, 255, 255, 0.23)",
      borderBottomWidth: 1,
    },
    cardHeader: {
      color: theme.colors.primary1,
      fontSize: 12,
      fontFamily: "Poppins_400Regular",
    },
    date: {
      fontSize: 11,
      color: "rgba(255, 255, 255, 0.23)",
      paddingTop: 6,
      fontFamily: "Poppins_400Regular",
    },
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
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
            <Text style={styles.cardHeader}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </Row>

        <View>
          <Icon iconName="union" />
        </View>
      </Row>
    </View>
  )
}