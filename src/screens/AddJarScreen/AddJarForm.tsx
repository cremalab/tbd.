import { useFormikContext } from "formik"
import React, { useState } from "react"
import {
  StyleSheet,
  Switch,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native"
import { FormSection } from "../../components/FormSection"
import { IconData, IconMenu } from "../../components/IconMenu"
import { InputBubble } from "../../components/InputBubble"
import Row from "../../components/Row"
import SvgIcon from "../../components/SvgIcon"
import Typography from "../../components/Typography"
import { useTheme } from "../../theme"
import { SvgIcons } from "../../types/SvgIcons"
import InitialValues from "../../types/initialValues"

interface Props {
  onSubmit: (values: InitialValues["JarInformation"]) => void
}

export function AddJarForm({ onSubmit }: Props) {
  const [visible, setVisible] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled)
    setFieldValue("setOptions", !isEnabled)
  }
  const theme = useTheme()
  const styles = StyleSheet.create({
    formSectionView: {
      marginVertical: 8,
      alignItems: "flex-start",
      width: 311,
    },
    textInput: {
      fontSize: 24,
      color: theme.colors.primary1,
      fontFamily: theme.fonts.Poppins,
    },
    header: {
      paddingTop: 12,
      paddingBottom: 24,
    },
    iconContainer: {
      width: "25%",
      height: 35,
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      width: "75%",
    },
    addIcon: {
      height: 32,
      width: 32,
      borderColor: theme.colors.primary1,
      borderWidth: 1,
      borderStyle: "dashed",
      justifyContent: "center",
      alignItems: "center",
    },
    optionsInput: {
      color: theme.colors.primary1,
      fontFamily: theme.fonts.Poppins,
    },
  })
  const formik = useFormikContext<InitialValues["JarInformation"]>()
  const { values, handleChange, setFieldValue } = formik

  const selectIcon = (item: IconData) => {
    setFieldValue("iconName", item.iconName)
    setFieldValue("iconColor", item.backgroundColor)
    setVisible(!visible)
  }
  console.log({ values })
  return (
    <>
      <Row style={styles.header}>
        <View style={styles.iconContainer}>
          <TouchableHighlight
            onPress={() => {
              setVisible(!visible)
            }}
          >
            {values.iconName ? (
              <SvgIcon
                variant={values.iconName as keyof SvgIcons}
                size={24}
                color={values.iconColor}
              />
            ) : (
              <View style={styles.addIcon}>
                <SvgIcon variant={"cross"} />
              </View>
            )}
          </TouchableHighlight>
        </View>

        <View style={styles.input}>
          <TextInput
            onChangeText={handleChange("title")}
            placeholder="Jar Name Here"
            placeholderTextColor={theme.colors.primary5}
            style={styles.textInput}
          />
        </View>
      </Row>
      <View style={styles.formSectionView}>
        <FormSection
          title={"After an Option is Drawn..."}
          option1="Return"
          icon1="return"
          onOption1={() => setFieldValue("afterOptionDrawn", "Return")}
          option2="Remove"
          icon2="slash"
          onOption2={() => setFieldValue("afterOptionDrawn", "Remove")}
          option3="Replace"
          icon3="edit"
          onOption3={() => setFieldValue("afterOptionDrawn", "Replace")}
        />
      </View>
      <View style={styles.formSectionView}>
        <FormSection
          title={"When no options are left..."}
          option1="Return All"
          onOption1={() => setFieldValue("whenNoOptionsLeft", "Return All")}
          icon1="return"
          option2="Archive Jar"
          icon2="slash"
          onOption2={() => setFieldValue("whenNoOptionsLeft", "Archive Jar")}
          option3="Replace All"
          icon3="edit"
          onOption3={() => setFieldValue("whenNoOptionsLeft", "Replace All")}
        />
      </View>
      <View style={[styles.formSectionView, { width: 311 }]}>
        <Row style={{ marginVertical: 8 }}>
          <Typography variant="heading2">Set number of options</Typography>
        </Row>
        <Row>
          <Switch
            thumbColor={theme.colors.primary1}
            trackColor={{
              true: theme.colors.secondary9,
              false: theme.colors.secondary8,
            }}
            ios_backgroundColor={theme.colors.secondary8}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ marginRight: 8 }}
          />
          {isEnabled ? (
            <InputBubble width={150}>
              <TextInput
                placeholder={"# of options"}
                onChangeText={handleChange("numberOfOptions")}
                placeholderTextColor={theme.colors.primary5}
                style={styles.optionsInput}
              />
            </InputBubble>
          ) : (
            <InputBubble width={150}>
              <Typography style={{ fontSize: 14 }} variant="subHeading2">
                # of options
              </Typography>
            </InputBubble>
          )}
        </Row>
      </View>
      <Row style={{ marginVertical: 16 }}>
        <InputBubble
          width={113}
          style={{ backgroundColor: theme.colors.primary4 }}
          onPress={() => onSubmit(values)}
        >
          <Typography variant="buttonLabel">Create Jar</Typography>
        </InputBubble>
      </Row>
      <IconMenu
        visible={visible}
        onPress={() => {
          setVisible(!visible)
        }}
        onIconSelect={selectIcon}
      />
    </>
  )
}
