$(document).ready(function(){ 
	var newImg = $("<img>");
	$(newImg).attr("src","img.png").appendTo("body");

	var signDiv = $("<div>");
	$(signDiv).appendTo("body").css("position","absolute").css("width","431px").css("height","598px").css("top","132px").css("left","937px")/*.css("border","3px solid red")*/;

	var signHeading = $("<p>");
	$(signHeading).appendTo(signDiv).text("Sign in").css("line-height","45px").css("font-family","Poppins").css("font-weight","500").css("font-size","30px");

    var signRegister1 = $("<p>");
	$(signRegister1).appendTo(signDiv).css("line-height","24px").text("If you don’t have an account register").css("font-family","Poppins").css("font-weight","400").css("font-size","16px");

	var signRegister2 = $("<p>");
	$(signRegister2).appendTo(signDiv).css("line-height","24px").html(`You can <a href="" id="sReg">Register here !</a>`).css("font-family","Poppins").css("font-weight","400").css("font-size","16px");

	$("a#sReg").css("font=weight","600").css("color","#FF432A").css("text-decoration","none");


	var signForm = $("<form>");
	$(signForm).appendTo(signDiv).css("position","relative").css("width","431px").css("height","305px")/*.css("border","3px solid blue")*/;

	var email = $("<p>");
	$(email).appendTo(signForm).text("Email").css("line-height","19px").css("font-family","Poppins").css("font-weight","500").css("font-size","13px");

	var enterEmail = $('<input type="text">');
	$(enterEmail).appendTo(signForm).attr("placeholder","Enter your email address").keypress(function(){
			document.getElementById('rectEmail').style.backgroundColor="#FF432A";
	}).css("line-height","24px").css("font-family","Poppins").css("font-weight","400").css("font-size","16px").css("margin-left","6.29%").css("border","none").css("outline","none");

	var rectEmail = $('<div id="rectEmail">');
	$(rectEmail).appendTo(signForm).css("width","100%").css("height","2px").css("background-color","black");

	var password = $("<p>");
	$(password).appendTo(signForm).text("Password").css("line-height","19px").css("margin-top","60px").css("font-family","Poppins").css("font-weight","500").css("font-size","13px");

	var enterPassword = $(`<input type="password">`);
	$(enterPassword).appendTo(signForm).attr("placeholder","Enter your password").keypress(function(){
			document.getElementById('rectPassword').style.backgroundColor="#FF432A";
	}).css("width","90%").css("line-height","24px").css("font-family","Poppins").css("font-weight","400").css("font-size","16px").css("margin-left","6.29%").css("border","none").css("outline","none");

	var rectPassword = $('<div id="rectPassword">');
	$(rectPassword).appendTo(signForm).css("width","100%").css("height","2px").css("background-color","#000000");

	var checkRem = $('<input type="checkbox">');
	$(checkRem).appendTo(signForm).css("margin-top","30px");

	var checkLabel = $('<span>');
	$(checkLabel).appendTo(signForm).text("Remember me").css("margin-top","30px").css("line-height","18px").css("font-family","Poppins").css("font-weight","300").css("font-size","12px");

	var checkLabel = $('<a href="	"></a>');
	$(checkLabel).appendTo(signForm).css("text-decoration","none").css("color","black").text("Forgot password ?").css("margin-left","48%").css("margin-top","30px").css("line-height","18px").css("font-family","Poppins").css("font-weight","300").css("font-size","12px");

	var button = $('<input type="button" id="btn">');
	$(button).appendTo(signForm).css("color","#ffffff").mouseover(function(){
		document.getElementById("btn").style.backgroundColor="#ed6a32";
	}).mouseout(function(){
		document.getElementById("btn").style.backgroundColor="#FF432A";
	}).attr("value","Login").css("border","none").css("outline","none").css("background-color","#FF432A").css("font-family","Poppins").css("font-weight","500").css("font-size","17px").css("line-height","25.5px").css("width","429px").css("height","53px").css("border-radius","32px").css("box-shadow","0px 4px 26px rgba(0, 0, 0, 0.25)").css("margin-top","60px");

	var contText =$('<span>');
	$(contText).appendTo(signDiv).text("or continue with").css("color","#B5B5B5").css("line-height","24px").css("font-family","Poppins").css("font-weight","500").css("font-size","16px").css("position","relative").css("top","83px").css("left","35%");

	var imgEmail = $('<img>');
	$(imgEmail).appendTo(signForm).css("position","relative").css("top","-306px").css("left","0px").attr("src","msg.png");

	var imgLock = $('<img>');
	$(imgLock).appendTo(signForm).css("position","relative").css("top","-186px").css("left","-14px").attr("src","lock.png");
});
