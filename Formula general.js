function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	var a = 1;
	var b = 4;
	var c = -5;
	var x ;
	var x2;
	
	x= formula1(a,b,c);
	console.log(x);
	
	x2 = formula2(a,b,c);
	console.log(x2);
	
	function formula1(a,b,c){
	var x;
	x = (-b+sqrt((pow(b,2))-4*(a)*(c)))/2*(a);
	return x;
	}
	
	function formula2(a,b,c){
	var x2;
	x2 = (-b-sqrt((pow(b,2))-4*(a)*(c)))/2*(a);
	return x2;
	}
}
