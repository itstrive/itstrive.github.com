<?php
/*
	Author:strive
	Date:2014-4-29
	use_description:
		ajax:
		baidu_baike.php?a=get
		
		jsonp:
		baidu_baike.php?a=get&cb=xxx
		
		return [{title:'xxx', href:'xxx',content:'xxx',img:'xxx'},{},{}];
*/

$data=array(array('title' => '琼瑶','href' => 'http://baike.baidu.com/subview/6866/4925095.htm','content' => '4月28日发布声明，称已经就侵权问题起诉于正和湖南卫视，于正回应称将尊重法律判决。', 'img' => 'http://baike.baidu.com/cms/rc/r/image/2014-04-29/25499fe2df49df4265b21a200556a0d0.jpg'),array('title' => '托福','href' => 'http://baike.baidu.com/view/1324.htm','content' => '英国不再承认国外考生托福成绩，准备留学英国的中国学生因来不及改考雅思而集体维权。', 'img' => 'http://baike.baidu.com/cms/rc/r/image/2014-04-29/d884711017f81267a62787b1936438b1.jpg'));
if(@$_GET['a']=='get'){if(@$_GET['cb']){echo $_GET['cb'].'('.json_encode($data).')';}else{echo json_encode($data);}}else{echo '{error:"您访问的接口不存在"}';}
?>