import React, { Component } from 'react';
import { Image,StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'
import { Container, Center, Content, Card, CardItem, Text, Body }from 'native-base';
export default class Alternativemedicine extends Component {
  render() {
    return (
        <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text style={{alignSelf:"center"}}>การแพทย์ทางเลือก</Text>
                <Text style={{alignSelf:"center"}}>(Complementary and Alternative Medicine) {"\n"}</Text>
                <Text>การแพทย์ทางเลือกคืออะไร ?{"\n"}</Text>
                <Text>"Complementary Medicine"  คือ การแพทย์ทางเลือกที่นำไปใช้เสริมหรือใช้ร่วมกับการแพทย์แผนปัจจุบัน{"\n"}</Text>
                <Text>"Alternative Medicine"  คือ การแพทย์ทางเลือกที่สามารถนำไปใช้ทดแทนการแพทย์แผนปัจจุบันได้ โดยไม่ต้องอาศัยการแพทย์แผนปัจจุบัน{"\n"}</Text>
                <Text>การจำแนกตามกลุ่มของการแพทย์ทางเลือก หน่วยงานของ National Center of Complementary and Alternative Medicine (NCCAM) ของสหรัฐอเมริกา ได้จำแนกออกเป็น 5 กลุ่ม เมื่อปี 2005 ดังนี้</Text>
                <Text> 1. Alternative Medical Systems  คือ การแพทย์ทางเลือกที่มีวิธีการตรวจรักษาวินิจฉัยและการบำบัดรักษาที่มีหลากหลายวิธีการ ทั้งด้านการให้ยา การใช้เครื่องมือมาช่วยในการบำบัดรักษาและหัตถการต่าง ๆ เช่น การแพทย์แผนโบราณของจีน (Traditional Chinese Medicine) การแพทย์แบบอายุรเวชของอินเดีย เป็นต้น</Text>
                <Text>2. Mind-Body Interventions  คือ วิธีการบำบัดรักษาแบบใช้กายและใจ เช่น การใช้สมาธิบำบัด โยคะ ชี่กง เป็นต้น</Text>
                <Text>3. Biologically Based Therapies  คือ วิธีการบำบัดรักษาโดยการใช้ สารชีวภาพ สารเคมีต่าง ๆ เช่น สมุนไพร วิตามิน Chelation Therapy Ozone Therapy หรือแม้กระทั้งอาหารสุขภาพ เป็นต้น</Text>
                <Text>4. Manipulative and Body-Based Methods  คือ วิธีการบำบัดรักษาโดยการใช้ หัตถการต่าง ๆ เช่น การนวด การดัด การจัดกระดูก Osteopathy Chiropractic เป็นต้น</Text>
                <Text>5. Energy Therapies  คือ วิธีการบำบัดรักษาที่ใช้พลังงานในการบำบัดรักษาที่สามารถวัดได้และไม่สามารถวัดได้ในการบำบัดรักษา เช่น การสวดมนต์บำบัด พลังกายทิพย์ พลังจักรวาล เรกิ โยเร เป็นต้น {"\n\n"}</Text>
                <Image source={require('./images/Image1.png')}  style={{height: 200, width: 300, flex: 1 ,alignSelf:"center"}}/>
                <Text>{"\n"}ในการพิจารณาเลือกใช้การแพทย์ทางเลือก ควรคำนึงถึงหลัก 4 ประการ คือ</Text>
                <Text>1. ความน่าเชื่อถือ (Rational)  โดยดูจากวิธีการหรือองค์ความรู้ด้านการแพทย์ทางเลือกชนิดนั้น ประเทศต้นกำเนิดให้การยอมรับหรือไม่ หรือมีการใช้แพร่หลายหรือไม่ ใช้มาเป็นเวลานานเพียงใด มีการบันทึกไว้หรือไม่ อย่างไร เป็นต้น</Text>
                <Text>2. ความปลอดภัย (Safety)  เป็นเรื่องสำคัญมากว่า จะส่งผลกับสุขภาพของผู้ใช้อย่างไร การเป็นพิษแบบเฉียบพลันมีหรือไม่ พิษแบบเรื้อรังมีเพียงใด อันตรายที่จะเกิดขึ้นในระยะยาวมีหรือไม่ หรือวิธีการนั้นทำให้เกิดอันตรายต่อร่างกายหรือไม่ เป็นต้น</Text>
                <Text>3. การมีประสิทธิผล (Efficacy)  เป็นเรื่องที่จะต้องพิสูจน์หรือมีข้อพิสูจน์มาแล้วว่าสามารถใช้ได้จริง มีข้อมูลยืนยันได้ว่าใช้แล้วได้ผล ซึ่งอาจต้องมีจำนวนมากพอหรือใช้มาเป็นเวลานานจนเป็นที่ยอมรับจากการศึกษาวิจัยหลากหลายวิธีการ เป็นต้น</Text>
                <Text>4. ความคุ้มค่า (Cost - Benefit - Effectiveness)  โดยเทียบว่าค่าใช้จ่ายที่เกิดด้วยวิธีนั้น ๆ คุ้มค่ากับการรักษาโรคที่ผู้ป่วยต้องทนทุกข์ทรมานหรือไม่ โดยอาจเทียบกับฐานะทางการเงินของผู้ป่วยแต่ละคน เป็นต้น </Text>

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