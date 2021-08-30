import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import SvgIcon from "../components/SvgIcon"
import HomeScreen from "../screens/HomeScreen"
import IndecisiveFriendsScreen from "../screens/IndecisiveFriendsScreen"
import JarsAndHatsScreen from "../screens/JarsAndHatsScreen"
import NotificationsScreen from "../screens/NotificationsScreen"

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#0D0B26",
          borderRadius: 8,
        },
      }}
      initialRouteName={"Home"}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <SvgIcon
              variant={`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.0271 21H15.103H6.89696H4.97291C3.05488 21 1.5 19.4607 1.5 17.5618V8.84736C1.50739 8.09967 1.86226 7.39702 2.46203 6.94256L9.01342 1.6853C10.1662 0.771566 11.8049 0.771566 12.9577 1.6853L19.538 6.93303C20.1355 7.38935 20.4898 8.09083 20.5 8.83784V17.5618C20.5 19.4607 18.9451 21 17.0271 21Z" stroke="#70E1FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              `}
            />
          ),
        }}
      />
      <Tab.Screen
        name="JarsAndHats"
        component={JarsAndHatsScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <SvgIcon
              variant={`<svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.0781 5.69573V4.21875H18.4844V2.8125H17.0781V0H2.92188V2.8125H1.51562V4.21875H2.92188V5.69573C1.31912 6.02241 0.109375 7.44286 0.109375 9.14062V20.4844C0.109375 21.4284 0.628328 22.3342 1.5707 23.0349C2.38338 23.6392 3.41416 24 4.32812 24H16.375C18.3135 24 19.8906 22.4229 19.8906 20.4844V9.14062C19.8906 7.44286 18.6809 6.02241 17.0781 5.69573ZM4.32812 1.40625H15.6719V2.8125H4.32812V1.40625ZM15.6719 4.21875V5.625H4.32812V4.21875H15.6719ZM16.375 22.5938H4.32812C3.10009 22.5938 1.51562 21.5708 1.51562 20.4844C2.10362 20.9249 2.83417 21.1875 3.625 21.1875H16.375C17.1658 21.1875 17.8964 20.9249 18.4844 20.4825C18.4844 21.6475 17.5381 22.5938 16.375 22.5938ZM16.375 19.7812H3.625C2.46189 19.7812 1.51562 18.835 1.51562 17.6719V9.14062C1.51562 7.97752 2.46189 7.03125 3.625 7.03125H16.375C17.5381 7.03125 18.4844 7.97752 18.4844 9.14062V17.6719C18.4844 18.835 17.5381 19.7812 16.375 19.7812Z" fill="#9CACB7"/>
        </svg>`}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={IndecisiveFriendsScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <SvgIcon
              variant={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="6" r="4" stroke="#9CACB7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 22C22 17.5817 17.5228 14 12 14C6.47715 14 2 17.5817 2 22" stroke="#9CACB7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <SvgIcon
              variant={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#9CACB7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#9CACB7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
