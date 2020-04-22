import React, { Component } from 'react';
import { StyleSheet,Image, StatusBar} from 'react-native';
import { Container, Header, Left, Body, Right, Button,Icon, Content,Thumbnail,Text,List, ListItem, View } from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome';
import MenuDrawer from 'react-native-side-drawer'
import { connect } from 'react-redux';

class Aed extends Component {
    constructor(props) {
        super(props)
        this.state = {
          listdata: null,
        }
      }
    componentDidMount() {
        let data =[];
        this.props.aedlocations.map((item) => {
            console.log(item)
            data.push(
                <ListItem thumbnail onPress={() => {this.locationdirect(item)}}>
                <Left>
                    <Thumbnail square style={styles.imgicon} source={require('../resource/Images/AED.png')} />
                </Left>
                <Body>
                    <Text>{item.title}</Text>
                    <Text note numberOfLines={1}>{item.description}</Text>
                </Body>
                <Right style={styles.timeCol}>
                    <Text style={styles.textSmall}>1646456</Text>
                </Right>
            </ListItem> 
            )
        })
        this.setState({
            listdata: data
        })
    }

    locationdirect = (value) => {

        const {latitude, longitude} = this.state
        let latitudes = value.latlng.latitude
        let longitudes = value.latlng.longitude
        const origin = { latitude:latitude, longitude: longitude }
        const destination = { latitude: latitudes,longitude: longitudes }
    
    
        fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${latitude},${longitude}&destinations=${latitudes},${longitudes}&departure_time=now&language=th&key=AIzaSyCaZfz6Roxtd39P-gDKwTy6VZ-DJUhjEiY`)
        .then(response => response.json())
        .then((responseJson)=> {
          
          this.setState({
            dataSource: {"title" : value.title,responseJson}
          })
          this.props.handlemakelocation(this.state.dataSource)
        })
        .catch(error=>console.log(error))
      }

  render() {
    var  {navigate} = this.props.navigation;
    const {listdata } = this.state
    return (
      <Container>
          <StatusBar hidden = {true}/>
        <Header style={styles.header}>
          <Left>
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
            <Text style={styles.headertext}>จุดบริการเครื่อง AED ใกล้คุณ</Text>
          </Body>
        </Header>
        <Content style={styles.container}>
            <View>
            {listdata}
            </View>
        </Content>
      </Container>
    );
  }
}


const mapStateToProps = (state) => ({
    aedlocations: state.aedlocation.aedlocation,
  })
//   const mapDispatchToProps = (dispatch) => ({
//     handlemakelocation: (text) => {
//       dispatch(makedirecttion(text))
//     },
//     handleLocation: (text) => {
//       dispatch(setlocation(text))
//     },
//     handleaedlocation: (text) => {
//       dispatch(aedlocation(text))
//     }
//   })
  
export default connect(mapStateToProps, null)(Aed)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
},
  imgicon: {
      display:"flex",
      width:50,
  },
  alart: {
    position: 'absolute',
    width: Platform.OS === 'ios' ? '110%' : 33,
    borderRadius:100,
    height:25,
    paddingRight:1,
    paddingLeft:-2,
    top: 2, 
    right: 2,
  },
  header :{
    backgroundColor:'#5e697d',
    height: Platform.OS === 'ios' ? 100 : 60,
    marginTop: Platform.OS === 'ios' ? null : 0,
  },
  imageheader :{
    height: Platform.OS === 'ios' ? '100%' : 40,
    width: Platform.OS === 'ios' ? 150 : '100%',
  },
  footer :{
    backgroundColor:'#f03b42',
    color:'#fff',
    marginTop: Platform.OS === 'ios' ? -11 : -20,
  },
  headertext :{
      marginLeft:"-10%",
      fontSize:18,
      color:'#fff',
      display:'flex',
      fontWeight:'bold',
  },
  timeCol: {
    alignItems: "center",
  },
  textSmall: {
    color: "black",
    fontSize: 15,
    
  },
});
