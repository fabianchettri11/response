"user strict";
var chars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","[","]","@","=","$","!","#","%","^","&","*","(",")","{","}","1","2","3","4"];
var pass="";
var ex=Math.floor(Math.random()*5)+12;
for(var j=0;j<ex;j++){
	var index=Math.floor(Math.random()*chars.length);
	if(index <26 & Math.random() < 0.5)
	{
		pass+= chars[index].toUpperCase();
	}
	else{
	pass+=chars[index];
 	}
}
console.log(pass);
//nested loop
for(var row=0;row<5;row++)
{
	console.log("row:" + row);
	for(var col=0;col<10;col++)
	{
		console.log("Col:" + col);
	}
}
//Checkersbox
var table=document.getElementById("ntable");
for(var i=0;i<10;i++)
{
	var row=document.createElement("tr");
	table.append(row);
	for(var ii=0;ii<10;ii++){
		var col=document.createElement("td");
		if(i%2==0){
			if(ii % 2 == 0)
				col.setAttribute("class","column1");
		 	else 
				col.setAttribute("class","column2");
		}	
		else if(i%2!=0){
			if(ii% 2==0)
				col.setAttribute("class","column2");
			else
				col.setAttribute("class","column1");
	    }
		row.append(col);
 	}
 	//password validator
 	var specialchars=["!","@","#","$","%","^","&","*","(",")","_","+","="];
 var num=["0","1","2","3","4","5","6","7","8","9"];
  function Checkpass()
  {
  	var passToCheck=document.getElementById("passCheck").value;
  	var condmet=0;
  	if(passToCheck.length>=8)
  		condmet+=1;
 for(var i=0;i<num.length;i++){
 	if(passToCheck.includes(num[i])){
 		condmet+=1;
 		break;
 	}
 }
 for(var j=0;j<specialchars.length;j++){
 	if(passToCheck.includes(specialchars[j])){
 		condmet+=1;
 		break;
 	}
 }
 if(condmet==3)
 alert("It works");
  else
 	alert("No") ;

}
}


var string="abcd@efgh@ijkl";
var testarray=string.split("@");
console.log(testarray);

function splitstring(str,splitat){
var arr=[];
var lastindex=0;
for(var i=0;i<str.length;i++){
	if(str.charAt(i)==splitat){
		var addString=str.slice(lastindex, i);
		arr.push(addString);
		lastindex=i+1;
	}
	
}
console.log(arr);
}
splitstring("Cat@dog@fish@tree","@");

function checkemail(str){
	str=str.toLowerCase();
	if(str.charAt(0)=="@")
		return false;
	var arr1=str.split("@");
	if(arr1.length!=2)
		return false;
	if(!arr1[1].includes("."))
		return false;
	for(var i=0;i< 26;i++){
		if(arr1[1].endsWith(chars[i]))
			return true;
    }
	return false;
}
function EmailAlert(){
	if(checkemail(document.getElementById("emailEntry").value))
		alert("Sucessfull");
	else
		alert("Failed");
}
console.log(checkemail("ab.cd@gmail.com"));

/*
function replace (str,index,char){

}
replace("cat",2,"p");
*/
//replace()
var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue/g, "brown");
console.log(res);

//indexOf()
var str = "Hello world, welcome to the universe.";
var n = str.indexOf("welcome");
console.log(n);
//include()
var str = "Hello world, welcome to the universe.";
var n = str.includes("world");
console.log(n);
//slice()
var str = "Apple";
var res = str.slice(1, 4);
console.log(res);
//charCodeAt()
var str = "HELLO WORLD";
var n = str.charCodeAt(2);
console.log(n);
//search()
var str = "Visit W3 Schools!";
var n = str.search("!");
console.log(n);
//valueOf
var str = "Hello World!";
var res = str.valueOf();
console.log(res);
//trim()
var str = "       Hello         ";
alert(str.trim());
