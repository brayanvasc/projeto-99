import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Login from "../screens/Login";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Início" component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
