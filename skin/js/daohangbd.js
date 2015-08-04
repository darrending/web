function show(aid,ddid){
$(".lanmu > li").attr("class","");//title> a的class为空时
$(".anli").hide();//listDetail隐藏
$("#" + aid ).toggleClass("active");
$("#" + ddid).show();
}
