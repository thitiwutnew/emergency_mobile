import React, { Component } from 'react';
import { Image,StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, View } from 'native-base';
export default class total extends Component {
  render() {
    return (
      <Container>
        <Content>
        <Card style={styles.cardbox}>
            <WebView
                source={{
                  html: `
                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/egQZDVRciYw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          `
                }}
            />
              <CardItem>
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
            </CardItem>
          </Card>
          <Card style={styles.cardbox}>
            <WebView
                source={{
                  html: `
                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/egQZDVRciYw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          `
                }}
            />
              <CardItem>
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
            </CardItem>
          </Card>
          <Card style={styles.cardbox}>
            <WebView
                source={{
                  html: `
                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/egQZDVRciYw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          `
                }}
            />
              <CardItem>
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
            </CardItem>
          </Card>
          <Card style={styles.cardbox}>
            <WebView
                source={{
                  html: `
                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/egQZDVRciYw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          `
                }}
            />
              <CardItem>
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
            </CardItem>
          </Card>
          <Card style={styles.cardbox}>
            <WebView
                source={{
                  html: `
                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/egQZDVRciYw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          `
                }}
            />
              <CardItem>
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    cardbox: {
      marginLeft:"2%",
      width:"96%",
      height : 295,
  }
})