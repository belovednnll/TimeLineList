import React from 'react'
import { Dimensions, PixelRatio, Platform, StatusBar, View } from 'react-native'
/**
 * 屏幕适配
 */
const props = {}
export default class Resolution {
  static get(useFixWidth = true) {
    return useFixWidth ? { ...props.fw } : { ...props.fh }
  }

  static setDesignSize(dwidth = 750, dheight = 1336, dim = 'window') {
    const designSize = { width: dwidth, height: dheight }

    const navHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 64
    const pxRatio = PixelRatio.get(dim)
    const { width, height } = Dimensions.get(dim)
    let newheight
    if (dim !== 'screen') {
      newheight = height - navHeight
    }
    const w = PixelRatio.getPixelSizeForLayoutSize(width)
    const h = PixelRatio.getPixelSizeForLayoutSize(newheight)

    const fwDesignScale = designSize.width / w
    const fwWidth = designSize.width
    const fwHeight = h * fwDesignScale
    const fwScale = 1 / pxRatio / fwDesignScale

    const fhDesignScale = designSize.height / h
    const fhWidth = w * fhDesignScale
    const fhHeight = designSize.height
    const fhScale = 1 / pxRatio / fhDesignScale

    props.fw = { width: fwWidth, height: fwHeight, scale: fwScale, navHeight }
    props.fh = { width: fhWidth, height: fhHeight, scale: fhScale, navHeight }
  }

  static FixWidthView = p => {
    const { width, height, scale, navHeight } = props.fw
    return (
      <View
        {...p}
        style={{
          marginTop: navHeight,
          width,
          height,
          backgroundColor: 'transparent',
          transform: [
            { translateX: -width * 0.5 },
            { translateY: -height * 0.5 },
            { scale },
            { translateX: width * 0.5 },
            { translateY: height * 0.5 },
          ],
        }}
      >
        {p.children}
      </View>
    )
  }

  static FixHeightView = p => {
    const { width, height, scale, navHeight } = props.fh
    return (
      <View
        {...p}
        style={{
          marginTop: navHeight,
          width,
          height,
          backgroundColor: 'transparent',
          transform: [
            { translateX: -width * 0.5 },
            { translateY: -height * 0.5 },
            { scale },
            { translateX: width * 0.5 },
            { translateY: height * 0.5 },
          ],
        }}
      >
        {p.children}
      </View>
    )
  }
}
// init
Resolution.setDesignSize()
const {width,height} = Dimensions.get('window');
export const isIphoneX = (Platform.OS === 'ios' && (Number(((height/width)+"").substr(0,4)) * 100) === 216);
export const iosStatusHeight = isIphoneX?Math.round((height-812)/3.3)+20:20
export const  iphoneXBaseHeight = Math.round((height-812)/3.2)
const statusHeight = Platform.OS==='ios'?iosStatusHeight:StatusBar.currentHeight
export const minusHeight = height-45-statusHeight
export const minusTbsInHeight =height-45-(Platform.OS==='ios'?44:45)-statusHeight

export const cardRightMarginLeft = Math.round(width/2)-60

export const scrollHeight = statusHeight+45+(Platform.OS==='ios'?44:45)+(isIphoneX?55+iphoneXBaseHeight:44)


export const isCardNo = (card)=>
{  
   // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
   const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
   if(reg.test(card) === false)  
   {  
       return  false;  
   }  
   return true
}  


export const checkPhone = phone => { 
  if(!new RegExp(/^1(3|4|5|7|8|9)[0-9]{9}$/).test(phone)){ 
      return false; 
  } 
  return true;
}