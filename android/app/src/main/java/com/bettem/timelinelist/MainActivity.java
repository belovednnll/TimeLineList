package com.bettem.timelinelist;

import android.os.Bundle; // here
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // 启动页设置添加代码

public class MainActivity extends ReactActivity {

     /**
      * 设置启动页
      */
      @Override
      protected void onCreate(Bundle savedInstanceState) {
          SplashScreen.show(this); // 展示启动页设置代码
          super.onCreate(savedInstanceState);
      }
 
      @Override
      protected void onResume() {
          super.onResume();
      }
 
      @Override
      protected void onPause() {
          super.onPause();
      }
 
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "TimeLineList";
    }

}
