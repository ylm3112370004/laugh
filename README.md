# 毛毛乐吧

基于 parcel / SCSS / ES6 / LocalStorage

## 技术及概念
- 使用parcel打包
- 模块化 
- 表驱动编程

# 使用parcel打包

## 通过Yarn或者npm安装Parcel

使用本地安装

`yarn add parcel-bundler --dev`
`npm install parcel-bundler --save-dev`

## 修改package.json文件

```json
{
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  }
}
```

## 使用scss 需要安装插件
`npm install -D sass`

## 优化代码

### 表驱动编程

```javascript
document.querySelector('#btnPause').onclick = Player.pause
document.querySelector('#btnPlay').onclick = Player.play
document.querySelector('#btnSlow').onclick = Player.slow
document.querySelector('#btnNormal').onclick = Player.normal
document.querySelector('#btnFast').onclick = Player.fast

// 使用数据结构优化代码，重复性的代码
const events = {
  '#btnPause': 'pause',
  '#btnPlay': 'play',
  '#btnSlow': 'slow',
  '#btnFast': 'fast',
}
for(let key in events) {
  if(events.hasOwnProperty(key)) { // 判断是否为
    const value = events[key]
    document.querySelector(key).onclick = Player[value]
  }
}
```

### 由于多次点击播放，导致速度加快

1. 简单粗暴的方式 先清除，再绑定
```javascript
play = () => {
  if(Player.n > styleText.length) Player.n = 0;
  window.clearInterval(Player.id)
  Player.id = setInterval(Player.run, Player.time)
}
```

2. 使用一个标记
```javascript
interval = false;
```

## 有待解决的事情 audio 太大怎么办