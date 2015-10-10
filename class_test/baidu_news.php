<?php
/*
	Author:strive
	Date:2014-4-29
	use_description:
		ajax:
		baidu_news.php?a=get
		
		jsonp:
		baidu_news.php?a=get&cb=xxx
		
		return [{title:'xxx', href:'xxx'},{},{}];
*/

$data=array(array('title' => '习近平十八大后首赴新疆 视察喀什军队武警','href' => 'http://www.chinanews.com/gn/2014/04-28/6115267.shtml'),array('title' => '借用戚家军鼓励民警','href' => 'http://news.163.com/14/0428/23/9QV571B40001124J.html?hl'),array('title' => '疆村民为习近平戴上维吾尔族花帽','href' => 'http://news.cntv.cn/2014/04/29/VIDE1398733304822822.shtml'),array('title' => '李克强提黄金水道战略 谋长江经济带促全局发展','href' => 'http://www.chinanews.com/gn/2014/04-28/6115263.shtml'),array('title' => '建设长江经济带 为中国经济提供重要支撑','href' => 'http://www.gov.cn/xinwen/2014-04/28/content_2668253.htm'),array('title' => '网评：让长江流域舞起来','href' => 'http://www.gov.cn/xinwen/2014-04/28/content_2668173.htm'),array('title' => '中移动“诊断书”：进入下滑通道 离亏本不远','href' => 'http://baijia.baidu.com/?tn=topic&topicid=x1c383ZW'),array('title' => '正方：中国移动将会重新崛起','href' => 'http://baijia.baidu.com/?tn=topic&topicid=x1c383ZW'),array('title' => '反方：中移动结束黄金10年','href' => 'http://suyi.baijia.baidu.com/article/13666'));
if(@$_GET['a']=='get'){if(@$_GET['cb']){echo $_GET['cb'].'('.json_encode($data).')';}else{echo json_encode($data);}}else{echo '{error:"您访问的接口不存在"}';}
?>