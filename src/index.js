function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
	let operators = {
		'+': (a,b) => a+b,
		'-': (a,b) => a-b,
		'*': (a,b) => a*b,
		'/': (a,b) => a/b,
	};
	let example = expr.replace(/\s/g, '');
	do {
		let openBracket = example.lastIndexOf('(');
		let closeBracket = example.indexOf(')', openBracket);
		let newExample;
		let num1;
		let num2;
		if (openBracket !== -1 && closeBracket !== -1) {
			newExample = example.slice(openBracket + 1, closeBracket);
		} else {
			newExample = example;
		}
		let memory = newExample;
		function rev(a) {
			return a.split('').reverse().join('');
		}
		function operation(a, operator) {
			if (a.indexOf(operator) > 0) {
			let b = a.split(operator);
			if (!isNaN(+b[0])) {
				num1 = b[0];
			} else {
				num1 = rev(parseFloat(rev(b[0])) + '');
			}
			num2 = parseFloat(b[1]);
			let c = operators[operator](+num1,+num2);
			return a.replace(`${num1}${operator}${num2}`, `${c}`);
			} else return a;
	}
		function multiply(a) {
			return operation(a, '*');
	}
		function divide(a) {
			return operation(a, '/');
	}
		function plus(a) {
			return operation(a, '+');
	}
		function minus(a) {
			return operation(a, '-');
	}
	
		
	while (newExample.indexOf('/') > 0) newExample = divide(newExample);
	while (newExample.indexOf('*') > 0) newExample = multiply(newExample);
	while (newExample.indexOf('-') > 0) newExample = minus(newExample);
	while (newExample.indexOf('+') > 0) newExample = plus(newExample);
	
	example = example.replace(`(${memory})`, `${newExample}`);
	} while (example.lastIndexOf('(') > 0);
	
	while (example.indexOf('/') > 0) example = divide(example);
	while (example.indexOf('*') > 0) example = multiply(example);
	while (example.indexOf('-') > 0) example = minus(example);
	while (example.indexOf('+') > 0) example = plus(example);
	
	return +example;
}

module.exports = {
    expressionCalculator
}