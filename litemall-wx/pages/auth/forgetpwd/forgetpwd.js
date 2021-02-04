// pages/auth/forgetpwd/forgetpwd.js
var api = require('../../../config/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  bindMobileInput: function(e) {

    this.setData({
      mobile: e.detail.value
    });
  },

  checkphone: function(){
    let that = this;
    if (this.data.mobile.length == 0) {
      wx.showModal({
        title: '错误信息',
        content: '手机号不能为空',
        showCancel: false
      });
      return false;
    }else{
      //test
      wx.navigateTo({
        url: '/pages/auth/getcode/getcode?mobile='+that.data.mobile,
      })

      wx.request({
        url: api.AuthRegisterCaptcha,
        data: {
          mobile: that.data.mobile
        },
        method: 'POST',
        header: {
          'content-type': 'application/json'
        },
        success: function(res) {
          if (res.data.errno == 0) {
            // wx.showModal({
            //   title: '发送成功',
            //   content: '验证码已发送',
            //   showCancel: false
            // });

            wx.navigateTo({
              url: '/pages/auth/getcode/getcode?mobile='+that.data.mobile,
            })

          } else {
            wx.showModal({
              title: '错误信息',
              content: res.data.errmsg,
              showCancel: false
            });
          }
        }
      });
    }
  }

})