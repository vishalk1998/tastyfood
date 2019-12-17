var x;
function order()
{
	var rice=document.getElementById("rice").value;
	var curry=document.getElementById("curry").value;
	var starter=document.getElementById("starter").value;
	var ice=document.getElementById("ice").value;
	var a = new Array();
	a.push(rice);
	a.push(curry);
	a.push(starter);
	a.push(ice);
	x=a.toString();
	document.getElementById("cart").innerHTML=x;
}

function confirm()
{
	if(x.length <= 0)
	{
		alert("Select Item")
	}
	else
	{
		alert("Order Confirmed");
		document.getElementById("cart").innerHTML=" ";
	}
}