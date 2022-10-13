import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { Canvas, ImageSVG, useSVG } from '@shopify/react-native-skia';

const ImageSVGDemo = () => {
  const TRE = useSVG(require('../assets/start-screen/TR-Ellipse.svg'));
  const MLE = useSVG(require('../assets/start-screen/ML-Ellipse.svg'));
  const BRE = useSVG(require('../assets/start-screen/BR-Ellipse.svg'));

  const logo = useSVG(require('../assets/start-screen/scann-logo.svg'));
  const AN = useSVG(require('../assets/start-screen/SCANN.svg'));

  const BGradient = useSVG(require('../assets/start-screen/B-Gradient.svg'));
  return (
    <Canvas style={styles.svgContainer}>
      {TRE && <ImageSVG svg={TRE} x={100} y={0} width={100} height={256} />}
      {MLE && <ImageSVG svg={MLE} x={0} y={100} width={256} height={256} />}
      {/* {BRE && <ImageSVG svg={BRE} x={150} y={300} width={256} height={256} />} */}

      {logo && <ImageSVG svg={logo} x={75} y={200} width={256} height={256} />}
      {AN && <ImageSVG svg={AN} x={65} y={450} width={256} height={256} />}

      {BGradient && (
        <ImageSVG svg={BGradient} x={0} y={600} width={256} height={256} />
      )}
    </Canvas>
  );
};

const styles = StyleSheet.create({
  svgContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default ImageSVGDemo;
