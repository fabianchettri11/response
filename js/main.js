"user strict";
var chars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","[","]","@","=","$","!","#","%","^","&","*","(",")","{","}"];
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
}