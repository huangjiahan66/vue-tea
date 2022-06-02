var express = require("express");
var router = express.Router();
var connection = require("../db/sql.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//查询商品id的数据
router.get('/api/goods/id',function(req,res,next){
	let id = req.query.id;
	connection.query('select * from goods_list where id='+id+'',function(error,results){
		if( error ) throw error;
		res.json({
			code:0,
			data:results[0]
		})
	})
})



//分类的接口
router.get("/api/goods/list", function (req, res, next) {
  res.send({
    code: 0,
    data: [
      {
        //一级
        id: 0,
        name: "推荐",
        data: [
          {
            //二级
            id: 0,
            name: "推荐",
            list: [
              //三级
              {
                id: 0,
                name: "铁观音",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 1,
                name: "功夫茶具",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 3,
                name: "茶具电器",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 4,
                name: "紫砂壶",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 5,
                name: "龙井",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 6,
                name: "武夷岩茶",
                imgUrl: "./images/list1.jpeg",
              },
            ],
          },
        ],
      },
      {
        //一级
        id: 1,
        name: "绿茶",
        data: [
          {
            //二级
            id: 0,
            name: "绿茶",
            list: [
              //三级
              {
                id: 0,
                name: "龙井",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 1,
                name: "碧螺春",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 3,
                name: "雀舌",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 4,
                name: "安吉白茶",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 5,
                name: "六安瓜片",
                imgUrl: "./images/list1.jpeg",
              },
            ],
          },
        ],
      },
      {
        //一级
        id: 2,
        name: "乌龙",
        data: [
          {
            //二级
            id: 0,
            name: "乌龙",
            list: [
              //三级
              {
                id: 0,
                name: "龙井",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 1,
                name: "碧螺春",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 3,
                name: "雀舌",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 4,
                name: "安吉白茶",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 5,
                name: "六安瓜片",
                imgUrl: "./images/list1.jpeg",
              },
            ],
          },
        ],
      },
      {
        //一级
        id: 3,
        name: "红茶",
        data: [
          {
            //二级
            id: 0,
            name: "红茶",
            list: [
              //三级
              {
                id: 0,
                name: "龙井",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 1,
                name: "碧螺春",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 3,
                name: "雀舌",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 4,
                name: "安吉白茶",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 5,
                name: "六安瓜片",
                imgUrl: "./images/list1.jpeg",
              },
            ],
          },
        ],
      },
      {
        //一级
        id: 4,
        name: "白茶",
        data: [
          {
            //二级
            id: 0,
            name: "白茶",
            list: [
              //三级
              {
                id: 0,
                name: "龙井",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 1,
                name: "碧螺春",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 3,
                name: "雀舌",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 4,
                name: "安吉白茶",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 5,
                name: "六安瓜片",
                imgUrl: "./images/list1.jpeg",
              },
            ],
          },
        ],
      },
      {
        //一级
        id: 5,
        name: "普洱",
        data: [
          {
            //二级
            id: 0,
            name: "普洱",
            list: [
              //三级
              {
                id: 0,
                name: "龙井",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 1,
                name: "碧螺春",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 3,
                name: "雀舌",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 4,
                name: "安吉白茶",
                imgUrl: "./images/list1.jpeg",
              },
              {
                id: 5,
                name: "六安瓜片",
                imgUrl: "./images/list1.jpeg",
              },
            ],
          },
        ],
      },
    ],
  });
});

//查询商品数据接口
router.get("/api/goods/shopList", function (req, res, next) {
  //前端给后端的数据
  let [searchName, orderName] = Object.keys(req.query);
  let [name, order] = Object.values(req.query);

  connection.query(
    'select * from goods_list where name like "%' +
      name +
      '%" order by ' +
      orderName +
      " " +
      order +
      "",
    function (error, results) {
      res.send({
        code: 0,
        data: results,
      });
    }
  );
});

//首页铁观音的数据
router.get("/api/index_list/2/data/1", function (req, res, next) {
  res.send({
    code: 0,
    data: [
      {
        id: 1,
        type: "adList",
        data: [
          {
            id: 1,
            imgUrl: "./images/tgy.jpeg",
          },
          {
            id: 2,
            imgUrl: "./images/tgy.jpeg",
          },
        ],
      },
      {
        id: 1,
        type: "iconsList",
        data: [
          {
            id: 1,
            title: "自饮茶",
            imgUrl: "./images/icons1.png",
          },
          {
            id: 2,
            title: "茶具",
            imgUrl: "./images/icons2.png",
          },
          {
            id: 3,
            title: "茶礼盒",
            imgUrl: "./images/icons3.png",
          },
          {
            id: 4,
            title: "领福利",
            imgUrl: "./images/icons4.png",
          },
          {
            id: 5,
            title: "官方验证",
            imgUrl: "./images/icons5.png",
          },
        ],
      },
      {
        id: 3,
        type: "likeList",
        data: [
          {
            id: 1,
            imgUrl: "./images/like.jpeg",
            name: "建盏茶具套装 红色芝麻毫 12件套",
            price: 299,
          },
          {
            id: 2,
            imgUrl: "./images/like.jpeg",
            name: "建盏茶具套装 红色芝麻毫 12件套",
            price: 299,
          },
          {
            id: 3,
            imgUrl: "./images/like.jpeg",
            name: "建盏茶具套装 红色芝麻毫 12件套",
            price: 299,
          },
        ],
      },
    ],
  });
});
//首页大红袍的数据
router.get("/api/index_list/1/data/1", function (req, res, next) {
  res.send({
    code: 0,
    data: [
      {
        id: 1,
        type: "adList",
        data: [
          {
            id: 1,
            imgUrl: "./images/dhp.jpeg",
          },
          {
            id: 2,
            imgUrl: "./images/dhp.jpeg",
          },
        ],
      },
      {
        id: 2,
        type: "likeList",
        data: [
          {
            id: 1,
            imgUrl: "./images/like.jpeg",
            name: "建盏茶具套装 红色芝麻毫 12件套",
            price: 299,
          },
          {
            id: 2,
            imgUrl: "./images/like.jpeg",
            name: "建盏茶具套装 红色芝麻毫 12件套",
            price: 299,
          },
          {
            id: 3,
            imgUrl: "./images/like.jpeg",
            name: "建盏茶具套装 红色芝麻毫 12件套",
            price: 299,
          },
        ],
      },
    ],
  });
});
//首页推荐的数据
router.get("/api/index_list/0/data/1", function (req, res, next) {
  res.send({
    code: 0,
    data: {
      topBar: [
        { id: 0, label: "推荐" },
        { id: 1, label: "大红袍" },
        { id: 2, label: "铁观音" },
        { id: 3, label: "绿茶" },
        { id: 4, label: "普洱" },
        { id: 5, label: "茶具" },
        { id: 6, label: "花茶" },
      ],
      data: [
        //这是swiper
        {
          id: 0,
          type: "swiperList",
          data: [
            { id: 0, imgUrl: "./images/swiper1.jpeg" },
            { id: 1, imgUrl: "./images/swiper2.jpeg" },
            { id: 3, imgUrl: "./images/swiper3.jpeg" },
          ],
        },
        //这是icons
        {
          id: 1,
          type: "iconsList",
          data: [
            {
              id: 1,
              title: "自饮茶",
              imgUrl: "./images/icons1.png",
            },
            {
              id: 2,
              title: "茶具",
              imgUrl: "./images/icons2.png",
            },
            {
              id: 3,
              title: "茶礼盒",
              imgUrl: "./images/icons3.png",
            },
            {
              id: 4,
              title: "领福利",
              imgUrl: "./images/icons4.png",
            },
            {
              id: 5,
              title: "官方验证",
              imgUrl: "./images/icons5.png",
            },
          ],
        },
        //爆款推荐
        {
          id: 3,
          type: "recommendList",
          data: [
            {
              id: 1,
              name: "龙井1號铁罐250g",
              content: "鲜爽甘醇 口粮首选",
              price: "68",
              imgUrl: "./images/recommend.jpeg",
            },
            {
              id: 2,
              name: "龙井1號铁罐250g",
              content: "鲜爽甘醇 口粮首选",
              price: "68",
              imgUrl: "./images/recommend.jpeg",
            },
          ],
        },
        //猜你喜欢
        {
          id: 4,
          type: "likeList",
          data: [
            {
              id: 1,
              imgUrl: "./images/goods1.jpg",
              name: "武夷山高级大红袍2号",
              price: 238,
            },
            {
              id: 2,
              imgUrl: "./images/goods2.jpg",
              name: "武夷山灰芽花香金骏眉3号",
              price: 26,
            },
            {
              id: 3,
              imgUrl: "./images/goods3.jpg",
              name: "绿茶 远致龙井3号",
              price: 118,
            },
            {
              id: 4,
              imgUrl: "./images/goods4.jpg",
              name: "明前春茶  绿茶 龙井",
              price: 98,
            },
        
          ],
        },
      ],
    },
  });
});

module.exports = router;
