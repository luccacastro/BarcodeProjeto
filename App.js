import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Container, Content} from 'native-base'
import Swiper from 'react-native-swiper'

export default class App extends React.Component {
  render() {
    return (
      <Container>
      	<Content>
				<Swiper>
					<View style={styles.slideDefault}>
						<Text style={styles.text}>Chat</Text>
					</View>
						<View style={styles.slideDefault}>
						<Text style={styles.text}>Camera</Text>
					</View>
						<View style={styles.slideDefault}>
						<Text style={styles.text}>Stories</Text>
					</View>
      		</Swiper>
      	</Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  slideDefault: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
      },
      text: {
			color: 'white',
			fontSize: 30,
			fontWeight: 'bold'      
      }
});
