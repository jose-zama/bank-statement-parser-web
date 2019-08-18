import * as bank_reader from "bank-statement-reader";

//var balance = document.getElementById("balance").innerHTML;

function parse(xml){
	
	// console.log(xml);

	bank_reader.parse_statement(xml);
	
	
	// balance = bank_reader.get_balance(xml);
	// console.log(balance);
	// document.getElementById("balance").innerHTML = balance;
}

// document.getElementById("textarea").onchange = function(){
// 	let xml = document.getElementById("textarea").value;
// 	parse(xml);
// }

window.parse = function(){
	var input = document.querySelector('input');
	let curFiles = input.files;
	if(curFiles.length !== 0) {
		let file = input.files[0];
		//console.log(file);
		var r = new FileReader();
		r.onload = function(e) {
				parse(e.target.result);
			};
		r.readAsText(file)		
	}
	
}