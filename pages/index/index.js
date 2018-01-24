//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  setActive:function(e){
    if (app.globalData.userInfo) {
      //如果已经登陆，则直接进入订餐环节
      wx.navigateTo({
        url: '../order/index'
      })
    }else{
      //如果尚未登陆，则进入登陆环节
      wx.switchTab({
        url: '../user/index'
      })
    }
  }
})
