<?php
if(!defined('IN_KKFRAME')) exit();
?>
<!DOCTYPE html>
<html>
<head>
<title>登录 - 贴吧签到助手</title>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<meta name="HandheldFriendly" content="true" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
<meta name="author" content="Panni_007" />
<meta name="copyright" content="Panni_Sec" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<link rel="stylesheet" href="./style/main.css?version=<?php echo VERSION; ?>" type="text/css" />
</head>
<body>
<div class="wrapper" id="page_login">
<div class="center-box">
<h1>登录贴吧签到助手</h1>
<form method="post" action="member.php?action=login">
<div class="login-info">
<p>用户名：<input type="text" name="username" placeholder="用户名" required /></p>
<p>密　码：<input type="password" name="password" placeholder="密　码" required /></p>
<p>(此账号仅用于登陆代签系统，不同于百度通行证)</p>
</div>
<p class="btns clearfix">
<span class="float-left"><a href="member.php?action=register" class="tip-text">注册</a> &nbsp; <a href="member.php?action=find_password" class="tip-text">找回密码</a></span>
<input type="submit" value="登录" />
</p>
</form>
</div>
<p class="copyright">当前版本：<?php echo VERSION; ?> <?php if(MCACHE::isAvailable()) echo '- Memcached '; ?>- <br>Designed by <a href="http://www.panni007.com" target="_blank">Panni_007</a>. 2013 &copy; <a href="http://www.panni007.com" target="_blank">Panni_Sec</a><br>请勿擅自修改程序版权信息或将本程序用于商业用途！</p>
</div>
</body>
</html>