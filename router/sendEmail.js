
function sendEmail(emailNum){
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
	// console.log(returnText)；

	let mailOptions = {
		from:'"秃了，也变强了，你说是吧，琦玉老师" <3461792375@qq.com>',
		// from:'goodeveningboss@163.com',
		// from:'591742716@qq.com',
		to:emailNum,
		subject:'验证码', //邮件名字
		html:`<h1>${returnText}</h1>` // 邮件内容

	};

	transporter.sendMail(mailOptions, (error,info)=>{
		if(error)
		{
			return console.log(error);
		}

		console.log('Message sent',info.messageId);
	})
}

module.exports = sendEmail;

