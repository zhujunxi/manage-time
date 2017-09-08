//index.js
//获取应用实例
var util = require('../../utils/util.js')
Page({
  data: {
    listData:[
      { time: '07:10', text: '早上帮刘奶奶浇花', status: 0 },
      { time: '12:05', text: '中午帮张叔叔种树', status: 0 },
      { time: '15:35', text: '下午帮刘哥哥盖房子', status: 1 },
      { time: '20:30', text: '晚上帮李妈妈做饭', status: 1 },
      { time: '23:08', text: '半夜哄小妹妹睡觉', status: 1 },

    ],
    swiperIndex:0
  },
  //事件处理函数
  handle: function(e) {
    var index = e.currentTarget.dataset.index;
    
    var listData = this.data.listData;
    for (var i in listData){
      if (i == index){
        console.log(listData[i].time)
        listData[i].status = (listData[i].status == 1 ? 0 : 1)
      }
    }
    this.setData({
      listData: listData
    })
  },
  onLoad: function(){
    var self = this
    this.setData({
      dateList: (wx.getStorageSync('logs') || []).map(function(item){
        return util.formatTime(new Date(item))
      })
    })
    wx.pageScrollTo({
      scrollTop: 160
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#4877f3',
      animation: {
        duration: 400,
        timingFunc: 'easeInOut'
      }
    })

    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
        self.setData({
          listHeight: res.windowHeight - 160
        })
      }
    })
  },
  swiperChange(e){
    console.log(e)
    this.setData({
      swiperIndex: e.detail.current
    })
  },
  changeIndex(e){
    var index = e.currentTarget.dataset.index;
    this.setData({
      swiperIndex: index
    })
  }

//  onLoad: function () {
    // console.log('onLoad')
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
//  }
})
