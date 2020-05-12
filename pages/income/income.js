// pages/income/income.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{ /* 跳转页面 */
      to: "/pages/list/list?to=",
      title: "提现到银行卡"
    }, {

      to: "/pages/list/list?to=",
      title: "绑定银行卡"
    }, {
      id: 0,
      to: "/pages/list/list?to=",
      title: "收入明细"
    }, {
      id: 1,
      to: "/pages/list/list?to=",
      title: "以提现"
    }, ],
    to: [{ /* title */
      id: 3,
      title: "余额提现"
    }, {
      id: 4,
      title: "绑定银行卡"
    }, {
      id: 1,
      title: "收入明细"
    }, {
      id: 2,
      title: "以提现"
    }]
  },
  next(e) {
    console.log(e)
    let page = e.currentTarget.dataset.list
    var index = e.currentTarget.dataset.index
    var to = this.data.to
    console.log(to, index)
    wx.navigateTo({
      url: page.to + JSON.stringify(to[index])
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '我的收入'
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