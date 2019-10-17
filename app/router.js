import React, { PureComponent } from 'react'
import { BackHandler, Animated,ToastAndroid, Easing, StatusBar, View ,Platform,NativeModules} from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationActions,
} from 'react-navigation'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import { colors } from './utils/colors'
import TimeLineList from './containers/index';
import { isIphoneX, iphoneXBaseHeight } from './utils/resolution';
import Icon from './containers/Icon/index';

const HomeNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: TimeLineList,
      navigationOptions: {
        // 也可以写在组件的static navigationOptions内
        tabBarLabel: '主页',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            name="OIcon|home"
            size={focused ? 24 : 17}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.primary, // 文字和图片选中颜色
      inactiveTintColor: colors.textContent, // 文字和图片未选中颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: {
        height: 0, // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      },
      style: {
        backgroundColor: '#fff', // TabBar 背景色
        height:50,
        paddingBottom:isIphoneX?iphoneXBaseHeight:0
      },
      // labelStyle: {
      //   fontSize: 10, // 文字大小
      // }
    },
  }
)
HomeNavigator.navigationOptions = ({ navigation }) => {
  let title 
  if(navigation.state.index===0)
   title = '时间轴'
  switch (navigation.state.index) {
    case 2://
      return {
        title,
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignSelf: 'center',
          flexGrow:1,
          textAlign: 'center',
          fontWeight:'normal'
        },
        headerLeft: null,
      }
    default:
      return {header:null}
    
  }
}


const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: HomeNavigator,
    },
  },
  {
    headerMode: 'float',
    mode: 'modal',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
        height:45,
      },
      gesturesEnabled: false,
      headerTintColor: '#fff',
      headerBackTitleVisible:false,
      headerBackTitle:Platform.OS==='ios'?'返回':null,
      headerTitleStyle: {
        alignSelf: 'center',
        flexGrow:1,
        textAlign: 'center',
        fontWeight:'normal'
      },
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return {
          opacity,
          transform: [
            {
              translateY,
            },
          ],
        }
      },
    }),
  }
)

export const routerReducer = createNavigationReducer(AppNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
)

const App = reduxifyNavigator(AppNavigator, 'root')


function getCurrentScreen(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentScreen(route)
  }
  return route.routeName
}
@connect(({ router }) => ({
  router,
}))
class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getCurrentScreen(this.props.router)
    if (currentScreen === 'Login' || currentScreen === 'Home') {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        NativeModules.GPSCheckModule.exit()
        return false
      }
      this.lastBackPressed = Date.now()
      ToastAndroid.show('再按一次退出应用', 2)
      return true
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { dispatch, router } = this.props
   
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <App dispatch={dispatch} state={router} />
      </View>
    )
  }
}
export default Router

