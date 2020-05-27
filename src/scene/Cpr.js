import React,{ Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Container,Header,Left,Body,Accordion,Button,Icon,Content,Badge,Text ,CardItem,Card } from "native-base";
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable';
import styles from '../styles/Main.style';
// const dataArray = [
//         { 
//             title: "ขั้นตอนการทำ CPR", content: "1. ตรวจดูว่าผู้ป่วยหมดสติจริงหรือไม่ โดยการเรียกและตีที่ไหล่เบาๆ\n\n2. จัดท่าให้ผู้ป่วยนอนหงายราบกับพื้นแข็งและตรวจดูในปากว่ามีสิ่งแปลกปลอมอยู่หรือไม่ ถ้ามีให้นำออก\n\n"
//             +"3. เปิดทางเดินหายใจโดยดันหน้าผากและยกคางให้ใบหน้าหงายขึ้น\n\n4.ตรวจว่าผู้ป่วยหายใจหรือไม่โดยการฟัง ก้มลงให้หูอยู่ใกล้ปากและจมูกของผู้ป่วย ฟังเสียงลมหายใจตามองดูหน้าอกว่าขยับขึ้นลงหรือไม่\n\n"
//             +"5. ถ้าผู้ป่วยหายใจดีและไม่มีการเจ็บของกระดูกคอและกระดูกสันหลัง ให้จัดท่านอนตะแคงกึ่งคว่ำ ให้จับแขนด้านไกลตัว ข้ามหน้าอกมาวางมือไว้ที่แก้มอีกข้างหนึ่งแล้วดึงตัวให้พลิกตัว\n\n"
//             +"6. ถ้าผู้ป่วยไม่หายใจช่วยหายใจด้วยวิธีเป่าปาก โดยประกบปากผู้ป่วยเป่าลมเข้าปากผู้ป่วยช้า ๆ สม่ำเสมอ10-12 ครั้ง ใน 1 นาที อย่าเป่าติดกันโดยไม่รอให้ผู้ป่วยหายใจไม่ออก (ปัจจุบัน เป่าปาก 2 ครั้ง นวดหน้าอก : 30 ครั้ง : จำนวน 5 รอบ )"
//             +"\n\n  ข้อควรระวัง คือ ต้องมั่นใจว่าในปากผู้ช่วยเหลือและผู้ป่วยไม่มีแผล ไม่เป่าลมมากจนเกินไปเพราะจะทำให้เกิดการอาเจียน ซึ่งอาจมีเศษอาหารติดทางเดินหายใจ\n"
//             +"\n7. ตรวจชีพจร ให้ใช้นิ้วชี้และนิ้วกลางลงบนลูกกระเดือกของผู้ป่วย วางแล้วเลื่อนมือลงมาด้านข้างระหว่างช่องลูกกระเดือกกับกล้ามเนื้อคอ\n\n"
//         }
//     ]
export default class Home extends Component {
  render() {
    var  {navigate} = this.props.navigation;
    zoomOut = {
        0: {
          opacity: 0.3,
          scale: 0.5,
        },
        0.5: {
          opacity: 1,
          scale: 1,
        },
        1: {
          opacity: 0.3,
          scale: 0.5,
        }
      }
      zoomHilight = {
          0: {
            opacity: 0.6,
            scale: 0.9,
          },
          0.5: {
            opacity: 1,
            scale: 1.9,
          },
          1: {
            opacity: 0.6,
            scale: 0.9,
          },
        }
    return (
      <Container style={styles.containers}>
          <StatusBar hidden = {true}/>
        <Header style={styles.header}>
          <Left style={{marginLeft:Platform.OS === 'ios' ? 20 : 0,}}>
            {
                Platform.OS === 'ios' ?  <Button transparent 
                onPress={() => navigate("Home")}
              >
                <Icon 
                  name='ios-arrow-back' 
                  type="Ionicons"
                  style={{color:'#fff'}} 
              />
              </Button> :  <Button transparent 
              onPress={() => navigate("Home")}
            >
              <Icon 
                name='md-arrow-back' 
                type="Ionicons"
                style={{color:'#fff'}} 
            />
            </Button> 
            }
          </Left>
          <Body>
            <Text style={styles.headertext}>ขั้นตอนการทำ CPR</Text>
          </Body>
        </Header>
        <Content >
            <View style={styles.containercpr}>
                <Animatable.View 
                    animation={zoomOut}
                    iterationCount={'infinite'}
                    duration={600}
                    style={styles.containerAnimation}
                >
                    <Animatable.View
                        animation={zoomHilight}
                        iterationCount={'infinite'}
                        duration={600}
                        style={[styles.center,styles.circle]}
                    />
                    <Ionicons
                        name={"ios-heart"}
                        size={100}
                        color="white"
                    />
                </Animatable.View>
                <Text style={styles.textTitle}>100 ครั้ง ต่อ 1 นาที</Text>
            </View>
            <Card>
                <CardItem>
                    <Body>
                        <Text style={styles.textbodyTitle}>ขั้นตอนการทำ CPR</Text>
                        <Text style={styles.textbodysub}>1. ตรวจดูว่าผู้ป่วยหมดสติจริงหรือไม่ โดยการเรียกและตีที่ไหล่เบาๆ</Text>
                        <Text style={styles.textbodysub}>2. จัดท่าให้ผู้ป่วยนอนหงายราบกับพื้นแข็งและตรวจดูในปากว่ามีสิ่งแปลกปลอมอยู่หรือไม่ ถ้ามีให้นำออก</Text>
                        <Text style={styles.textbodysub}>3. เปิดทางเดินหายใจโดยดันหน้าผากและยกคางให้ใบหน้าหงายขึ้น</Text>
                        <Text style={styles.textbodysub}>4.ตรวจว่าผู้ป่วยหายใจหรือไม่โดยการฟัง ก้มลงให้หูอยู่ใกล้ปากและจมูกของผู้ป่วย ฟังเสียงลมหายใจตามองดูหน้าอกว่าขยับขึ้นลงหรือไม่</Text>
                        <Text style={styles.textbodysub}>5. ถ้าผู้ป่วยหายใจดีและไม่มีการเจ็บของกระดูกคอและกระดูกสันหลัง ให้จัดท่านอนตะแคงกึ่งคว่ำ ให้จับแขนด้านไกลตัว ข้ามหน้าอกมาวางมือไว้ที่แก้มอีกข้างหนึ่งแล้วดึงตัวให้พลิกตัว</Text>
                        <Text style={styles.textbodysub}>6. ถ้าผู้ป่วยไม่หายใจช่วยหายใจด้วยวิธีเป่าปาก โดยประกบปากผู้ป่วยเป่าลมเข้าปากผู้ป่วยช้า ๆ สม่ำเสมอ10-12 ครั้ง ใน 1 นาที อย่าเป่าติดกันโดยไม่รอให้ผู้ป่วยหายใจไม่ออก (ปัจจุบัน เป่าปาก 2 ครั้ง นวดหน้าอก : 30 ครั้ง : จำนวน 5 รอบ )</Text>
                        <Text style={styles.textbodysub}>   ข้อควรระวัง คือ ต้องมั่นใจว่าในปากผู้ช่วยเหลือและผู้ป่วยไม่มีแผล ไม่เป่าลมมากจนเกินไปเพราะจะทำให้เกิดการอาเจียน ซึ่งอาจมีเศษอาหารติดทางเดินหายใจ</Text>
                        <Text style={styles.textbodysub}>7. ตรวจชีพจร ให้ใช้นิ้วชี้และนิ้วกลางลงบนลูกกระเดือกของผู้ป่วย วางแล้วเลื่อนมือลงมาด้านข้างระหว่างช่องลูกกระเดือกกับกล้ามเนื้อคอ</Text>
                    </Body>
                </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}