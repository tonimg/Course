//Hexadecimal enhanced
// Improves the previous function so besides the conversion also identifies some basic colors:
// Black: #000000
// White: #FFFFFF
// Red: #FF0000
// Green: #00FF00
// Blue: #0000FF



function getRGB(x){
	var color;
	if(x==="#000000"){color="Black"}
		else if(x==="#FFFFFF"){
			color="white"
		}else if(x==="#FF0000"){
			color="Red"
		}else if(x==="#00FF00"){
			color="Green"
		}else if(x==="#0000FF"){
			color="Blue"
		}else{color=""}

		var r=parseInt(x.substring(1,3),16)
		var g=parseInt(x.substring(3,5),16)
		var b=parseInt(x.substring(5),16)
		return ("La conversión de hexadecimal a RGB es " +r+","+g+","+b +" "+ color)
}
getRGB( "#000000");