//self.js 个人中心首页
//获取应用实例
var app = getApp()
Page({
    data: {
        motto: '欢 迎 来 到 BookShare！',
        userInfo: {},
        loginStatus : getApp().globalData.loginStatus,
        auth : 0
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo,
            })
        })
        console.log(this.data)
    },
    onReady:function(){
        
    },
    login:function(){
        //登录及个人信息切换
        if (this.data.loginStatus == true){
            wx.navigateTo({
                url: '../selfInfo/selfInfo',
            })
            console.log(JSON.stringify(this.data.userInfo))
        }else{
            wx.navigateTo({
                url: '../login/login',
            })
        }
        
    },

    openBookList:function(event){
        //打开个人中心图书列表
        console.log(event)
        var index = event.currentTarget.dataset.index;
        wx.navigateTo({
            url: '../bookList/bookList?index=' + index,
        })
    },

    openOpinion:function(){
        //打开意见反馈
        wx.navigateTo({
            url: '../opinion/opinion',
        })
    },

    aboutUs:function(){
        //打开关于我们
        wx.navigateTo({
            url: '../aboutUs/aboutUs',
        })
    }
})
