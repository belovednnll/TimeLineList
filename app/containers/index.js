import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,Image
} from 'react-native'
import { LargeList } from 'react-native-largelist-v3'
import SplashScreen from 'react-native-splash-screen';
import { styles, colors } from '../utils';
import Icon from './Icon/index';

/**
 *时间轴
 *
 * @export
 * @class TimeLineList
 * @extends {Component}
 */

export default class TimeLineList extends Component {

  constructor(props) {
    super(props)
    SplashScreen.hide() // 将启动页隐藏
    this.dataList = [{items:[
      {title:'哒哒哒哒哒',content:"大大大大大大大大大大大大多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多",imageUrl:'https://user-gold-cdn.xitu.io/2019/9/2/16cefb5890b4226b?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1'},
      {title:'大大萨达所多所多所多大大萨达所多所多所多大萨达所大所大所',content:"大萨达所大所多撒多撒多所多所多所多所多所多所多所多所多所多所多所多所多所多所多所多所多",imageUrl:'https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=72d0184ad362853592b5da27a0df5afe/0b46f21fbe096b631fa43ce80a338744eaf8accd.jpg'},
      {title:'哒哒哒哒哒',content:"大大大大大大大大大大大大多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多"}
    ]}]
  }


  componentWillUnmount(){
    this.dataList = [{items:[]}]
  }

  /**
   *这是实现时间轴的核心代码
   *1.右侧的底布局设置左边框宽度为1 key为BottomRightView
   *2.用带一个View 包裹字体图标 ●，View背景设置为白色，位置使用绝对布局 key为TopView
   *3.时间轴可分成三种状态，既时间轴点以上（up）和以下(down)，都显示（all）
   *4.最后一列的时间轴为 up, 第一列为 down ，中间的item为all
   * 
   * @memberof TimeLineList
   */
  renderItem = (section, row) => {
    const item = this.dataList[0].items[row] // 获取到绑定的数据源
    const paddingTop = row===0?30:0     // 第一列 给一个Padding 留白
    const itemHeight = this.renderItemHeight({section,row}) // 根据数据源计算本行的高度
    let timelineHeight = 10 // 时间轴线默认高度是10
    let timelineTop = 5 // 时间轴线的点两端的边距

    if(row===this.dataList[0].items.length-1){
      timelineHeight = itemHeight
    }
    
    if(row===0){
      timelineTop = 0
      timelineHeight +=5
    }

    return (
      <View style={[styles.horizontal_flex_flexstart_center,{paddingTop,alignItems:'flex-start',backgroundColor:colors.white}]} >
        <View 
          key ="BottomLeftView"
          style={{width:70,alignItems:'center'}} >
          <Text style={{fontSize:14,color:colors.textSubContent,fontWeight:'bold'}}>2019</Text>
          <Text style={{fontSize:14,color:colors.textSubContent}}>08/15</Text>
          <Text style={{fontSize:14,color:colors.ico7,marginVertical:5}}>2019</Text>
        </View>
        <TouchableOpacity
          key ="BottomRightView"
          style={{ width:width-70,paddingLeft:10,borderLeftColor:colors.border_color_dark,borderLeftWidth:1,height:itemHeight-paddingTop}}
          onPress={() => console.log(item.title)}
        >
          <Text             
            allowFontScaling
            numberOfLines={1} 
            style={{ width:width-100,fontSize: 17,color:colors.textContent,fontWeight:'bold',marginBottom:10}}>{item.title}</Text>
          {item.content&&<Text             
            allowFontScaling
            numberOfLines={2} 
            style={{ width:width-100,fontSize: 13,color:colors.textContent,marginBottom:10,lineHeight:20}}>{item.content}</Text>}
            <Image
              style={{ width:width-100, height: 120,justifyContent:'flex-start',alignItems:'flex-start' }}
              source={{
                  uri: item.imageUrl,
                }}
                resizeMode='stretch'
              />
        </TouchableOpacity>
        <View  
          key ="TopView" // 遮住BottomRightView边距，实现时间轴的动态变化
          style={{
            width:4,
            position:'absolute',
            alignItems:'center',
            paddingTop:timelineTop===0?8:3,
            top:timelineTop+paddingTop,
            left:69,
            backgroundColor:colors.white,
            height:timelineHeight
          }}>
          <Icon
              name='DVIcon|cycle'
              size={4}
              color={colors.textContent}
            />
        </View>
      </View>
      
    )
  }

  renderItemHeight = ({row}) =>{ 
    let baseHeight = 70  // 基础高度，这是文字标题的高度
    const item = this.dataList[0].items[row]
    if(row===0)
      baseHeight +=30
    if(item.content)
      baseHeight +=30
    if(item.imageUrl) // 如果有图片，Item的高度 +120，因为图片高度我们设置的是120
      baseHeight +=120
    return baseHeight
  }

  render() {
    return (
      <View style={{flex:1}}> 
        <LargeList
          style={{flex:1,backgroundColor:colors.white}}
          ref={ref => {
            this.largeListRef = ref
          }}
          contentStyle={{backgroundColor:colors.graybg}}
          data={this.dataList}
          renderIndexPath={({section, row}) => this.renderItem(section, row)}
          heightForIndexPath={this.renderItemHeight}
          allLoaded
          refreshHeaderHeight={60}
          loadingFooterHeight={60}
          />
      </View>
    )
  }
}

const { width } = Dimensions.get('window')