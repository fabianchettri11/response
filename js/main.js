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
var data=[];
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
		data.push(col);	
		row.append(col);
 	
 	}

}
 	var tableindex;
 	function ColorfulTable(){
 		tableindex=Math.floor(Math.random()*data.length);
 		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		data[tableindex].style.backgroundColor="rgb("+r+","+g+","+b+")";
		setTimeout(ColorfulTable,0.01);

 	}
ColorfulTable();




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

function replacestring(str,num,str1)
{
	var res =str.slice(0,num)+str1+str.slice((num+1));
	console.log(res);
}
replacestring("caterp",2,"p");
	

function IndexAt(str,char)
{
	for(var i=0;i<str.length;i++)
	{
	 if(str.charAt(i)== char)
	 	console.log(i);
	    break;
	}
}
IndexAt("dogodododododdododo","d");

function IncludesChar(str,char){
	for(var i=0;i<str.length;i++){
		if(str.charAt(i)==char)
			return true;
	}
return false;
}
console.log(IncludesChar("fish","j"));


function SliceString(str,start,stop){
	var word="";
	for(var i=start;i<=stop;i++){
		word +=str[i];
	}
	return word;
}
console.log(SliceString("apple",1,3));

function Replace(str,index,newchar){
	var string1= str.slice(0,index);
	var string2= str.slice(index+1);
	console.log(string1+newchar+string2);
}
Replace("butter",1,"e");

function ModString(val){
	if(typeof val!="string")
    {
    	console.log("please use a string");
    	return;
}
	this.val=val,
	this.ModSlice=function(start,stop){
   				var newVal="";
 		for(var i=start;i<=stop;i++){
 				newVal+= this.val[i];
		 	}
   				this.val=newVal;
	},
	this.lastindex=function(char){
		for(var i=this.val.length;i>=0;i--)
		{
			if(this.val.charAt(i)==char){
				console.log(i);
				return;
			}
		}
		console.log("Character not found");	
	},
	this.CountLength=function(){

var count=0;
while(this.val[count]!=undefined){
	count++;
	}
	console.log(count);
}


}
var myString=new ModString("This is my string");
console.log(typeof myString.val);

//myString.ModSlice(0,13);
console.log(myString.val);

myString.lastindex("i");
var babyCat=new ModString("kitten");
babyCat.CountLength();



$("#myButton").click(function(){
	$("#myH1").toggle(500);
})

var count=0;
$(document).ready(function(){
	$("#date").click(function(){
		if(count %2==0)
		$("#date").append("<p class='evenDate'>"+new Date()+"</p>");
		else
			$("#date").append("<p class='oddDate'>"+new Date()+"</p>");
		count++;
	
	});
 
});

$("#addDate").click(function(){
addDate();
});


function addDate(){ 
	if(count%10==0)
		$("#date").empty();
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		if(count %2==0)
		$("#date").append("<p class='evenDate style='background-color:rgb("+r+","+g+","+b+")'>"+new Date()+"</p>");
		else
			$("#date").append("<p class='oddDate' style='background-color:rgb("+r+","+g+","+b+")'>"+new Date()+"</p>");
		count++;
	setTimeout(addDate,1000);

}









