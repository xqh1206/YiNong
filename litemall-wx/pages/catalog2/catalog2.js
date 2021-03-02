Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,//左边菜单的当前显示值
    toView: 'menu-0', //滚动到某个菜单元素
    foodListHeights:[],//菜单对应右边商品的元素高度列表
    scrollTop:0,//右边商品滚动条滚动到哪
    goods: [
      {
        "name": "种子",
        "type": -1,
        "foods": [
          {
            "name": "万盛68",
            "price": "13.23-75",           
            "info": "高产大田玉米种籽/抗旱",
            "icon": "/static/images/1.jpg",
            "url":"/pages/detail/detail"
          },
          {
            "name": "高龙L2",
            "price": "15.23-90",
            
            "info": "高产大田玉米种籽/抗旱",
           
            "icon": "/static/images/1.jpg",
          },
          {
            "name": "万盛68",
            "price": "13.23-75",
            
            "info": "高产大田玉米种籽/抗旱",
           
            "icon": "/static/images/1.jpg",
          },
          {
            "name": "万盛68",
            "price": "13.23-75",
            
            "info": "高产大田玉米种籽/抗旱",
           
            "icon": "/static/images/1.jpg",
          },
          {
            "name": "万盛68",
            "price": "13.23-75",
            
            "info": "高产大田玉米种籽/抗旱",
           
            "icon": "/static/images/1.jpg",
          },
         
          
          
        ]
      },
      {
        "name": "化肥",
        "type": 2,
        "foods": [
          {
            "name": "化肥",
            "price": "48",
            
            "info": "英国进口草莓黄瓜西瓜水溶肥料",
      
            "icon": "/static/images/3.jpg",
          },
          {
            "name": "化肥",
            "price": "48",
            
            "info": "英国进口草莓黄瓜西瓜水溶肥料",
      
            "icon": "/static/images/3.jpg",
          },
          {
            "name": "化肥",
            "price": "48",
            
            "info": "英国进口草莓黄瓜西瓜水溶肥料",
      
            "icon": "/static/images/3.jpg",
          },
          {
            "name": "化肥",
            "price": "48",
            
            "info": "英国进口草莓黄瓜西瓜水溶肥料",
      
            "icon": "/static/images/3.jpg",
          },
         
        ]
      },
      {
        "name": "农药",
        "type": 3,
        "foods": [{
          "name": "农药",
          "price": "23",           
          "info": "杀虫剂杀虫剂农药",
          "icon": "/static/images/2.jpg",
          "url":"/pages/detail/detail"
        },
        {
          "name": "农药",
          "price": "23",           
          "info": "杀虫剂杀虫剂农药",
          "icon": "/static/images/2.jpg",
          "url":"/pages/detail/detail"
        },
        {
          "name": "农药",
          "price": "23",           
          "info": "杀虫剂杀虫剂农药",
          "icon": "/static/images/2.jpg",
          "url":"/pages/detail/detail"
        },
        {
          "name": "农药",
          "price": "23",           
          "info": "杀虫剂杀虫剂农药",
          "icon": "/static/images/2.jpg",
          "url":"/pages/detail/detail"
        },
        {
          "name": "农药",
          "price": "23",           
          "info": "杀虫剂杀虫剂农药",
          "icon": "/static/images/2.jpg",
          "url":"/pages/detail/detail"
        },
         
        ]
      },
      {
        "name": "农用具",
        "type": 4,
        "foods": [{
          "name": "万盛68",
          "price": "13.23-75",           
          "info": "高产大田玉米种籽/抗旱",
          "icon": "/static/images/1.jpg",
          "url":"/pages/detail/detail"
        },
        {
          "name": "高龙L2",
          "price": "15.23-90",
          
          "info": "高产大田玉米种籽/抗旱",
         
          "icon": "/static/images/1.jpg",
        },
        {
          "name": "万盛68",
          "price": "13.23-75",
          
          "info": "高产大田玉米种籽/抗旱",
         
          "icon": "/static/images/1.jpg",
        },
        {
          "name": "万盛68",
          "price": "13.23-75",
          
          "info": "高产大田玉米种籽/抗旱",
         
          "icon": "/static/images/1.jpg",
        },
        {
          "name": "万盛68",
          "price": "13.23-75",
          
          "info": "高产大田玉米种籽/抗旱",
         
          "icon": "/static/images/1.jpg",
        },
       
         
        ]
      },
      
        
      
    ]
  }, 
  /**
   * 跳到某一个菜单元素
   */
  scrollToMenu: function (e){ 
    var that=this;
    let current = e.currentTarget.dataset.current; 
    let toViewString = 'menu-' + (current > 5 ? current - 5 : 0); 
    that.setData({
      currentIndex: current,
      toView: toViewString,
      scrollTop: that.data.foodListHeights[current]
    });  
  },
  /**
   * 监听商品滚动事件
   */
  scrollFoods: function (e) {
    var that=this;
    let currentY=e.detail.scrollTop;
    for (let i = 0; i < that.data.foodListHeights.length - 1; i++) {
      let heightBottom = that.data.foodListHeights[i];
      let heightTop = that.data.foodListHeights[i + 1];
      //对滑动后currentY值不足的情况进行修正
      let diff = Math.abs(currentY - heightTop); 
      //判断currentY当前所在的区间
      if (currentY < heightTop && currentY >= heightBottom) {
        let toViewString = 'menu-' + (i > 5 ? i - 5 : 0);
        that.setData({
          currentIndex: i,
          toView: toViewString
        }); 
      }
    }
  }, 
  
  /**
   * 生命周期函数--监听页面加载后执行事件
   */
  onLoad: function (options) {
    const that = this; 
    let height = 0;
    const _foodListHeights=[];
    _foodListHeights.push(height);  
    const query = wx.createSelectorQuery();
    query.select('.foods-wrapper').boundingClientRect();
    query.selectAll('.food-list-hook').boundingClientRect();  
    query.exec(function (res) { 
      //height = height - res[0].height; 
      for(let i=0;i<res[1].length;i++){
        height += res[1][i].height;
        _foodListHeights.push(height); 
      } 
      that.setData({
        foodListHeights: _foodListHeights
      });
    }) 
  },
  godetail: function() {
    wx.navigateTo({
      url: '/pages/detail/detail',
    });
}
})
