import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigation from './navigation/DrawerNavigation';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={DrawerNavigation} />
          {/* Adicione mais telas ou componentes aqui */}
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
