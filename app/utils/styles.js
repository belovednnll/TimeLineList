import {
  Dimensions,
  StyleSheet
} from 'react-native'



import {
  colors
} from './colors'
import { iosStatusHeight } from './resolution';

const {
  width,
  height
} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container_white_wh_center_center: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  container_graybg_wh_flexstart_flexstart: {
    width,
    height:height-iosStatusHeight-45,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: colors.graybg,
  },
  container_white_flex_flexstart: {
    flex: 1,
    width,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  container_graybg_w_flexstart_flexstart: {
    width,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: colors.graybg,
  },
  scrollview: {
    width,
    backgroundColor: colors.graybg,
  },
  mainView: {
    width,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
  mainContent: {
    width,
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  horizontal_flex_flexstart_center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  horizontal_flex_center_center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal_flex_spacebetween_center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  horizontal_w_flexstart_center: {
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  horizontal_w_center_center: {
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_logo: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: colors.graybg,
    borderRadius: 60,
    marginBottom: 15,
    marginTop: Math.round(0.15 * height),
  },
  header: {
    width: 85,
    height: 85,
    borderWidth: 1,
    borderRightWidth: 2,
    borderColor: colors.graybg,
  },
  titleText: {
    fontSize: 14,
    width,
    color: colors.black,
    backgroundColor: colors.graybg,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  filterText: {
    color: colors.white,
    fontSize: 16,
    marginRight: 10,
  },
  dateText: {
    fontSize: 12,
    color: colors.grayText,
  },
  newsTitle: {
    fontSize: 16,
    color: colors.textContent,
  },
  newsContent: {
    fontSize: 13,
    color: colors.grayText,
  },
  poorStatusContent: {
    fontSize: 14,
    color: colors.textContent,
    paddingLeft: 8,
    flex: 1,
  },
  webview: {
    width,
    height: height - 160,
    backgroundColor: colors.white,
  },
  qrCode: {
    width: 180,
    height: 180,
    borderWidth: 1,
    borderRightWidth: 2,
  },
  detailText: {
    fontSize: 12,
    paddingLeft: 15,
    width: width / 3,
    height: 25,
  },
  cycleStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headImage: {
    width,
    alignItems: 'center',
    height: Math.round(0.6 * width),
    backgroundColor: colors.home_status_bar,
  },
  gridContainer: {
    flex: 1,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginType1: {
    width: Math.round(0.425 * width) - 20,
    textAlign: 'center',
    height:50,
    fontSize: 18,
    paddingVertical: 15,
    color: colors.textSubContent,
    borderBottomColor: colors.border_color_base,
    borderBottomWidth: 2
  },
  loginType2: {
    width: Math.round(0.425 * width) - 20,
    height:50,
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 15,
    color: colors.ico7,
    borderBottomColor: colors.ico7,
    borderBottomWidth: 2
  },
  mycenter_info_text_left:{
    fontSize:16,
    color:colors.ico7,
    height:35,
    position:'absolute',
    left:0,
    width: Math.round(width/2-15),
    borderRightColor:colors.graybg,
    borderRightWidth:1,
    marginTop:5,
    textAlign:'center',
    paddingTop:10
  },
  mycenter_info_text_right:{
    fontSize:16,
    color:colors.ico7,
    height:35,
    position:'absolute',
    marginTop:5,
    right:0,
    width: Math.round(width/2-15),
    textAlign:'center',
    paddingTop:10
  },
  mycenter_listItem_text:{
    color:colors.textContent,fontSize:16,paddingVertical:15,paddingLeft:20
  },
  industryInfo_griditem_text:{
    flex:1,
    fontSize: 14,
    color:colors.textSubContent,
    textAlign:'center'
  },
  industryInfo_tab:{
    alignItems: 'center',
    paddingVertical: 15, 
    borderBottomColor: colors.graybg,
    borderBottomWidth: 1, 
    flex: 1, 
    height: 70
  },
  industryInfo_tab_view:{
    width:50,
    height:50,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center'
  }
})