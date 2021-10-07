import React from "react"
import { FlatList, StyleSheet, TouchableHighlight, View } from "react-native"
import { useTheme } from "../../theme"
import { SvgIcons } from "../../types/SvgIcons"
import Icon from "../Icon"

interface IconData {
  iconName: keyof SvgIcons
  backgroundColor: string
}

export function IconMenu() {
  const theme = useTheme()
  const iconData: IconData[] = [
    {
      iconName: "film",
      backgroundColor: theme.colors.secondary5,
    },
    {
      iconName: "creditCard",
      backgroundColor: theme.colors.secondary4,
    },
    {
      iconName: "target",
      backgroundColor: theme.colors.secondary2,
    },
    {
      iconName: "map",
      backgroundColor: theme.colors.secondary1,
    },
    {
      iconName: "zap",
      backgroundColor: theme.colors.secondary6,
    },
    {
      iconName: "sun",
      backgroundColor: theme.colors.secondary3,
    },
  ]
  const styles = StyleSheet.create({
    iconMenu: {
      width: 200,
      height: 125,
      backgroundColor: theme.colors.secondary7,
      borderRadius: 8,
      overflow: "hidden",
    },
  })
  return (
    <View style={styles.iconMenu}>
      <FlatList
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 8,
        }}
        numColumns={3}
        data={iconData}
        renderItem={({ item }) => (
          <TouchableHighlight
            style={{ borderRadius: 8 }}
            onPress={() => console.log(item.iconName)}
          >
            <Icon
              key={item.backgroundColor}
              iconName={item.iconName}
              backgroundColor={item.backgroundColor}
              style={{ margin: 8 }}
            />
          </TouchableHighlight>
        )}
      />
    </View>
  )
}
