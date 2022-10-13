import { StyleSheet, Text, View } from 'react-native';
import { Canvas, ImageSVG, useSVG } from '@shopify/react-native-skia';
import ImageSVGDemo from './components/ImageSVGDemo';
// import { Svg, Path } from 'react-native-svg';

export default function App() {
  return <ImageSVGDemo />;
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
