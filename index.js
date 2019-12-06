let express = require('express');
let path = require('path');
let url = require('url');
let querystring = require('querystring');
let bodyParser = require('body-parser');
let app = express();

let sendEmail = require('./router/sendEmail')

// 跨域访问
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1');
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
//  });



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/testNode', (req, res) => {
    res.send('sss')


})


app.post('/login', (req, res) => {
    // console.log(req.body);
    let message = req.body; 
    if(message.username == "boss" && message.password == '321')
    {
    	res.send('ookk');
    }else{
    	res.send('nnoo')
    }
});

app.post('/sentemail',(req,res)=>{
    // sendEmail(req.body.email);

    let nodemailer = require('nodemailer');
	let transporter = nodemailer.createTransport({
		service:'qq',
		// service:'163',
		port:465,
		secureConnection:true, //使用SSL
		// auth:{
		// 	user:'591742716@qq.com',
		// 	pass:'fkgcjluclbdbbajd',
		// }
		// auth:{
		// 	user:'goodeveningboss@163.com',
		// 	pass:'zhouye666'
		// }
		auth:{
			user:'3461792375@qq.com',
			pass:'grdwquaxpgmcchcc'
		}
	});
	// 生成验证码
	let dat = (new Date().getTime()).toString();

	let str = '12345dfgh67890qwe3rtyuio0pa367sdfgh48jklzx47lo4cvbnm';
	let randomNum = function(min,max){
		return Math.floor(Math.random()*(max-min)+min)
	}

	let returnText = '';
	for(let i=0;i<4;i++)
	{
		let txt = str[randomNum(0,str.length)];
		returnText+=txt;
	}
	// console.log(returnText); //验证码

	let mailOptions = {
		from:'"秃了，也变强了，你说是吧，琦玉老师" <3461792375@qq.com>',
		// from:'goodeveningboss@163.com',
		// from:'591742716@qq.com',
		to:req.body.email,
		subject:'验证码', //邮件名字
		html:`<h1>${returnText}</h1>` // 邮件内容

	};

	transporter.sendMail(mailOptions, (error,info)=>{
		if(error)
		{
			return console.log(error);
		}else{
          console.log('Message sent',info.messageId);  
          res.send({code:200,verfiycode:returnText})
        }

		
	})

    
    


})

app.listen(3000,function(){
    console.log('running at port 3000')
})