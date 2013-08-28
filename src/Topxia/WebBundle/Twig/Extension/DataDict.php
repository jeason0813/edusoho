<?php
namespace Topxia\WebBundle\Twig\Extension;

class DataDict
{
	private static $dict = array(
		'courseStatus' => array(
			'draft' => '未发布',
			'published' => '已发布',
			'closed' => '已关闭'
		),
		'courseStatus:html' => array(
			'draft' => '<span class="text-muted">未发布</span>',
			'published' => '<span class="text-success">已发布</span>',
			'closed' => '<span class="text-danger">已关闭</span>'
		),
		'orderStatus' => array(
			'created' => '未付款',
			'paid' => '已付款',
		),
		'orderStatus:html' => array(
			'created' => '<span class="text-muted">未付款</span>',
			'paid' => '<span class="text-success">已付款</span>',
		),
		'payment' => array(
			'alipay' => '支付宝'
		),
		'threadType' => array(
			'discussion'=> '话题',
			'question' => '问答',
		),
		'contentType' => array(
            'article' => '文章',
            'activity' => '活动',
            'page' => '页面',
        ),
        'contentStatus' => array(
            'published' => '已发布',
            'unpublished' => '未发布',
            'trash' => '回收站',
    	),
        'contentStatus:html' => array(
            'published' => '<span class="text-success">已发布</span>',
            'unpublished' => '<span class="text-muted">未发布</span>',
            'trash' => '<span class="text-warning">回收站</span>',
    	),
    	'lessonType'=> array(
    		'video' => '视频',
    		'audio' => '音频',
    		'text' => '图文'
		),
		'userRole' => array(
			'ROLE_USER' => '会员',
			'ROLE_TEACHER' => '老师',
			'ROLE_ADMIN' => '管理员',
			'ROLE_SUPER_ADMIN' => '超级管理员'
		),
	);

	public static function dict($type)
	{
		return isset(self::$dict[$type]) ? self::$dict[$type] : array();
	}

	public static function text($type, $key)
	{
		if (!isset(self::$dict[$type])) {
			return null;
		}

		if (!isset(self::$dict[$type][$key])) {
			return null;
		}

		return self::$dict[$type][$key];
	}

}