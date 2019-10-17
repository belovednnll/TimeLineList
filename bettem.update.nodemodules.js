const path = require( 'path' );
const fs = require('fs');

// 修改 react-native-splash-screen
let splashScreenPath = './node_modules/react-native-splash-screen/android/src/main/res/values/refs.xml'
const CURR_PATH = process.cwd();
splashScreenPath = path.join(CURR_PATH,splashScreenPath)
if (fs.existsSync(splashScreenPath)) {
    let content = fs.readFileSync(splashScreenPath, 'utf8');
    content = content.replace('/launch_screen','/timelinelist_launch_screen')
    fs.writeFileSync(splashScreenPath,content);

}else{
    console.log('请先运行 npm i 或 yarn')
}