// page/component/new-pages/user/address/address.js
var app = getApp();
var util = require('../../utils/util.js');

Page({
    data:{
        loading: true,
        imgList: [],
        date: '',
        limitDate: '',
        retDate: '',
        operation: true,
        imgMaxNumber: 4,
        username: app.globalData.username,
        usermajor: app.globalData.usermajor,
        stuid: app.globalData.stuid,
        phone: '19921940776',
        commitmentRadio: false
    },
    onLoad(){
        this.getDate()
        this.rmLoading()
    },
    rmLoading() {
        var that = this;
        setTimeout(function() {
          that.setData({
            loading: false
          });
        }, 1500);
    },
    toSign: function() {
        this.setData({
            operation: true
        })
        console.log(124)
    },
    toFlow: function() {
        this.setData({
            operation: false
        })
    },
    bindPhone: function(e){
        console.log(e.detail.value);
        this.data.phone = e.detail.value;
    },
    bindMoreInfo: function(e){
        console.log(e.detail.value);
        this.data.phone = e.detail.value;
    },
    bindRetDate: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          retDate: e.detail.value
        })
      },
    getDate: function() {
        let day = util.formatTime(new Date());
        let limitDate = util.limitDate(new Date());
        console.log(limitDate)
        this.setData({
            date: day,
            limitDate: limitDate
        })
    },
    commitmentRadioListen: function() {
        this.setData({
            commitmentRadio: !this.data.commitmentRadio
        })
    },
    ChooseImage() {
        wx.chooseImage({
            count: this.data.imgMaxNumber, 
            sizeType: 'compressed', //压缩图
            sourceType: ['album'], //从相册选择
            success: (res) => {
            if (this.data.imgList.length != 0) {
                this.setData({
                    imgList: this.data.imgList.concat(res.tempFilePaths)
                })
            } else {
                this.setData({
                    imgList: res.tempFilePaths
                })
            }
            }
        });
    },
    ViewImage(e) {
        wx.previewImage({
            urls: this.data.imgList,
            current: e.currentTarget.dataset.url
        });
    },
    DelImg(e) {
        wx.showModal({
            title: '确定删除这张图片吗？',
            cancelText: '再看看',
            confirmText: '确定',
            success: res => {
                if (res.confirm) {
                    this.data.imgList.splice(e.currentTarget.dataset.index, 1);
                    this.setData({
                        imgList: this.data.imgList
                    })
                }
            }
        })
    },
    uploadImgs(pInfo) {
        console.log(this.data.imgList)
    },
    radiochange:function(e){
         // this.data.info['gender'] = Number(e.detail.value)
    },
    formSubmit(){

    }
})