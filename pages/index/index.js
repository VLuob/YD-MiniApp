//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    autoplay: true,
    interval: 2000,
    duration: 500,
    userInfo: {},
    hasUserInfo: false,
    grid: [{
      to: "/pages/qrcodepic/qrcodepic?to=",
      url: "/img/0.jpg",
      name: "推广"
    }, {
      to: "/pages/service/service?to=",
      url: "/img/1.jpg",
      name: "服务"
    }, {
      to: "/pages/member/member?to=",
      url: "/img/2.jpg",
      name: "会员"
    }, {
      to: "/pages/qrcodepic/qrcodepic?to=",
      url: "/img/3.jpg",
      name: "关注我们"
    }], //宫格数据
    swiperData: [{ //轮播图数据
      img: "/img/0.jpg"
    }, {
      img: "/img/1.jpg"
    }, {
      img: "/img/2.jpg"
    }, {
      img: "/img/3.jpg"
    }],
    info: [{
      url: "/img/0.jpg",
      title: "八字批命八字批命八字批命",
      price: "42.00",
      see: "3.5W"
    }, {
      url: "/img/0.jpg",
      title: "八字批命",
      price: "42.00",
      see: "3.5W"
    }, {
      url: "/img/0.jpg",
      title: "八字批命",
      price: "42.00",
      see: "3.5W"
    }, ], //热门服务
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    to: [{
      id: 0,
      title: "推广"
    }, {}, {}, {
      id: 1,
      title: "关注我们"
    }]
  },
  clickgrid: function(e) {
    let page = e.currentTarget.dataset.grid.to
    let index = e.currentTarget.dataset.index
    var to = this.data.to
    console.log(to)
    wx.navigateTo({
      url: page + JSON.stringify(to[index])
    })
  },
  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '我的小程序'
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})