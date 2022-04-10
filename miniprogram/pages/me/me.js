// miniprogram/pages/me/me.js
var app = getApp();
Page({

  actioncnt: function() {        
    wx.showActionSheet({            
      itemList:  ['群聊',  '好友',  '朋友圈'],
      success: function(res)  {
        console.log(res.tapIndex)
      },
      fail: function(res)  {
        console.log(res.errMsg)
      }
    })   
  },
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo:false,
    canIUseGetUserProfile: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  },

  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo:true
        })
        
      }
      
    })
  },
  /**
   * 收藏列表
   */
  onCollectClick:function(event){
    wx.navigateTo({
      url: '../collect/collect',
    })
  },
  /**
   * 发布历史
   */
  onHistoryClick:function(event){
    wx.navigateTo({
      url: '../history/history',
    })
  },

  /**
   * 提交意见
   */
  onAdvanceClick:function(event){
    wx.navigateTo({
      url: '../advance/advance',
    })
  },


  clickInvitivation: function(event) {
    this.actioncnt();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(event) {
    console.log(event);
  },
 
})