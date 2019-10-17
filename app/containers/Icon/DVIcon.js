import {
  createIconSetFromIcoMoon
} from 'react-native-vector-icons'

const data = {"IcoMoonType":"selection","icons":[{"icon":{"paths":["M176 512c0-185.594 150.818-336 336-336 185.56 0 336 150.818 336 336 0 185.56-150.818 336-336 336-185.594 0-336-150.818-336-336z"],"attrs":[{}],"isMulticolor":false,"isMulticolor2":false,"grid":0,"tags":["圆"],"colorPermutations":{"11511112311601109512101551101230175120124019213512551808012552071011255220120198931071":[{}]}},"attrs":[{}],"properties":{"order":62,"id":0,"name":"cycle","prevSize":32,"code":59655},"setIdx":2,"setId":13,"iconIdx":5}],"height":1024,"metadata":{"name":"icoszxc"},"preferences":{"showGlyphs":true,"showCodes":true,"showQuickUse":true,"showQuickUse2":true,"showSVGs":true,"fontPref":{"prefix":"icon-","metadata":{"fontFamily":"icoszxc","majorVersion":1,"minorVersion":0},"metrics":{"emSize":1024,"baseline":6.25,"whitespace":50},"embed":false,"showSelector":false},"imagePref":{"prefix":"icon-","png":true,"useClassSelector":true,"color":0,"bgColor":16777215,"name":"icomoon","classSelector":".icon"},"historySize":50,"gridSize":16}}

const DVIcon = createIconSetFromIcoMoon(data, 'icoszxc', 'icoszxc.ttf')

export {DVIcon}
