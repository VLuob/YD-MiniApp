// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    open: true,
    code: "",
  },
  closeChange:function(e){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.login({
      success: (res) => {
        let code = res.code || ''
        if (code) {
          this.setData({
            code: code
          })
          console.log(code)
        }
      }
    })
  },
  getPhoneNumber: async function(e) {
    var that = this;
    let code = this.data.code
    let iv = e.detail.iv
    let encrypteData = e.detail.encryptedData
    let rawData = this.data.rawData
    let signature = this.data.signature
    let param = {
      iv,
      code,
      encrypteData,
      rawData,
      signature
    }
    let to = e.detail.errMsg
    console.log(to == "getPhoneNumber:ok");
    if (e.detail.errMsg == "getPhoneNumber:ok") {
      if (rawData !== undefined && signature !== undefined) {
        console.log(rawData)
        let res = await _Post(API.login, param)
        let {
          code,
          data,
        } = res
        wx.setStorageSync("code", code)
        if (wx.getStorageSync("code") === 200) {
          if (data.accountToken === null) {
            let param = {
              usersId: data.id
            }
            var result = await _Post(API.createUsers, param)
            console.log(result)
          }
          wx.setStorageSync("id", data.id)
          wx.setStorageSync("code", code)
          wx.setStorageSync("token", data.token)
          wx.setStorageSync("to", to)
          wx.switchTab({
            url: '../index/index',
          })
        } else if (wx.getStorageSync("code") === 14033) {
          wx.setStorageSync("token", res.data)
        } else {
          wx.showToast({
            title: '登录失败,请重新登录',
            icon: "none",
            duration: 2000
          })
        }
      } else {
        wx.showToast({
          title: '您还未登录，先去登录吧',
          icon: "none",
          duration: 2000
        })
        this.setData({
          open: true
        })
      }
    } else {
      wx.switchTab({
        url: '../index/index',
      })
      wx.removeStorageSync("to")
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  getUserInfo: function(e) {
    console.log(e)

    if (e.detail.errMsg !== 'getUserInfo:ok') {} else {
      let {
        rawData,
        signature
      } = e.detail
      var name = JSON.parse(rawData)
      wx.setStorageSync('name', name.nickName)
      this.setData({
        open: false,
        rawData: rawData,
        signature: signature
      })
    }
  },
  onShow: function() {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              let {
                rawData,
                signature
              } = res
              var name = JSON.parse(rawData)
              wx.setStorageSync('name', name.nickName)
              this.setData({
                open: false,
                rawData: rawData,
                signature: signature
              })
            }
          })
        } else {
          this.setData({
            open: true,
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '邀请你加入iTasks兼具任务委派分工和任务协同办公的新潮App！',
      path: '/pages/index/index',
      success: function(res) {}
    }

  }
})