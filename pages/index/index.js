//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/banner/1.png',
      '/images/banner/2.png',
    ],
    project:[
      '/images/nav_project/1.jpg',
      '/images/nav_project/1.jpg',
      '/images/nav_project/1.jpg',
      '/images/nav_project/1.jpg',
      '/images/nav_project/1.jpg',
      '/images/nav_project/1.jpg',
      '/images/nav_project/1.jpg',
      '/images/nav_project/1.jpg',
    ],
    nav1: '/images/nav/1.png',
    nav2: '/images/nav/2.png',
    nav3: '/images/nav/3.png',
    nav4: '/images/nav/4.png',
    content: '/images/content/content.png',
    content2:'/images/nav_scientific/1.png',
    content4:'/images/nav_me/1.jpg',
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    selected1:'selected',
    selected2: '',
    selected3: '',
    selected4: '',
    show_content1:'display:block',
    show_content2:'display:none',
    show_content3:'display:none',
    show_content4:'display:none',
    content_height:300,
  },
  // 绑定事件

  select1:function(){
    this.setData({ selected1:'selected'})
    this.setData({ selected2: '' })
    this.setData({ selected3: '' })
    this.setData({ selected4: '' })
    this.setData({ show_content1:'display:block'})
    this.setData({ show_content2: 'display:none' })
    this.setData({ show_content3: 'display:none' })
    this.setData({ show_content4: 'display:none' })
  },
  select2: function () {
    this.setData({ selected1: '' })
    this.setData({ selected2: 'selected' })
    this.setData({ selected3: '' })
    this.setData({ selected4: '' })
    this.setData({ show_content1: 'display:none' })
    this.setData({ show_content2: 'display:block' })
    this.setData({ show_content3: 'display:none' })
    this.setData({ show_content4: 'display:none' })
  },
  select3: function () {
    this.setData({ selected1: '' })
    this.setData({ selected2: '' })
    this.setData({ selected3: 'selected' })
    this.setData({ selected4: '' })
    this.setData({ show_content1: 'display:none' })
    this.setData({ show_content2: 'display:none' })
    this.setData({ show_content3: 'display:block' })
    this.setData({ show_content4: 'display:none' })
  },
  select4: function () {
    this.setData({ selected1: '' })
    this.setData({ selected2: '' })
    this.setData({ selected3: '' })
    this.setData({ selected4: 'selected' })
    this.setData({ show_content1: 'display:none' })
    this.setData({ show_content2: 'display:none' })
    this.setData({ show_content3: 'display:none' })
    this.setData({ show_content4: 'display:block' })
  },

  // 点击跳转产品页面
  to_project:function () {
    wx:wx.navigateTo({
      url: '/pages/project/pro',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        var height = res.windowHeight - 220
        that.setData({content_height:height})
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
