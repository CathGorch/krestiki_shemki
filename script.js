let spisok=[]




document.querySelector(".btn_cart").onclick=function(){
	
	let messege=""
	for (let i = 0; i < spisok.length; i++) {
        messege=messege+"* "+spisok[i]+"\n";

		  
	}
	alert(messege)
}
document.querySelector(".tig").onclick=function(){
	alert("in cart");
	 spisok.push("tig 200rub");
} 
document.querySelector(".app").onclick=function(){
	alert("in cart");
	 spisok.push("heaven apple 200rub");
} 
document.querySelector(".pion").onclick=function(){
	alert("in cart");
	 spisok.push("pion 200rub");
} 
document.querySelector(".din").onclick=function(){
	alert("in cart");
	 spisok.push("dino 200rub");
} 
document.querySelector(".flow").onclick=function(){
	alert("in cart");
	 spisok.push("flower 200rub");
} 
document.querySelector(".ros").onclick=function(){
	alert("in cart");
	 spisok.push("rose 200rub");
} 
document.querySelector(".ast").onclick=function(){
	alert("in cart");
	 spisok.push("astronaut 300rub");
} 
document.querySelector(".gs").onclick=function(){
	alert("in cart");
	 spisok.push("garden rose 200rub");
} 
document.querySelector(".sf").onclick=function(){
	alert("in cart");
	 spisok.push("sunflower 200rub");
} 
document.querySelector(".pen").onclick=function(){
	alert("in cart");
	 spisok.push("penaut 200rub");
} 
document.querySelector(".ld").onclick=function(){
	alert("in cart");
	 spisok.push("litle dino 200rub");
} 
document.querySelector(".dog").onclick=function(){
	alert("in cart");
	 spisok.push("doggy 200rub");
} 




	



