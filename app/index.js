import React from 'react'
import { AppRegistry } from 'react-native'
import dva from './utils/dva'
import Router, { routerMiddleware, routerReducer } from './router'


const app = dva({
  initialState: {},
  models: [
  ],
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],

})

const App = app.start(<Router />)


AppRegistry.registerComponent('TimeLineList', () => App)
