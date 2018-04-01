//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/1.png',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    nav1:'/images/nav/1.png',
    nav2: '/images/nav/2.png',
    nav3: '/images/nav/3.png',
    nav4: '/images/nav/4.png',
    content:'/images/content/content.png',
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular:true
  }
})
