//Hexadecimal
//Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code

function getRGB(x){
	var r=parseInt(x.substring(1,3),16)
	var g=parseInt(x.substring(3,5),16)
	var b=parseInt(x.substring(5),16)
	return ("La conversión de hexadecimal a RGB es " +r+","+g+","+b)
}
getRGB( "#0000FF");
