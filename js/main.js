/**
 * @author star
 */
var Main = {
	iscrolls : []
};
Main.url = 'http://game.sinreweb.com/Game/MjjInterface/';
//初始化
Main.init = function() {
	Main.ortchange(); 
    Main.number=0;
    $(document.body).on('touchmove',function(e){
		e.preventDefault?e.preventDefault():window.event.returnValue = false; 	
	})
	Main.player=new Howl({
        urls: ['images/b.mp3'],
        format: 'mp3',
        autoplay: false,
        loop: false,
        volume: 0.9,onend:function(){
        	Main.player.play();
        }
    });
	
	//解决旋转屏	 用刷新页面方法
	//绑定窗口大小修改事件，手机旋转时或隐藏搜索栏目时调用
	window.onresize = function() {
		//console.log('大小修改了')
		Main.ortchange();
		//Main.scroll();
	}	
	Main.On();	
	Main.scrolbody();
}
//计算
Main.ortchange = function(bool) {
	Main.width = $(window).width()
	Main.height = $(window).height();	
	var b=Main.width/641;
	$('.link_2').css('bottom',b*198+'px');
	$('.index_pg6').find('.in2_img3').css('bottom',b*198+'px');
}
var x=0,x2=0,y=0,y2=0;
Main.scrolbody=function(){
	
	$(document.body).get(0).addEventListener('touchstart',function(e){
		//e.preventDefault();
	    x2=0;
		x=e.touches[0].pageX;
		y=e.touches[0].pageY;
	},false);
	$(document.body).get(0).addEventListener('touchmove',function(e){
		e.preventDefault();
	    x2=e.touches[0].pageX;	
		y2=e.touches[0].pageY;
	},false)
	$(document.body).get(0).addEventListener('touchend',function(e){
		console.log(x,x2);
		if(x2==0){return }
		if(Main.number==5 && y-y2>20){
		    location.href='share.html'	
		    return ;
		}
	    if(x-x2>20  && Main.number<5){			
		    Main.number++;
			tab();
		}else if(x2-x>20 && Main.number>0){			
		    Main.number--;	
			tab2();
		}
		x=x2=0;
		//console.log(Main.number);		
	},false);
	function tab(){
	    switch(Main.number){
		    case 0:	
			    $('#page2_prev').trigger('click');		    
			    break;	
			case 1:
			    $('.inde_link_1').trigger('click');
				break;
			case 2:
			    $('#page2_next').trigger('click');
				break;
			case 3:
			    $('#page3_next').trigger('click');
				break;
		    case 4:
			    $('#page4_next').trigger('click');
				break;
			case 5:
			    $('#page5_next').trigger('click');
				break;
		}
	}
	function tab2(){
	    switch(Main.number){
			 case 0:	
			    $('#page2_prev').trigger('click');		    
			    break;	
			case 1:
			    $('#page3_prev').trigger('click');
				break;
			case 2:
			    $('#page4_prev').trigger('click');
				break;
			case 3:
			    $('#page5_prev').trigger('click');
				break;
		    case 4:
			    $('.index_pg6').removeClass('index_left0');
				$('.index_pg5').removeClass('index_left100');
				break;
			case 5:
			    $('#page5_next').trigger('click');
				break;
				
		   
		}
	}
}

//全局的事件绑定
Main.On = function() {	
	$('.inde_link_1').on('click',function(){
	    $('.index_p1').addClass('index_left100');
		$('.index_pg2').addClass('index_left0').addClass('current');	
		Main.number=1;
		 Main.player.play();
		 $('.span_mp3').show();
	});
	$('#page2_prev').on('click',function(){
		Main.number=0;
		$('.span_mp3').hide();
	    $('.index_p1').removeClass('index_left100');
		$('.index_pg2').removeClass('index_left0');	
	});
	$('#page2_next').on('click',function(){	  
	    Main.number=2;
		$('.index_pg2').addClass('index_left100');	
		$('.index_pg3').addClass('index_left0').addClass('current');
	});
	$('#page3_prev').on('click',function(){
		Main.number=1;
		$('.index_pg2').removeClass('index_left100');
	    $('.index_pg3').removeClass('index_left0');	
	});
	$('#page3_next').on('click',function(){
		Main.number=3;
	    $('.index_pg3').addClass('index_left100');
		$('.index_pg4').addClass('index_left0').addClass('current');
	});
	$('#page4_prev').on('click',function(){
		Main.number=2;
	    $('.index_pg4').removeClass('index_left0');	
		$('.index_pg3').removeClass('index_left100');
	});
	$('#page4_next').on('click',function(){
		Main.number=4;
	    $('.index_pg4').addClass('index_left100');
		$('.index_pg5').addClass('index_left0').addClass('current');
	});
	$('#page5_prev').on('click',function(){
		Main.number=3;
	    $('.index_pg5').removeClass('index_left0');	
		$('.index_pg4').removeClass('index_left100');
	});
	$('#page5_next').on('click',function(){
		Main.number=5;
	    $('.index_pg5').addClass('index_left100');
		$('.index_pg6').addClass('index_left0').addClass('current');
	});
	$('.link_2').on('click',function(){
	    location.href='share.html'	
	});
	
	$('.in2_img3').on('click',function(){
	    $(".box_feng").addClass('current');	
	});
	$('.span_mp3').on('click',function(){
	     if(!$('.span_mp3').hasClass('current')){
		        $('.span_mp3').addClass('current');
		        Main.player.play();
	    }else{
		     $('.span_mp3').removeClass('current');
		    Main.player.pause();
     	}
	});
	
}
Main.temp=function(dom,temp,obj){
	var temp=_.template(temp);
	var txt=temp(obj);
	dom.html(txt);
}
Main.runing=function(){
	$('.page_1').addClass('current');
	setTimeout(function(){
		if(game.number>0){
			$('.img3').addClass('anima');
		}	
		$('.imgjin').addClass('jigani')		
		//$('.img10').addClass('img10an')
	},2200)
	setTimeout(function(){						
		game.run();
		//game.ping(Math.random()>0.5?0:0);
	},3000)
}
Main.imgload = function(imgs) {
	
	
	
	var length = imgs.length, index = 0;
	var loadspan=document.getElementById('loadspan'),loadtxt=document.getElementById('id_load_num')	
	function load(){
		var img=new Image();
		img.src=imgs[index];
		if(img.complete){
			onload();
			return ;
		}
		img.onload=onload;
		function onload(){
			index++;
			var a = Math.floor(100 / length * index);			
			loadtxt.innerHTML=a + '%';		
			if (index == length) {	
				loadtxt.innerHTML='100%';
				setTimeout(function(){
					game.start();
					$('.page_load').addClass('current');
					setTimeout(function(){
						Main.runing();
					},800)								
				},1000)				   
			    Main.init();
			}else{
				load();
			}		
		}
	}
	load();
}
Main.imgs=['images/b_03.jpg','images/c_02.jpg','images/j1_03.jpg','images/j1_03.png','images/j2_02.jpg','images/n_0.png','images/n_1.png','images/n_2.png','images/n_3.png','images/n_4.png',
'images/n1_03.png','images/s_0.png','images/s_1.png','images/s_2.png','images/s_3.png','images/s_4.png'];

Main.share=function(id){
	$('#feng_img').on('click',function(){
	    $('.box_feng').addClass('current');	
	});
	$('.box_feng').on('click',function(){
	     $(this).removeClass('current');	
	});
}

/*-----------------------------------微信分享  页面分享--------------------------*/
var dataForWeixin={
		appId:	"",
		img:  'http://weixin.sinreweb.com/sunshine/images/f.jpg', //带加
		url:	'http://weixin.sinreweb.com/sunshine/',
		title:	'十一出行蠢萌玩法，看看你中枪了没？',
		desc:	"蠢蠢的玩法，叫你称霸十一朋友圈！",
		fakeid:	"",
};
//微信分享title img desc 绑定
Main.weixinbind=function(url,title,img,desc){		
		var onBridgeReady=function(){		
			
			// 发送给好友;
			WeixinJSBridge.on('menu:share:appmessage', function(argv){				
				WeixinJSBridge.invoke('sendAppMessage',{
					"appid":		dataForWeixin.appId,
					"img_url":		dataForWeixin.img,
					"img_width":	"120",
					"img_height":	"120",
					"link":				dataForWeixin.url,
					"desc":				dataForWeixin.desc,
					"title":			dataForWeixin.title
				}, function(res){ 
					//alert('发送好友成功')
					//get(res);
					_report(link, fakeid, 1)
				});
			});
			// 分享到朋友圈;
			WeixinJSBridge.on('menu:share:timeline', function(argv){				
				WeixinJSBridge.invoke('shareTimeline',{
				"img_url":dataForWeixin.img,
				"img_width":"120",
				"img_height":"120",
			"link":dataForWeixin.url,
				"desc":dataForWeixin.title,
				"title":dataForWeixin.title
				}, function(res){
					//get(res);
					//alert('分享到朋友圈')
	            });
			});
			// 分享到微博;
			WeixinJSBridge.on('menu:share:weibo', function(argv){				
				WeixinJSBridge.invoke('shareWeibo',{
				"content":dataForWeixin.title+' '+dataForWeixin.url,
				"url":dataForWeixin.url
				}, function(res){					
					//get(res);
					//alert('分享到微博')
	            });
			});
			// 分享到Facebook
			WeixinJSBridge.on('menu:share:facebook', function(argv){				
				WeixinJSBridge.invoke('shareFB',{
				"img_url":dataForWeixin.img,
				"img_width":"120",
				"img_height":"120",
				"link":dataForWeixin.url,
				"desc":dataForWeixin.desc,
				"title":dataForWeixin.title
				}, function(res){
					//get(res);
					//alert('分享到Facebook')
	            });
			});
		};
		if(document.addEventListener){
			document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
		}else if(document.attachEvent){
			document.attachEvent('WeixinJSBridgeReady'   , onBridgeReady);
			document.attachEvent('onWeixinJSBridgeReady' , onBridgeReady);
		}
};
Main.weixinbind();

//zepto/jquery get
Main.get = function(url, data, success) {
	$.ajax({
		type : 'get',
		url : url,
		dataType : 'jsonp',
		data : data,
		success : function(response) {
			//console.log(response);
			success(response)
		}
	})
}
/*
var jPlayerAndroidFix = (function($) {
	var fix = function(id, media, options) {
		this.playFix = false;
		this.init(id, media, options);
	};
	fix.prototype = {
		init: function(id, media, options) {
			var self = this;

			// Store the params
			this.id = id;
			this.media = media;
			this.options = options;

			// Make a jQuery selector of the id, for use by the jPlayer instance.
			this.player = $(this.id);

			// Make the ready event to set the media to initiate.
			this.player.bind($.jPlayer.event.ready, function(event) {
				// Use this fix's setMedia() method.
				self.setMedia(self.media);
			});

			// Apply Android fixes
			if($.jPlayer.platform.android) {

				// Fix playing new media immediately after setMedia.
				this.player.bind($.jPlayer.event.progress, function(event) {
					if(self.playFixRequired) {
						self.playFixRequired = false;

						// Enable the contols again
						// self.player.jPlayer('option', 'cssSelectorAncestor', self.cssSelectorAncestor);

						// Play if required, otherwise it will wait for the normal GUI input.
						if(self.playFix) {
							self.playFix = false;
							$(this).jPlayer("play");
						}
					}
				});
				// Fix missing ended events.
				this.player.bind($.jPlayer.event.ended, function(event) {
					if(self.endedFix) {
						self.endedFix = false;
						setTimeout(function() {
							self.setMedia(self.media);
						},0);
						// what if it was looping?
					}
				});
				this.player.bind($.jPlayer.event.pause, function(event) {
					if(self.endedFix) {
						var remaining = event.jPlayer.status.duration - event.jPlayer.status.currentTime;
						if(event.jPlayer.status.currentTime === 0 || remaining < 1) {
							// Trigger the ended event from inside jplayer instance.
							setTimeout(function() {
								self.jPlayer._trigger($.jPlayer.event.ended);
							},0);
						}
					}
				});
			}
			// Instance jPlayer
			this.player.jPlayer(this.options);

			// Store a local copy of the jPlayer instance's object
			this.jPlayer = this.player.data('jPlayer');

			// Store the real cssSelectorAncestor being used.
			this.cssSelectorAncestor = this.player.jPlayer('option', 'cssSelectorAncestor');

			// Apply Android fixes
			this.resetAndroid();
			return this;
		},
		setMedia: function(media) {
			this.media = media;

			// Apply Android fixes
			this.resetAndroid();

			// Set the media
			this.player.jPlayer("setMedia", this.media);
			return this;
		},
		play: function() {
			// Apply Android fixes
			if($.jPlayer.platform.android && this.playFixRequired) {
				// Apply Android play fix, if it is required.
				this.playFix = true;
			} else {
				// Other browsers play it, as does Android if the fix is no longer required.
				this.player.jPlayer("play");
			}
		},
		resetAndroid: function() {
			// Apply Android fixes
			if($.jPlayer.platform.android) {
				this.playFix = false;
				this.playFixRequired = true;
				this.endedFix = true;
				// Disable the controls
				// this.player.jPlayer('option', 'cssSelectorAncestor', '#NeverFoundDisabled');
			}
		}
	};
	return fix;
})(jQuery);*/
/*
 * post 用于post大量数据不包括文件，执行后会返回数据
 * 如写成jsonp会默认为get方式，固服务器不需要接受callback
 *
 */
Main.post = function(url, obj, call) {
	if (!/^http/.test(url)) {
		url = Backbone.url + url;
	}
	$.post(url, obj, function(response) {
		//console.log(response);
		if (call) {
			call(response)
		}
	}, 'json')
}
//------------------------------------------------------------------------------------------------------------miniset app ui
Main.tip = function(title, time) {
	var divtip = $('.divtip')
	divtip.html(title)
	divtip.addClass('divtip_an')
	var time = time || 1000;
	setTimeout(function() {
		divtip.removeClass('divtip_an')
	}, time)
}
/*alert 提示窗
 * id:弹出divid
 * ti:提示标题
 * con:内容
 * botton_vlaue ：按钮文字
 * bool:是否有背影
 * but_display:按钮的显隐
 * callback:点击确定后的回调
 * Main.alert('a','标题','内容',null,true,true,null)
 */
Main.alert = function(id, ti, con, botton_value, bool, but_display, callback) {
	var that = this;
	this.bool = bool;
	this.but_display = but_display != 'none' ? 'inline' : but_display;
	var ti = ti != undefined ? ti : '提示';
	var con = con != undefined ? con : '成功';
	var botton_value = botton_value != undefined ? botton_value : '确定';
	this.divalert = '<div class="divalert" id=' + id + '><span class="divalertti">' + ti + '</span><div class="divalertcon">' + con + '</div>	<div class="divalertfooter">';
	this.divalert += '<button cat="alertbutton" style="display:' + this.but_display + '">' + botton_value + '</button></div></div>';
	$(document.body).append(this.divalert);
	this.divalert = $('#' + id)
	if (this.bool == true) {
		this.divalertbg = '<div class="divalertbg"  id=' + id + '_bg></div>'
		$(document.body).append(this.divalertbg);
		this.divalertbg = $('#' + id + '_bg');
		this.divalertbg.css('display', 'block')
		this.divalertbg.animate({
			opacity : 0.4
		}, 0.5, 'linear')
	}
	this.divalert.css('display', 'block')
	this.divalert.animate({
		translate3d : '0,0px,0',
		opacity : 1
	}, 0.3, 'linear');
	this.divalert.on('click', 'button', function() {
		that.hide();
	})
	this.hide = function() {
		if (that.bool == true) {
			that.divalertbg.animate({
				opacity : 0
			}, 0.5, 'linear', function() {
				that.divalertbg.css('display', 'none')
			})
		}
		that.divalert.animate({
			translate3d : '0,-50px,0',
			opacity : 0
		}, 0.3, 'linear', function() {
			that.divalert.remove();
			if (that.bool == true) {
				that.divalertbg.remove();
			}
		});
		if (callback) {
			//setTimeout(function(){
			callback();
			//},600)
		}
	}
	return this;
}
/*确定confirm
 * id,ti:标题,con:内容,bool:是否有透明背景，success_vlaue:确定按钮文字,error_value:取消按钮文字，success_fn:确定回调函数，error_fn:取消回调函数  ,tool当点击确定时是否隐藏弹出
 * var c=new Main.layerConfirm('id_3','confimr标题','确定要删除吗?',true,function(){alert('点击了成功')},function(){alert('点击了取消')},false)
 */

Main.layerConfirm = function(id, ti, con, bool, success_fn, error_fn, success_value, error_value, boolclear) {
	var that = this;
	this.id = 'layerconfirm_' + id;
	this.idbg = this.id + "_bg";
	this.ti = ti;
	this.con = con;
	this.success_vlaue = !!success_value ? success_value : '确定';
	this.error_value = !!error_value ? error_value : '取消';
	this.su_fn = !!success_fn ? success_fn : null;
	this.er_fn = !!error_fn ? error_fn : null;
	this.bool = bool ? bool : false;
	this.boolclear = boolclear;
	var txt = '<div class="layerconfirm" id="' + this.id + '"><span class="layerconfirm_ti">' + this.ti + '</span><div class="layerconfirm_con">' + this.con + '</div><div class="layerconfirm_footer">';
	txt += '	<button cat="confirm_success" class="success">' + this.success_vlaue + '</button><button cat="confirm_cancel" class="cancel">' + this.error_value + '</button>	</div></div><div class="layerconfirmbg" id="' + this.idbg + '"></div>';
	$(document.body).append(txt);
	this.el = $('#' + this.id);
	this.bg = $('#' + this.idbg);

	this.show = function() {
		this.bg.css('display', 'block')
		if (this.bool == true) {
			this.bg.animate({
				opacity : 0.2
			}, 0.5, 'linear')
		} else {
			this.bg.animate({
				opacity : 0
			}, 0.5, 'linear')
		}
	}
	this.hide = function() {
		that.bg.animate({
			opacity : 0
		}, 0.5, 'linear', function() {
			that.bg.css('display', 'none')
		})
		that.el.animate({
			translate3d : '0,-50px,0',
			opacity : 0
		}, 0.3, 'linear', function() {
			that.el.remove();
			that.bg.remove();
		});
	}
	this.show();
	this.el.css('display', 'block')
	this.el.animate({
		translate3d : '0,50px,0',
		opacity : 1
	}, 0.3, 'linear');
	this.el.on('click', 'button[cat="confirm_success"]', function() {
		if (!!that.su_fn) {
			that.su_fn(that.el);
		}
		if (that.boolclear != false) {
			that.hide();
		}

	}).on('click', 'button[cat="confirm_cancel"]', function() {
		if (!!that.er_fn) {
			that.er_fn(that.el);
		}
		that.hide();
	})
}
/*图片切换特效
 * 内置了window.onresize事件，用于在改变窗口大小时自动修改宽度
 * data:2013-9-10
 */
Main.Slider = function(slider, bool) {
	if (Main.width == undefined) {
		Main.width = $(window).width();
	}
	var that = this;
	this.data = {
		index : 0,
		time : 200,
		pageX : 0,
		pageXend : 0
	};
	this.slider = $('#' + slider)
	this.ul = this.slider.find('ul');
	this.ulid = this.ul.get(0);
	this.sliderid = this.slider.get(0);
	//this.len=this.slider.find('ul li').css({width:Main.width+'px'}).length;
	this.len = this.slider.find('ul li').length;
	this.plist = this.slider.find('p.plist').empty();
	this.width = this.ul.find('li').width()
	this.ul.css('width', this.len + '00%')
	for (var i = 0; i < this.len; i++) {
		i == 0 ? this.plist.append("<b class='current'></b>") : this.plist.append("<b></b>")
	}

	function _eventHandler(e) {
		switch(e.type) {
			case 'touchstart':
				that._touchstart(e)
				break;
			case 'touchmove':
				that._touchmove(e)
				break;
			case 'touchend':
				that._touchend(e)
				break;
			case 'touchcancel':
				break;
		}
	}


	this._touchstart = function(e) {
		//e.stopPropagation();
		e.preventDefault();
		that.data.pageX = e.touches[0].pageX;
		// alert(that.data.pageX)
		that.ulid.style.webkitTransitionDuration = '0ms';
	}
	this._touchmove = function(e) {
		e.stopPropagation();
		e.preventDefault();
		var x = e.touches[0].pageX - that.data.pageX;
		that.data.pageXend = e.touches[0].pageX;
		//that.ulid.style.left = '' + x +'px';
		that.ulid.style.webkitTransform = 'translate3d(' + (x - that.data.index * Main.width) + 'px,0,0)';

	}
	this._touchend = function(e) {
		var x = that.data.pageXend - that.data.pageX;
		that.ulid.style.webkitTransitionDuration = '0.5s';
		if (that.data.pageXend == 0) {
			/* var obj = e.srcElement ? e.srcElement:e.target;
			 alert($(this).html())
			 if(obj.tagName.toLowerCase()=="img"){
			 var href=$(obj)[0].src();
			 alert(href);
			 }*/
			if (Main.datahref != undefined && Main.datahref != '') {
				location.href = Main.datahref;
				Main.datahref = '';
			}
			//alert(Main.datahref)
		} else if (x < -20) {
			if (that.data.index < (that.len - 1)) {
				that.data.index++;
			}
			//that.ulid.style.left= -that.data.index * Main.width+ 'px;';
			//that.ul.css('left',-Number(that.data.index)*Main.width)
			that.ulid.style.cssText += '-webkit-transition:' + that.data.time + 'ms;-webkit-transform:translate3d(-' + Number(that.data.index) * Main.width + 'px,0,0);';

		} else if (x > 20) {
			if (that.data.index > 0) {
				that.data.index--;
			}
			//that.ulid.style.left =  -that.data.index * Main.width + 'px;';
			//that.ul.css('left',-that.data.index*Main.width)
			that.ulid.style.cssText += '-webkit-transition:' + that.data.time + 'ms;-webkit-transform:translate3d(-' + Number(that.data.index) * Main.width + 'px,0,0);';

		}
		that.plist.find('b').removeClass('current');
		that.plist.find('b').eq(that.data.index).addClass('current')
		that.data.pageXend = 0;
		that.data.pageX = 0;
	}
	//this.slider.on('touchstart touchmove touchend touchcancel',_eventHandler);
	document.getElementById(slider).addEventListener('touchstart', that._touchstart, false)
	document.getElementById(slider).addEventListener('touchmove', that._touchmove, false)
	document.getElementById(slider).addEventListener('touchend', that._touchend, false)

	//绑定窗口修改
	$(window).on('resize', function() {
		that.width = that.ul.find('li').width();
		that.ulid.style.cssText += '-webkit-transition:0ms;-webkit-transform:translate3d(-' + that.data.index * that.width + 'px,0,0);';
	});
}
/*--------------------工具---------------*/
//判断浏览器
Main.browse = function() {
	Main.sys = {};
	if (/msie/ig.test(navigator.userAgent)) {
		Main.sys.name = 'ie';
		var b_version = navigator.appVersion
		var version = b_version.split(";");
		var trim_Version = version[1].replace(/[ ]/g, "");
		Main.sys.version = trim_Version;
		return;
	} else if (navigator.userAgent.indexOf("Firefox") > 0) {
		Main.sys.name = 'firefox';
		return;
	} else if (window.MessageEvent && !document.getBoxObjectFor && navigator.userAgent.indexOf("Chrome") > 0) {
		Main.sys.name = 'chrome';
		return;
	} else if (window.openDatabase && navigator.userAgent.indexOf("Safari") > 0) {
		Main.sys.name = 'safari';
		return;
	}
}

//判断是否是pc
Main.ispc = function() {
	var user = navigator.userAgent.toLowerCase();

	var Agents = ["android", "iphone", "symbianos", "windows phone", "ipad", "ipod"];
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (user.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}
Main.Unicode = function(str) {
	return escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u');
}
Main.NUnicode = function(str) {
	return escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u');
}
Main.addEvent = function(obj, type, fun) {
	if (obj.addEventListener) {
		obj.addEventListener(type, fun, false);
	} else if (obj.attachEvent) {
		obj.attachEvent(type, fun);
	}
};

/*-----------------sessionStorage -------------------*
 *timie:2013-10-24
 * 用于保存获取删除local数据
 */
Main.sessionget = function(name) {
	if (window.sessionStorage) {
		return sessionStorage.getItem(name)
	} else {
		console.log('不支持sessionStorage')
		return '';
	}
}
Main.sessionset = function(name, value) {
	if (window.sessionStorage) {
		sessionStorage.setItem(name, value);
	} else {
		console.log('不支持sessionStorage')
		return false;
	}

}
Main.sessionremove = function(name) {
	if (window.sessionStorage) {
		sessionStorage.removeItem(name);
	} else {
		console.log('不支持sessionStorage')
		return '';
	}
}/*-----------------localStorage -------------------*
 *timie:2013-10-24
 * 用于保存获取删除local数据
 */
Main.localget = function(name) {
	if (window.localStorage) {
		return localStorage.getItem(name)
	} else {
		console.log('不支持localStorage')
		return '';
	}
}
Main.localset = function(name, value) {
	if (window.localStorage) {
		localStorage.setItem(name, value);
	} else {
		console.log('不支持localStorage')
		return false;
	}

}
Main.localremove = function(name) {
	if (window.localStorage) {
		localStorage.removeItem(name);
	} else {
		console.log('不支持localStorage')
		return '';
	}
}
/*
 * cookie 设置
 * data:2013-9-24
 */
Main.getcookie = function(name) {
	var cookieArray = document.cookie.split("; ");
	//得到分割的cookie名值对
	var cookie = new Object();
	for (var i = 0; i < cookieArray.length; i++) {
		var arr = cookieArray[i].split("=");
		//将名和值分开
		if (arr[0] == name)
			return unescape(arr[1]);
		//如果是指定的cookie，则返回它的值
	}
	return "";
}
Main.delCookie = function(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
Main.setCookie = function(name, value, Days) {
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ';path=/';
}

