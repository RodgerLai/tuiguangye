<!DOCTYPE>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>发送状态</title>
	</head>
	<body>
		<?php
 			 ini_set('date.timezone','Asia/Shanghai');
			require_once "email.class.php";
			//SMTP服务器 
			$smtpserver = "ssl://smtp.qq.com";
			//SMTP端口号  阿里云服务器部署不支持25端口的smtp服务，如126邮箱   
			$smtpserverport = 465;
			//SMTP发邮件的邮箱
			$smtpusermail = "xx@qq.com";
			//发给谁
			$smtpemailto = "xxxx@qq.com";
			//SMTP用户名
			$smtpuser = "xxxx@qq.com";
			//SMTP用户密码 (授权码)
			$smtppass = "xxxxxx";
			//主题
			$mailtitle = "DR100新客户信息";
			//构建内容
			$mailcontent = "名字:  ".$_POST['name']."<br>电话:   ".$_POST['phone'];
			//邮件内容为HTML格式
			$mailtype = "HTML";
			//实例化对象
			$smtp = new smtp($smtpserver,$smtpserverport,true,$smtpuser,$smtppass);
			//关闭调试信息
			$smtp->debug = true;
			//发送邮件
			$state = $smtp->sendmail($smtpemailto, $smtpusermail, $mailtitle, $mailcontent, $mailtype);
			//检查发送状态
			if($state==""){
				echo "提交失败";
			}else if(strlen($state)!=0){
			//发送成功
				echo "提交成功";
			}else{
				echo "未知错误";
			}

		?>
	</body>
</html>


