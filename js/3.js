$(function(){
  showShoppingCart();
  $(".add").click(function(){ 
    var t=$(this).parent().find('input[class*=text_box]'); 
    t.val(parseInt(t.val())+1) 
    setTotal(this);
  })
  $(".min").click(function(){ 
    var t=$(this).parent().find('input[class*=text_box]'); 
    t.val(parseInt(t.val())-1) 
    if(parseInt(t.val())<1){ 
      t.val(1); 
    } 
   setTotal(this);
  }) 
  $(".btn").click(function(){
    var del=$(this).parent().parent().parent().parent();
    var item=$(del).attr("id");
    del.remove();
    localStorage.removeItem(localStorage.key("goods"+item));
  })
});
function showShoppingCart(){    
  var info="";
    for(var i=0;i<localStorage.length;i++){
      var goodString = localStorage.getItem(localStorage.key(i));//取回goods变量
      good = JSON.parse(goodString);//把字符串转换成JSON对象
      console.log(good.goods[0]);
      var objs=good.goods;
      info+='<div class="row car" id="'+objs[0].id+'">';
      info+='<div class="col-xs-4 ">'+'<img src="'+objs[0].img+'" alt="" />'+'</div>';
      info+='<div class="col-xs-8 " id="car" >';
      info+='<div class="row">'+'<div class="col-xs-12">';
      info+='<p class="goods">'+objs[0].goods+'</p>';
      info+='</div>'+'</div>'+'<div class="row">'+'<div class="col-xs-12">';
      info+='<p class="descr">'+objs[0].descr+'</p>'+'</div>'+'</div>';
      info+='<div class="row">'+'<div class="col-xs-6">';
      info+='<p class="price">单价:</p>';
      info+='<i class="fa fa-rmb fa-2x" aria-hidden="true" style="display: inline-block;">'+objs[0].price+'</i>';
      info+='</div>'+'<div class="col-xs-6">'+'<p class="total">总价:';
      info+='<i class="fa fa-rmb fa-lg" aria-hidden="true" style="display: inline-block;"></i>';
      info+='<label >'+objs[0].price+'</label></p>'+'</div>'+'</div>';
      info+='<div class="row">'+'<div class="col-xs-8">';
      info+='<input class="min" name="" type="button" value="-"/>';
      info+='<input class="text_box" name="" type="text" value="1" />';
      info+='<input class="add" name="" type="button" value="+"/>'+'</div>';
      info+='<div class="col-xs-4">'+'<button type="button" class="btn">删除</button>';
      info+='</div>'+'</div>'+'</div>'+'</div>';
    $("#productInfo").html($(info));
  }
}
function setTotal(data){ 
  var s=0;
  var r = $(data).parent().parent().parent().parent();
  s=parseInt($(r).find('input[class*=text_box]').val())
  *parseInt($(r).find('i').text());
  var del=$(r).parent().parent().parent().parent();
  var item=$(del).attr("id");
  var v=$(r).find('label');
  v.html(s.toFixed(2));
}
