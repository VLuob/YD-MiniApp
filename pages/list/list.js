// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cash: "", //提现金额
    balance: '20.00', //当前余额
    array: ['美国', '中国', '巴西', '日本'], //卡类型
    region: [], //地址
    cardtype: "", //卡类型value
  },
  cashwidthdrawal() { //全部提现
    this.setData({
      ['cash']: this.data.balance
    })
  },
  bindCardChange: function(e) { //选择卡类型
    this.setData({
      cardtype: this.data.array[e.detail.value]
    })
  },
  bindRegionChange: function(e) { //选择银行卡地址
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var to = JSON.parse(options.to)
    console.log(to)
    wx.setNavigationBarTitle({
      title: to.title
    })
    this.setData({
      to,
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