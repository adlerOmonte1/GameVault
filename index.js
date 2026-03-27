import 'react-native-gesture-handler'; // to indicate that there will be navigation
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
