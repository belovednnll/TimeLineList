import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { OIcon } from './OIcon'
import { DVIcon } from './DVIcon'

const iconMap = { // 多个字体，使用的时候 例：<Icon name = "OIconAddone|login" />d
  OIcon,
  DVIcon
}

export default class Icon extends Component {
  render() {
    const { name, size, color,children } = this.props
    if (!name.includes('|')) {
      throw new Error('name 解析错误！')
    }
    const nameArr = name.split('|')
    const fontlib = nameArr[0]
    const font = nameArr[1]
    const CustomIcon = iconMap[fontlib]
    if (!CustomIcon) throw new Error('没有找到匹配的font库，请review代码！')
    return <CustomIcon name={font} size={size} color={color}>{children||''}</CustomIcon>
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}
