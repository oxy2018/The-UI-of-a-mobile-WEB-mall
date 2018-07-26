$(document).ready(function(){
$.ajax({  
    url:"http://yunxtec.com/test/goodslist.php",  
    type : "GET",
    dataType:'json', 
    async: false,    
    beforeSend: LoadFunction, //加载执行方法    
    error: erryFunction,  //错误执行方法    
    success: succFunction //成功执行方法  
});
function LoadFunction() {
	$("#list").html('加载中...');
}  
function erryFunction() { 
	alert("error"); 
}  
function succFunction(data) {
	var goodslist=data.goodslist;
	var len=goodslist.length;
	var cm="";
	if(len>0){
		for(var i=0;i<len;i++){
			cm+='<div class="col-xs-6" id="'+i+'">';
			cm+='<div class="row item">';
			cm+='<div class="col-xs-12">';
			cm+='<a href="'+goodslist[i].url+'">'+'<img src="'+goodslist[i].img+'" alt="" />'
			+'<br />'+'<p class="goods">'+goodslist[i].goods+'</p>'+'</a>'+'<p style="display:none;">'+goodslist[i].descr+'</p>';
			cm+='</div>';
			cm+='</div>';
			cm+='<div class="row price">';
			cm+='<div class="col-xs-10">';
			cm+='<i class="fa fa-rmb" aria-hidden="true">'+'</i>';
			cm+='<div style="display: inline-block;">';
			cm+='<p>'+goodslist[i].price+'</p>';
			cm+='</div>';
			cm+='</div>';
			cm+='<div class="col-xs-2">';
			cm+='<a href="javascript:;" onclick="shop(this.parentNode.parentNode.parentNode)"><i class="fa fa-plus-square-o color" aria-hidden="true"></i></a>';
			cm+='</div>';
			cm+='</div>';
			cm+='</div>';
		}
		$('.row').html(cm);
	}
}
});
function shop(data){
	var myid=$(data).attr("id");
		//alert("id"+myid)
	var myurl=$(data).children("div").children("div").children("a").attr("href");
	var myimg=$(data).children("div").children("div").children("a").children("img").attr("src");
	var mygoods=$(data).children("div").children("div").children("a").children("p").get(0).innerText;
	var mydescr=$(data).children("div").children("div").children("p").get(0).innerText;
	var myprice=$(data).children("div").children("div").children("div").children("p").get(0).innerText;
	var good={goods:[{id:myid,url:myurl,img:myimg,goods:mygoods,descr:mydescr,price:myprice,num:0}]};
	var objs=good.goods;
	var goodString = JSON.stringify(good);//将JSON对象转化成字符串
	var keyName="good"+myid;
	for(var j=0;j<localStorage.length;j++){
		if(localStorage.key(j)==keyName){
			goodString[j].num+=1;
			break;
		}
	}
	localStorage.setItem("good"+myid,goodString);//用localStorage保存转化好的的字符串
}
