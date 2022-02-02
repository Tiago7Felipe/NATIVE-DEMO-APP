exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub/',
    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "11.0",
        "appium:deviceName": "native-demo-app",
        "appium:automationName": "UiAutomator2",
        "appium:app": "C:\\Users\\Zappts\\native-demo-app\\app\\android\\Android-NativeDemoApp-0.4.0.apk",
        "appium:appActivity": "com.wdiodemoapp.SplashActivity",
        "appium:appWaitActivity": "",
        "appium:appPackage": "com.wdiodemoapp"
    }
    ]
}