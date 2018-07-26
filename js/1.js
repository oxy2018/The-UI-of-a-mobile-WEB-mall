$(document).ready(function(){
$.ajax({  
    url:"http://yunxtec.com/test/adlist.php",  
    type : "GET",
    dataType:'json', 
    async: false,    
    beforeSend: LoadFunction, //加载执行方法    
    error: erryFunction,  //错误执行方法    
    success: succFunction //成功执行方法  
})
function LoadFunction() {
	$("#list").html('加载中...');
}  
function erryFunction() { 
	alert("error"); 
}  
function succFunction(data) { 
	console.log(data);
	$("#lunbotu").empty();
    $("#olnum").empty();
    for(var i=0;i<data.adlist.length; i++){
        if(i == 0){
            $("#olnum").append("<li data-target='#myCarousel' data-slide-to='0'  class='active'></li>")
        }else{
            $("#olnum").append("<li data-target='#myCarousel' data-slide-to='"+i+"'></li>")
        }
    }
	for(var i = 0; i < data.adlist.length; i++) {
		if(i==0){
			$("#lunbotu").append(`<div class='item active'><a href="${data.adlist[i].url}"><img src="${data.adlist[i].img}" alt="${data.adlist[i].name}" style='width:100%;height:400px'></a></div>`);
		}else{
			$("#lunbotu").append(`<div class='item '><a href="${data.adlist[i].url}"><img src="${data.adlist[i].img}" alt="${data.adlist[i].name}" style='width:100%;height:500px'></a></div>`);
		}
	}
}
$('#myCarousel').carousel({
	interval:2000,
});

$.ajax({  
    url:"http://yunxtec.com/test/discount.php",  
    type : "GET",
    dataType:'json', 
    async: false,    
    beforeSend: LoadFunction, //加载执行方法    
    error: erryFunction,  //错误执行方法    
    success: successFunction //成功执行方法  
})
function LoadFunction() {
	$("#list").html('加载中...');
}  
function erryFunction() { 
	alert("error"); 
} 
function successFunction(data) {
	//var discount=data.discount;
	for(var j=0;j<data.discount.length; j++){
		$("#main-middle").append("<div class='row'>"+
			"<div class='col-xs-4' style='margin: 10px 0;'>"+
			"<a href='"+data.discount[j].url+"'>"+
			"<img src='"+data.discount[j].img+"'alt=''>"+"</a>"+"</div>"+
			"<div class='col-xs-8'>"+"<div class='row'>"+
			"<div class='col-xs-12' style='margin: 10px 0;'>"+
			"<p class='goods'>"+data.discount[j].goods+"</p>"+"</div>"+
			"</div>"+"<div class='row'>"+"<div class='col-xs-3'>"+
			"<div class='row'>"+"<div class='col-xs-12' style='text-align:left;color: #f00;margin: 0 30px;font-size: 30px;'>"+
			"<i class='fa fa-rmb ' aria-hidden='true'>"+"</i>"+
			"<div style='display: inline-block;'>"+"<p class='dprice'>"+
			data.discount[j].dprice+"</p>"+"</div>"+"</div>"+"</div>"+"<div class='row'>"+
			"<div class='col-xs-12'>"+"<p class='price text-muted' style='text-align: left;margin: 0 10px;'>"+
			"<del>原价:"+"<i class='fa fa-rmb' aria-hidden='true'>"+"</i>"+"</i>"+
			data.discount[j].price+"</del>"+"</p>"+"</div>"+"</div>"+"</div>"+
			"<div class='col-xs-9'>"+"<p class='descr'>"+data.discount[j].descr+
			"</p>"+"</div>"+"</div>"+"</div>"+
			"<hr style='height:2px;border-top:2px solid #ccc;width: 100%;'>"
			);
	}
}
         
}); 
