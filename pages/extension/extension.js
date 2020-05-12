// pages/extension/extension.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePath: "/img/1.jpg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  /* 保存图片到手机 */
  saveImageToPhotosAlbum: function() {
    console.log(1)
    var that = this
    var value = that.data.tempFilePath; // 图片路径
    if (value != undefined && value != "") {
      wx.saveImageToPhotosAlbum({
        filePath: value,
        success: (res) => {
          wx.showToast({
            title: "已保存到相册",
            icon: 'none',
            duration: 2000,
            mask: true
          })
        },
        fail: function(res) {
          console.error(res)
          wx.openSetting({
            success(settingdata) {
              console.error(settingdata)
              if (settingdata.authSetting["scope.writePhotosAlbum"]) {
                console.error("获取权限成功，再次点击图片保存到相册")
              } else {
                console.error("获取权限失败")
              }
            }
          })
          // }
        }
      })
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