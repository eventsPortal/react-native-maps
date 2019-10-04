import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
      cancelable: true,
    });
  }

  async setCamera() {
    const camera = await this.map.getCamera();
class CameraControl extends React.Component {
  async getCamera() {
    const camera = await this.map.getCamera();
    Alert.alert('Current camera', JSON.stringify(camera), [{ text: 'OK' }], {
      cancelable: true,
    });
          provider={this.props.provider}
          ref={ref => {
            this.map = ref;
          }}
          style={styles.map}
          initialCamera={{
            center: {
              latitude: LATITUDE,
              longitude: LONGITUDE,
            },
            pitch: 45,
            heading: 90,
            altitude: 1000,
            zoom: 10,
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.getCamera()}
            style={[styles.bubble, styles.button]}
          >
            <Text>Get current camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setCamera()}
            style={[styles.bubble, styles.button]}
          >
            <Text>Set Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.animateCamera()}
            style={[styles.bubble, styles.button]}
          >
            <Text>Animate Camera</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

CameraControl.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  button: {
    marginTop: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginVertical: 20,
    backgroundColor: 'transparent',
