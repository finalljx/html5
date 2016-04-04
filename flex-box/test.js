function aa(hellName){

	var name="zhangsan";
	return function foo(){

	console.log(name,hellName);
	}
	

}
function a1(){

	this.name="a1's Name";
	this.height=100;
	this.sayHeight=function(){
		console.log(this.height);
	}
}
	a1.prototype={
		name:"zhangsan",
		sayName:function(){
			console.log(this.name);
		}
	}
function a2(){
	a1.call(this);
}
//a2.prototype=a1.prototype;
a2.prototype=new a1();

var a3=new a2();
a3.sayName();

function foo(){
	this.sayHello=function(){
		console.lo("say hello")
	}
	console.log(this.name);
}
var obj={
	name:"zhangsan",
	sex:"male"
}
var obj2={
	name:"lisi",
	
}
