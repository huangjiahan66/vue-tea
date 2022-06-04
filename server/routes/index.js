var express = require("express");
var router = express.Router();
var connection = require("../db/sql.js");
var user = require('../db/userSql.js');
var QcloudSms = require("qcloudsms_js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});


//增加一个用户
router.post('/api/addUser',function(req,res,next){
	
	let params = {
		userTel : req.body.phone
	}
	//查询用户是否存在
	connection.query( user.queryUserTel( params ) ,function(error,results){
		if(error) throw error;
		//用户存在
		if( results.length > 0 ){
			res.send({
				code:200,
				data:{
					success:true,
					msg:'登录成功',
					data:results[0]
				}
			})
		}else{
			//不存在，新增一条数据
			connection.query( user.inserData ( params ),function(err,result){
				connection.query( user.queryUserTel( params ) , function(e,r){
					res.send({
						code:200,
						data:{
							success:true,
							msg:'登录成功',
							data:r[0]
						}
					})
				})
			})
		}
	})
})


// 发送短信验证码
router.post('/api/code', function (req, res, next) {
	let tel = req.body.phone

	// 短信应用SDK AppID
	var appid = 1400187558 // SDK AppID是1400开头

	// 短信应用SDK AppKey
	var appkey = 'dc9dc3391896235ddc2325685047edc7'

	// 需要发送短信的手机号码
	var phoneNumbers = [tel]

	// 短信模板ID，需要在短信应用中申请
	var templateId = 285590 // NOTE: 这里的模板ID`7839`只是一个示例，真实的模板ID需要在短信控制台中申请

	// 签名
	var smsSign = '三人行慕课' // NOTE: 这里的签名只是示例，请使用真实的已申请的签名, 签名参数使用的是`签名内容`，而不是`签名ID`

	// 实例化QcloudSms
	var qcloudsms = QcloudSms(appid, appkey)

	// 设置请求回调处理, 这里只是演示，用户需要自定义相应处理回调
	function callback(err, ress, resData) {
		if (err) {
			console.log('err: ', err)
		} else {
			res.send({
				code: 200,
				data: {
					success: true,
					data: ress.req.body.params[0],
				},
			})
		}
	}

	var ssender = qcloudsms.SmsSingleSender()
	var params = [Math.floor(Math.random() * (9999 - 1000)) + 1000]
	ssender.sendWithParam(
		86,
		phoneNumbers[0],
		templateId,
		params,
		smsSign,
		'',
		'',
		callback
	) // 签名参数不能为空串
})




// 密码登录
router.post('/api/login',function(req,res,next){
	//后端要接收前端传递过来的值
	let params = {
		userTel : req.body.userTel,
		userPwd : req.body.userPwd
	};
	
	//查询用户手机号是否存在
	connection.query( user.queryUserTel(params) ,function(error,results){
		//手机号存在 
		if( results.length > 0 ){
			connection.query( user.queryUserPwd( params ) ,function(err,result){
				if(  result.length > 0 ){
					//手机号和密码都对
					res.send({
						code:200,
						data:{
							success:true,
							msg:'登录成功',
							data:result[0]
						}
					})
				}else{
					//密码不对
					res.send({
						code:302,
						data:{
							success:false,
							msg:'密码不正确'
						}
					})
				}
			})
			
		}else{
			//不存在
			res.send({
				code:301,
				data:{
					success:false,
					msg:'手机号不存在'
				}
			})
		}
	})
})






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
