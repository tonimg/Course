// maxOfThree() function
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(a,b,c){
if (a>=b){
	if(a>=c){
		return (a + " this number is largest of then")
	}
	else if (b>=a) {
		if(b>=c){
			return (b + " this number is largest of then")
		}
	} else if(c>=a){
		if(c>=b){
			return (c + " this number is largest of then")
		}
	}
}
}

maxOfThree(35,10,55)

// 2 manera

function maxOfThree(a,b,c){
if (a>=b && a>=c){
		return (a + " this number is largest of then")
	}else if (b>=a && b>=c) {
			return (b + " this number is largest of then")
		}else if(c>=a && c>=b){
			return (c + " this number is largest of then")
		}
	}
maxOfThree(35,10,55)



