### 初始化项目
安装所有依赖
```bash
yarn # 或者 npm install
```
执行项目依赖优化
```bash
npm run optimize
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
+ 如果要运行Android工程，须修改几处才能正常使用
  1. 修改android/local.properties 中sdk.dir，改为你电脑上的androidSDK路径

  2. 修改android\app\build.gradle 中的 126行~ 129行
    ```
    storeFile file("D:\\androidSpace\\bettem.jks")
    storePassword "bettem"
    keyAlias "bettem"
    keyPassword "bettem"
    ```
    改为你的签名
    如果不想麻烦，可注释掉 142~146行，使用默认的签名

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
### 项目常用的功能组件及版本号

```bash
"@ant-design/icons-react-native": "^1.0.2",
"@ant-design/react-native": "^3.1.0", # ant-design-rn 依赖库

"dva-core": "^1.4.0", #数据流框架 基于redux

"dva-loading": "^2.0.5", #数据交互时的 全局loading

"jcore-react-native": "^1.3.1",
"jpush-react-native": "^2.5.1", #极光推送 依赖包

"lottie-react-native": "^2.5.11", #矢量图加载库

"react-native-amap-geolocation": "^1.0.3", #定位

"react-native-android-permissions": "^1.0.2",  #android >6.0 权限处理

"react-native-app-intro-slider": "^0.2.4", #引导图

"react-native-calendars": "^1.17.6", #日历

"react-native-datepicker": "^1.7.2",# 时间选择

"react-native-fast-image": "^5.2.0", # 基于Glide的Image控件

"react-native-htmlview": "^0.13.0",# 显示html内容

"react-native-image-crop-picker": "^0.19.3", #图片裁剪

"react-native-image-pan-zoom": "^2.1.2", 
"react-native-image-zoom-viewer": "^2.1.3",#图片缩放查看

"react-native-keyboard-aware-scroll-view": "^0.7.4",# 处理scrollView中的键盘遮挡与焦点问题

"react-native-largelist-v3": "^3.0.10",#处理大列表滚动，顺畅滑动

"react-native-material-dropdown": "^0.11.1",#下拉选择

"react-native-orientation": "^3.1.3",#横竖屏

"react-native-parallax-scroll-view": "^0.20.1",#带有回弹效果的ScrollView

"react-native-pdf": "^5.0.7",  #打开pdf

"react-native-render-html": "^3.10.0",  #处理html

"react-native-secharts": "^1.4.5", #echart Native版

"react-native-simple-dialogs": "^1.1.0", #弹框

"react-native-splash-screen": "^3.1.1", #启动页

"react-native-spring-scrollview": "^2.0.14", #与LargeList合用

"react-native-swiper": "^1.5.13", #轮播图

"react-native-syan-image-picker": "^0.2.2", #图片选择

"react-native-timeline-listview": "^0.2.3", #时间轴

"react-native-vector-icons": "^4.6.0", #字体图标渲染库

"react-native-video": "^3.2.0", #播放视频

"react-native-wechat": "^1.9.10", #微信分享、登录

"react-navigation": "^2.12.1", #导航
"react-navigation-redux-helpers": "^2.0.5", #redux
"react-redux": "^5.0.7",
```
