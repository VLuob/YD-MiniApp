// pages/userinfo/userinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    to: [{}, {
      id: 0,
      title: "昵称"
    }, {
      id: 1,
      title: "绑定手机号"
    }, {
      id: 2,
      title: "性别"
    }, {
      id: 3,
      title: "地址"
    }, ]
  },
  clickto(e) {
    var index = e.currentTarget.dataset.index
    var to = this.data.to
    var address = '/pages/updateinfo/updateinfo?to='
    console.log(to[index])

    wx.navigateTo({
      url: address + JSON.stringify(to[index]),
    })
    console.log(e.currentTarget.dataset.index)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '个人信息'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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

  }
})