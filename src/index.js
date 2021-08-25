function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
	let operators = {
		'+': (a,b) => a + b,
		'-': (a,b) => a - b,
		'*': (a,b) => a * b,
		'/': (a,b) => a / b,
	};
	let example = expr.replace(/\s/g, '');
	let checkBrackets = expr.replace(/[^()]/g, '');
	if (checkBrackets.length % 2) throw new Error("ExpressionError: Brackets must be paired");
	do {
		let openBracket = example.lastIndexOf('(');
		let closeBracket = example.indexOf(')', openBracket);
		let newExample;
		let num1;
		let num2;
		let i;
		let n;
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
			let result = a.replace(`${num1}${operator}${num2}`, `${c}`);
			return result
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
	console.log(newExample);
	while (newExample.indexOf('/') > 0) newExample = divide(newExample);
	console.log(newExample);
	while (newExample.indexOf('*') > 0) newExample = multiply(newExample);
	console.log(newExample);
	while (newExample.indexOf('-') > 0 && i !== n) newExample = minus(newExample);
	console.log(newExample);
	while (newExample.indexOf('+') > 0) newExample = plus(newExample);
	console.log(newExample);
	
	example = example.replace(`(${memory})`, `${newExample}`);
	} while (example.lastIndexOf('(') > 0);
	
	while (example.indexOf('/') > 0) example = divide(example);
	while (example.indexOf('*') > 0) example = multiply(example);
	for (let i = 0; i < 10; i++) example = minus(example);
	while (example.indexOf('+') > 0) example = plus(example);

	if (+example === Infinity) throw new Error("TypeError: Division by zero.");

	return +example;
}

module.exports = {
    expressionCalculator
}