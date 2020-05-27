import {  Dimensions} from 'react-native'
export default {
    container: {
        flex: 1,
        backgroundColor:'#FFF',
    },
    containercpr:{
        flex: 1,
        width:"100%",
        height:300,
        backgroundColor: "#242b38",
        alignItems: "center",
        justifyContent: "center",
        position: 'relative',
        marginTop:100,
    },
    contentbtn: {
        marginTop:10,
        alignSelf:'center',
        padding:25,
        color: '#fff',
        fontWeight: 'bold',
      },
      contentbtnforget: {
        marginTop:"2%",
        alignSelf:'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: Platform.OS === 'ios' ? 35 : 18,
      },
      imagelogo:{
        display:'flex',
        marginTop: Platform.OS === 'ios' ? "25%" : "10%",
        alignSelf:'center'
      },
      contentform :{
        marginTop: Platform.OS === 'ios' ? "15%" : "10%",
        alignSelf:'center',
        alignItems:'center',
        width:'80%',
      },
      inputlogin:{
        backgroundColor:'#fff',
        marginBottom:10,
      },
      footer:{
          display:'flex',
      },
      view:{
          flex:0,
          marginTop: Platform.OS === 'ios' ? "25%" : "15%",
          alignItems:'center'
      },
      hairline: {
        marginTop:Platform.OS === 'ios' ? "10%" : "7%",
        color:"#FFF",
        borderColor:"#FFF",
        marginBottom: Platform.OS === 'ios' ? "7%" : "5%",
      },
      textregister: {
        fontSize:15,
        color:'#fff',
        // marginBottom:5
      },
      header :{
        backgroundColor:'#405273',
        height: Platform.OS === 'ios' ? 80 : 60,
        marginTop: Platform.OS === 'ios' ? null : 0,
    },
    headertext :{
        justifyContent:'center',
        marginLeft:Platform.OS === 'ios' ? "-100%" : 15,
        marginTop:Platform.OS === 'ios' ? null : 15,
        fontSize:20,
        color:'#fff',
        display:'flex',
        fontWeight:'bold',
      },
      headertextregis:{
        marginTop:"3%",
        fontSize:20,
        color:'#fff',
        display:'flex',
        fontWeight:'bold',
        justifyContent:'center',
      },
      textheader:{
        marginTop:"7%",
        marginLeft:"3%",
        width:"40%",
        color:"#FFF",
        padding:10,
        backgroundColor:"#2574a9",
        fontWeight:"900",
        borderColor:"#2574a9",
        borderWidth:1,
        borderRadius:10,
        paddingBottom:10,
        height: Platform.OS === 'ios' ? 55 : null,
      },
      textheaderprofile:{
        marginTop:"7%",
        marginLeft:"3%",
        width:"40%",
        color:"#FFF",
        backgroundColor:"#2574a9",
        fontWeight:"900",
        borderColor:"#2574a9",
        borderWidth:1,
        borderRadius:10,
        paddingTop:Platform.OS === 'ios' ? 5 : null,
        height: Platform.OS === 'ios' ? 62 : null,
      },
      textheadereditprofile:{
        marginTop:"7%",
        marginLeft:"3%",
        width:"40%",
        color:"#FFF",
        backgroundColor:"#2574a9",
        fontWeight:"900",
        borderColor:"#2574a9",
        borderWidth:1,
        borderRadius:10,
        paddingTop:Platform.OS === 'ios' ? 5 : null,
        height: Platform.OS === 'ios' ? 62 : null,
      },
      form:{
        marginTop:10,
        color:"#000",
        fontSize:18,
        width:"90%",
        marginLeft:"5%"
      },
      formprofile:{
        marginTop:20,
        color:"#000",
        fontSize:18,
        width:"92%",
        marginLeft:"4%",
        borderWidth:1,
        padding:5,
        borderRadius:7,
      },
      textbtnconfirm:{
        color:'#FFF',
        marginTop:2,
        fontSize:18,
        fontWeight:"900",
      },
      textbtnconfirmregis:{
        paddingTop:25,
        color:'#FFF',
        marginTop:10,
        fontSize:18,
        fontWeight:"900",
      },
      btnconfirm:{
        alignSelf:'center',
        marginTop:"10%",
        paddingTop:Platform.OS === 'ios' ? null : 2,
        width:"50%",
        borderRadius:7,
        marginBottom:50
      },
      texterror:{
        color:"red",
        fontSize:13,
        marginLeft:"5%"
      },
      btnback:{
        alignSelf:'center',
        paddingTop:"6%",
        width:"40%",
        marginBottom:40,
        borderRadius:7,
      },
      input:{
         width:"90%",
         fontSize:15,
         marginLeft:"5%",
         marginTop:5,
         borderRadius:7,
         borderColor:"#2574a9",
         borderWidth:2,
         padding:7,
      },
      alertbody:{
        alignSelf:'center',
        justifyContent:'center',
        fontSize:18,
        fontWeight:"bold",
      },
      Dialogfooter:{
        alignSelf:'center',
        marginTop:15,
        borderRadius:5,
        height:10,
        backgroundColor:'#fff',
       },
       btndirect:{
        padding:5,
        justifyContent: "center",
        backgroundColor:'#4285f4',
        width:"50%",
       },
       logo: {
        marginTop: 20,
        height: 30
      },
      imageheader: {
        height: Platform.OS === "ios" ? "100%" : 40,
        width: Platform.OS === "ios" ? 150 : "100%"
      },
      footer: {
        backgroundColor: "#f03b42",
        color: "#fff",
        marginTop: Platform.OS === "ios" ? -11 : -20
      },
    
      aletnavigation: {
        marginVertical: 5,
        padding: 10,
        width: "100%",
        height: "auto",
        opacity: 0.95,
        borderRadius: 15,
        backgroundColor: "#c15252"
      },
      infoCol: {
        width: "70%",
        justifyContent: "center"
      },
      timeCol: {
        width: "30%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#4285f4",
        padding:10
      },
      timeColaed: {
        alignItems: "center",
      },
      textLarge: {
        fontWeight: "bold",
        color: "white",
        fontSize: 20
      },
      textSmall: {
        color: "black",
        fontSize: 18,
        padding: 5
      },
      textSmallaed: {
        color: "black",
        fontSize: 15,
      },
      textTitle: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 5
      },
      textSubtitle: {
        color: "white",
        fontSize: 14
      },
      list: {
        width: "100%",
        height: "auto",
        opacity: 0.95,
        backgroundColor: "#c15252",
      },
      marginless: {
        paddingLeft:"5%",
        width: "100%",
        height: 70,
        opacity: 1.00,
        borderRadius: 0,
        backgroundColor: "#c15252"
      },
      active: {
        backgroundColor: "#d24146"
      },
      btncancel:{
        padding:5,
        justifyContent: "center",
        backgroundColor:'#ff2d2d',
        width:"100%",
      },
      mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      btndirect:{
        padding:5,
        justifyContent: "center",
        backgroundColor:'#4285f4',
        width:"100%",
      },
      btncancel:{
        padding:5,
        justifyContent: "center",
        backgroundColor:'#ff2d2d',
        width:"100%",
      },
      imagepf:{
        marginTop:'7%',
        alignSelf:'center',
        marginBottom:'5%',
      },
      containers: {
        backgroundColor: "#242b38",
      },
      containerTitle: {
        position: 'absolute',
        bottom: '10%',
        padding: 50
      },
      containerAnimation: {
        width:100,
        position: 'relative',
        marginLeft:"2%"
      },
      textTitle: {
        color: 'white',
        marginTop:100,
        fontSize: 30,
      },
      textbodyTitle: {
          color: 'black',
          fontSize: 25,
          marginVertical:10,
      },
      textbodysub: {
          color: 'black',
          fontSize: 16,
          marginVertical:10,
      },
      center: {
        position: 'absolute',
      },
      logo: {
        marginTop: -100,
        margin: 40,
        height: 60,
        width: 170,
        alignItems: "center"
      },
      btnContainer: {
        backgroundColor: "#5f6780",
        borderRadius: 100,
        width: 90,
        height: 90
      },
      keypad: {
        flexDirection: "row",
      },
      circle: {
        borderRadius: 100,
        width: 200,
        height: 200,
        backgroundColor: "#d24146",
        borderColor: '#ba2b30',
        borderWidth: 20,
        marginTop: -55,
        marginLeft: -60
      },
      circleBig: {
        borderRadius: 350,
        width: 700,
        height: 700,
        backgroundColor: "#3f4759",
        borderColor: '#556078',
        borderWidth: 50,
        marginTop: -320,
        marginLeft: -320
      },
      btnText: {
        color: 'white',
        fontSize: 30,
      },
      headertext :{
          justifyContent:'center',
          marginLeft:Platform.OS === 'ios' ? "-100%" : null,
          fontSize:20,
          color:'#fff',
          display:'flex',
          fontWeight:'bold',
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
      textbig: {
        color: "green",
        fontSize: 18,
      },
      btnfacebook: {
        marginTop:10,
        justifyContent:"center",
        borderRadius:7,
        backgroundColor:"#0d8bf0",
        width:"75%",
      },
      logohead: {
        marginTop: 7,
        height: 30,
        alignItems: "stretch"
      },
      headers: {
        backgroundColor: "#405273",
        padding: Platform.OS === 'ios' ? 15 : 10,
        paddingTop: Platform.OS === 'ios' ? "12%" : "5%",
        flexDirection: "row",
        justifyContent: "space-between"
      },
      bigBlue: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: Platform.OS === "ios" ? 33 : 30
      },
      alarthead: {
        position: "absolute",
        width: 25,
        borderRadius: 10,
        textAlign: "center",
        height: 20,
        paddingRight: 1,
        paddingLeft: Platform.OS === "ios" ? 1 :2,
        paddingTop: Platform.OS === "ios" ? 1 :2,
        top: 2,
        right: 2
      },
      textAlert: {
        textAlign: "center",
        fontSize: 10,
        alignContent: "center"
      },
      alert:{
        flex:1,
        fontWeight:"900",
      },
}