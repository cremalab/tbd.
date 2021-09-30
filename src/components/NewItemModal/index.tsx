import React from "react"
import { StyleSheet, View } from "react-native"
import { SvgIcons } from "../../types/SvgIcons"
import Icon from "../Icon"
import Row from "../Row"
import SvgIcon from "../SvgIcon"
import Typography from "../Typography"

interface Props {
  title: string
  icon?: keyof SvgIcons
}

export function NewItemModal({ title }: Props) {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 16,
      backgroundColor: "#21283F",
      height: 144,
      width: 229,
      marginHorizontal: 12,
      marginVertical: 12,
    },

    headerRow: {
      justifyContent: "center",
      alignItems: "center",
    },
  })
  return (
    <>
      <View style={styles.container}>
        <Row
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "10%",
          }}
        >
          <Icon iconName="film" backgroundColor="red" />
        </Row>
        <Row
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            height: "10%",
            paddingTop: 10,
            paddingRight: 10,
          }}
        >
          <SvgIcon variant="exit" size={17} />
        </Row>
        <View style={[styles.headerRow, { padding: 20, height: "65%" }]}>
          <Row>
            <Typography variant={"heading3"}>{title}</Typography>
          </Row>
          <Row>
            <Typography variant={"heading3"}>Has been Added!</Typography>
          </Row>
        </View>
        <Row
          style={{
            width: "100%",
            height: "25%",
            backgroundColor: "#2D344B",
            borderBottomEndRadius: 16,
            borderBottomStartRadius: 16,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Typography variant={"subHeading1"}>DRAW SLIP</Typography>
        </Row>
      </View>
    </>
  )
}