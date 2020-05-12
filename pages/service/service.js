// pages/service/service.js
//获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    height: app.globalData.windowHeight,
    activeKey: 0,
    tab: [{
      name: "八字批命"
    }, {
      name: "紫薇斗数"
    }, {
      name: "风水布局"
    }, ],
    content: [{
      child: [{
        title: "罗盘0",
        list: [{
          url: "/img/0.jpg",
          name: "风水华沙罗盘"
        }, {
          url: "/img/0.jpg",
          name: "风水华沙罗盘"
        }, {
          url: "/img/0.jpg",
          name: "风水华沙罗盘"
        }, {
          url: "/img/0.jpg",
          name: "风水华沙罗盘"
        }, {
          url: "/img/0.jpg",
          name: "风水华沙罗盘"
        }, {
          url: "/img/0.jpg",
          name: "风水华沙罗盘"
        }, ]
      }, {
        title: "数据",
        list: [{
          url: "/img/1.jpg",
          name: "面向读心术"
        }, {
          url: "/img/1.jpg",
          name: "面向读心术"
        }, {
          url: "/img/1.jpg",
          name: "面向读心术"
        }, ]
      }]
    }, {
      child: [{
        title: "罗盘1",
        list: [{
          url: "/img/0.jpg",
          name: "风水华沙罗盘"
        }, {
          url: "/img/0.jpg",
          name: "风水华沙罗盘"
        }, {
          url: "/img/0.jpg",
          name: "风水华沙罗盘"
        }, {
          url: "/img/0.jpg",
          name: "风水华沙罗盘"
        }, {
          url: "/img/0.jpg",
          name: "风水华沙罗盘"
        }, {
          url: "/img/0.jpg",
          name: "风水华沙罗盘"
        }, ]
      }, {
        title: "数据",
        list: [{
          url: "/img/1.jpg",
          name: "面向读心术"
        }, {
          url: "/img/1.jpg",
          name: "面向读心术"
        }, {
          url: "/img/1.jpg",
          name: "面向读心术"
        }, ]
      }]
    }, {
      child: [{
        title: "罗盘2",
        list: [{
          url: "/img/0.jpg",
          name: "风水华沙罗盘"
        }, {
          url: "/img/0.jpg",
          name: "风水华沙罗盘"
        }, {
          url: "/img/0.jpg",
          name: "风水华沙罗盘"
        }, {
          url: "/img/0.jpg",
          name: "风水华沙罗盘"
        }, {
          url: "/img/0.jpg",
          name: "风水华沙罗盘"
        }, {
          url: "/img/0.jpg",
          name: "风水华沙罗盘"
        }, ]
      }, {
        title: "数据",
        list: [{
          url: "/img/1.jpg",
          name: "面向读心术"
        }, {
          url: "/img/1.jpg",
          name: "面向读心术"
        }, {
          url: "/img/1.jpg",
          name: "面向读心术"
        }, ]
      }]
    }, ]
  },
  clicktab(e) {
    var index = e.currentTarget.dataset.index
    var activeKey = this.data.activeKey
    this.setData({
      activeKey: index
    })
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: "服务"
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