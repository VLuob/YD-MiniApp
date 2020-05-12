// pages/updateinfo/updateinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    val: "",
    sex: [{
      sex: "男",
      checked: true
    }, {
      sex: "女",
    }, {
      sex: "保密",
    }],
  },
  select(e) {
    var that = this
    var index = e.currentTarget.dataset.index
    var sex = this.data.sex
    sex.forEach(function(v, i) {
      if (index == i) {
        sex[index].checked = true;
        console.log(sex[i].sex)
      } else {
        sex[i].checked = false;
      }
      that.setData({
        sex
      })
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