import React, { Component } from 'react';
import { Image,StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, View } from 'native-base';
export default class firstaid extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={styles.cardbox}>
              <WebView
                  source={{
                    html: `
                    <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/xk1VsQT6fiA" frameborder="0" allow="accelerometer; gyroscope; picture-in-picture" ></iframe>
                            `
                  }}
              />
              <CardItem style={styles.titlevideo}>
                <Body>
                  <Text style={styles.headtitle}>การปฐมพยาบาลเบื้องต้น : กระดูกหัก</Text>
                  <Text note><Icon name="md-pricetags" type="Ionicons"  style={{ fontSize: 18,padding:0 }} /> : การปฐมพยาบาลเบื้องต้น</Text>
                </Body>
            </CardItem>
          </Card>
          <Card style={styles.cardbox}>
              <WebView
                  source={{
                    html: `
                    <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/knSol0OLEhQ" frameborder="0" allow="accelerometer; gyroscope; picture-in-picture"></iframe>
                            `
                  }}
              />
              <CardItem style={styles.titlevideo}>
                <Body>
                  <Text style={styles.headtitle}>การปฐมพยาบาลเบื้องต้น : เป็นลมแดด</Text>
                  <Text note><Icon name="md-pricetags" type="Ionicons"  style={{ fontSize: 18,padding:0 }} /> : การปฐมพยาบาลเบื้องต้น</Text>
                </Body>
            </CardItem>
          </Card>
          <Card style={styles.cardbox}>
              <WebView
                  source={{
                    html: `
                    <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/s63Mn_XLZHw" frameborder="0" allow="accelerometer; gyroscope; picture-in-picture"></iframe>
                            `
                  }}
              />
              <CardItem style={styles.titlevideo}>
                <Body>
                  <Text style={styles.headtitle}>การปฐมพยาบาลเบื้องต้น : อาการชัก</Text>
                  <Text note><Icon name="md-pricetags" type="Ionicons"  style={{ fontSize: 18,padding:0 }} /> : การปฐมพยาบาลเบื้องต้น</Text>
                </Body>
            </CardItem>
          </Card>
          <Card style={styles.cardbox}>
              <WebView
                  source={{
                    html: `
                    <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/b_-huF-4uLc" frameborder="0" allow="accelerometer;  gyroscope; picture-in-picture"></iframe>
                            `
                  }}
              />
              <CardItem style={styles.titlevideo}>
                <Body>
                  <Text style={styles.headtitle}>การปฐมพยาบาลเบื้องต้น : แผลงูกัด</Text>
                  <Text note><Icon name="md-pricetags" type="Ionicons"  style={{ fontSize: 18,padding:0 }} /> : การปฐมพยาบาลเบื้องต้น</Text>
                </Body>
            </CardItem>
          </Card>
          <Card style={styles.cardbox}>
              <WebView
                  source={{
                    html: `
                    <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/q9dctVrL9Lg" frameborder="0" allow="accelerometer;  gyroscope; picture-in-picture"></iframe>
                            `
                  }}
              />
              <CardItem style={styles.titlevideo}>
                <Body>
                  <Text style={styles.headtitle}>การปฐมพยาบาลเบื้องต้น : จมน้ำ</Text>
                  <Text note><Icon name="md-pricetags" type="Ionicons"  style={{ fontSize: 18,padding:0 }} /> : การปฐมพยาบาลเบื้องต้น</Text>
                </Body>
            </CardItem>
          </Card>
          <Card style={styles.cardbox}>
              <WebView
                  source={{
                    html: `
                    <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/3meNRTjyrRQ" frameborder="0" allow="accelerometer;  gyroscope; picture-in-picture"></iframe>
                            `
                  }}
              />
              <CardItem style={styles.titlevideo}>
                <Body>
                  <Text style={styles.headtitle}>การปฐมพยาบาลเบื้องต้น : อาการสำลัก</Text>
                  <Text note><Icon name="md-pricetags" type="Ionicons"  style={{ fontSize: 18,padding:0 }} /> : การปฐมพยาบาลเบื้องต้น</Text>
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
      height : 310,
      paddingEnd:-50
  },
  titlevideo:{
    width:"96%",
  },
  headtitle:{
      fontSize:18,
      marginEnd:10
  }
})