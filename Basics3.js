/**
 * 
 */
function add(a,b){
	return a+b;
}

console.log(add(2,3));
console.log(add(2,4));
console.log(add(5,3));

var b = ["hello", "world", "4", "goodby"];
console.log(b.length + " is the length of the array b.")
for(var i=0;i<b.length;i++){
	console.log(b[i]);
}

var c = new Array();
c[0]="goodby";
c[1]="4";
c[2]="world";
c[3]="hello";
c[4]="deepak";
console.log(c.length + " is the length of the array c.")
for(var i=0;i<c.length;i++){
	console.log(c[i]);
}

console.log("print array c in reverse order.")
for(var j=c.length-1;j>=0;j--){
	console.log(c[j]);
}

//String
var name = "deepak"; // String literal declaration.
var name2 = new String("ram"); // String object declaration.
console.log(name.charAt(3));

var newName = name.concat(" arora");
console.log(newName);

console.log(name.indexOf('e'));


console.log(name.slice(1,4)); //starting index is inclusive, but ending index is exclusive.

console.log(newName.toUpperCase());

var newName = "  deepak arora   ";
console.log(newName.trim());