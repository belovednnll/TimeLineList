### 初始化项目
安装所有依赖
```bash
yarn # 或者 npm install
```


### 目录结构
创建完成后目录中将会出现以下结构：

```bash
├── __tests__  # RN测试文件 
├── android # android工程目录
├── app # 项目业务代码存放文件
├── ios # ios工程目录
├── .babelrc 
├── .buckconfig
├── .flowconfig
├── .gitattributes
├── .gitignore
├── .watchmanconfig
├── app.json
├── bettem.cli.config.js 
├── bettem.update.nodemodules.js
├── index.js
├── jsconfig.json
├── metro.config.js
├── package.json
├── README.md
```

###运行项目

+ 如果要运行iOS工程，须确保几个文件放到了 .rncache ，具体操作查看  https://blog.csdn.net/SummerCloudXT/article/details/80795465
  
    然后执行
    ```bash
    cd node_modules/react-native && ./scripts/ios-install-third-party.sh && cd ../../
    ```

    有可能接下来你会遇到 React Native 'config.h' file not found
    ```bash
    cd node_modules/react-native/third-party/glog-0.3.4 && ../../scripts/ios-configure-glog.sh && cd ../../../../
    ```
+ 最后运行
    ```
    react-native run-ios # or react-native run-android
    ```
### 核心代码
```
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
```
### 最终效果
![效果图](preview.jpg =300x)

### 项目功能组件及版本号

```bash

"dva-core": "^1.4.0", #数据流框架 基于redux

"lottie-react-native": "^2.5.11", #矢量图加载库

"react-native-largelist-v3": "^3.0.10",#处理大列表滚动，顺畅滑动

"react-native-splash-screen": "^3.1.1", #启动页

"react-native-spring-scrollview": "^2.0.14", #与LargeList合用

"react-native-vector-icons": "^4.6.0", #字体图标渲染库

"react-navigation": "^2.12.1", #导航
"react-navigation-redux-helpers": "^2.0.5", #redux
"react-redux": "^5.0.7",
```
