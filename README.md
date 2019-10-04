# vant-weapp_to_rpx

转换vant-weapp的样式文件中px为rpx
基于[postcss-pxtorem](https://github.com/NervJS/taro/tree/master/packages/postcss-pxtransform)

## 安装
```bash
npm install --save-dev gulp gulp-postcss postcss-pxtransform
```

## 使用

将小程序项目下 miniprogram_npm\vant-weapp 文件夹放入src目录下,执行命令
```bash
gulp wxss
```
执行结束后再把dist目录下vant-weapp文件夹覆盖到项目下miniprogram_npm中
