# LCP mobile Wallet
## version requirements
## 版本要求
* Android
  * jdk1.8
  * Android Studio (the latest version is fine) 最新的版本可以
  * cordova 8.1.2
  * gradle

* iOS
  * XCode
  * cordova 8.1.2
  * ios-deploy `npm install -g ios-deploy`

use a node version manager such as nvm and install node version 8.15.0

使用node版本管理器（例如nvm）并安装节点版本8.15.0

Make sure that bower and grunt are installed:
确保已安装bower和grunt:
```
npm install -g bower
npm install -g grunt-cli
```
create a folder at the same level as lcp-mobile-wallet name `obytebuilds`
in other words, if you are currently in the lcp-mobile-wallet then create a folder like this:

在与lcp-mobile-wallet名称`obytebuilds`相同级别创建一个文件夹
换句话说，如果您当前在lcp-mobile-wallet中，则创建一个像这样的文件夹：
```
mkdir ../obytebuilds
```


 ## to build:
 
 ## 编译:
 ```
 bower install
 npm install
 grunt
 ```
 
 ## To Run:
 ## 运行程序:
 
for the first run :

第一次运行程序: 
`make android-debug`

for successive runs:

连续运行程序:

`make android-debug-fast`

 check the Makefile for other types of builds.
 
 检查Makefile是否有其他类型的构建
