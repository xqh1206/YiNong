// pages/index0/index0.js
Page({
  go: function() {
      wx.switchTab({
        url: '/pages/index/index',
      });
  },
  //提示暂未开放
  show() {
    wx.showToast({
      title: '暂未开放!',
      icon: 'loading',
      duration: 1000
    });
  },
})