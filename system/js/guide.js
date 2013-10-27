$('#content-guide').html('');
var guide_html, siteurl;
siteurl = location.href;
if(siteurl.indexOf('#') >= 0) siteurl = siteurl.substring(0, siteurl.indexOf('#'));
guide_html = '';
guide_html += '<h2>贴吧签到助手 配置向导</h2>';
guide_html += '<div id="guide_pages">';
guide_html += '<div id="guide_page_1">';
guide_html += '<p>Hello，欢迎使用 贴吧签到助手~</p><br>';
guide_html += '<p><b>这是一款开源软件，作者 <a href="http://www.zmy.im" target="_blank">Panni_007</a>，你可以从 Github 上下载到这个项目的全部源代码。</b></p>';
guide_html += '<p>如果有人向您兜售本程序，麻烦您给个差评。</p><br>';
guide_html += '<p>配置签到助手之后，我们会在每天的 0:30 左右为您自动签到。</p>';
guide_html += '<p>签到过程不需要人工干预，您可以选择签到之后发送一封邮件报告到您的注册邮箱。</p><br>';
guide_html += '<p>准备好了吗？点击下面的“下一步”按钮开始配置吧</p>';
guide_html += '<p class="btns"><button onclick="load_guide_page(2);">下一步 &raquo;</button></p>';
guide_html += '</div>';
guide_html += '<div id="guide_page_2" class="hidden">';
guide_html += '<p>首先，你需要绑定你的百度账号。</p><br>';
guide_html += '<p>我们需要使用你的账号信息登陆贴吧，您可以选择自动或是手动绑定你的百度账号。</p>';
guide_html += '<p>为了确保账号安全，我们只储存你的百度 Cookie，不会保存你的账号密码信息。</p>';
guide_html += '<p>你可以通过简单的修改密码来让这些 Cookie 失效。</p><br>';
guide_html += '<p>请选择一种绑定方式：</p>';
guide_html += '<p><label><input type="radio" name="bind_type" id="bind_by_account" /> 登陆百度通行证绑定 (更简单, 测试中)</label></p>';
guide_html += '<p><label><input type="radio" name="bind_type" id="bind_by_cookie" /> 手动输入 Cookie</label></p>';
guide_html += '<div id="bind_by_account" class="hidden">';
guide_html += '<form method="post" action="http://sign.ikk.me/api/login.php?callback='+siteurl+'&formhash='+formhash+'" target="_blank">';
guide_html += '<p>百度账号：<input type="text" name="username" placeholder="百度通行证" required value="" /></p>';
guide_html += '<p>百度密码：<input type="password" name="password" placeholder="百度通行证密码" required value="" /></p>';
guide_html += '<p><input type="submit" value="绑定百度账号" /></p>';
guide_html += '</form>';
guide_html += '</div>';
guide_html += '<div id="bind_by_cookie" class="hidden"></div>';
guide_html += '<p class="bind_btn hidden"><button onclick="load_guide_page(3);">我已经绑定好了</button></p>';
guide_html += '</div>';
guide_html += '<div id="guide_page_3" class="hidden">';
guide_html += '<p>一切准备就绪~</p><br>';
guide_html += '<p>我们已经成功接收到你百度账号信息，自动签到已经准备就绪。</p>';
guide_html += '<p>您可以点击 <a href="#setting">高级设置</a> 更改邮件设定，或更改其他附加设定。</p><br>';
guide_html += '<p>感谢您的使用！</p><br>';
guide_html += '<p>程序作者：Panni_007 (<a href="http://www.zmy.im target="_blank">http://www.zmy.im</a>)</p>';
guide_html += '</div>';
guide_html += '</div>';

function load_guide_page(pageid){
	$('#guide_pages>div').addClass('hidden');
	$('#guide_page_'+pageid).removeClass('hidden');
}

$('#content-guide').html(guide_html);
$('div#bind_by_cookie').html($('.tab-cookie').html());
$('div#bind_by_cookie h2').remove();
$('input#bind_by_account').click(function(){
	$('#guide_page_2>div').addClass('hidden');
	$('div#bind_by_account').removeClass('hidden');
	$('#guide_page_2 .bind_btn').removeClass('hidden');
});
$('input#bind_by_cookie').click(function(){
	$('#guide_page_2>div').addClass('hidden');
	$('div#bind_by_cookie').removeClass('hidden');
	$('#guide_page_2 .bind_btn').removeClass('hidden');
});