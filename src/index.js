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
			if ((a + '').indexOf(operator) >= 0) {
			let b = (a + '').split(operator);
				console.log(b);
				console.log('b');
				if ((a + '').indexOf('-') === 0 && operator !== '+') {
				b.shift(b[0]);
				b[0] = `-${b[0]}`;
					if ((a + '').lastIndexOf('-') === 0) {
						b = b.join('');
						console.log(+(b));
				console.log('b ssr');
						return +(b);
					}
				}
			if (!isNaN(+b[0])) {
				num1 = b[0];
			} else {
				num1 = rev(parseFloat(rev(b[0])) + '');
			}
			num2 = parseFloat(b[1]);
				console.log(+num1);
				console.log('num1');
				console.log(+num2);
				console.log('num2');
			let c = operators[operator](+num1,+num2);
				console.log(c);
				console.log('c');
			let result = a.replace(`${num1}${operator}${num2}`, `${c}`);
			console.log(result);
			console.log('result');
			return result;
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
	console.log(newExample)	
	console.log('newExample1')	
	while (newExample.indexOf('/') > 0) newExample = divide(newExample);
		console.log(newExample)
		console.log('newExample2')
	while (newExample.indexOf('*') > 0) newExample = multiply(newExample);
		console.log(newExample)
		console.log('newExample3')
	while ((newExample + '').indexOf('-') >= 0 && (newExample + '').lastIndexOf('-') !== 0) newExample = minus(newExample);
		console.log(newExample)
		console.log('newExample4')
	while ((newExample + '').indexOf('+') > 0) newExample = plus(newExample);
		
	example = example.replace(`(${memory})`, `${newExample}`);
	} while (example.lastIndexOf('(') > 0);
	
	while (example.indexOf('/') > 0) example = divide(example);
	while (example.indexOf('*') > 0) example = multiply(example);
	while ((example + '').indexOf('-') >= 0 && (example + '').lastIndexOf('-') !== 0) example = minus(example);
	while ((example + '').indexOf('+') > 0) example = plus(example);

	if (+example === Infinity) throw new Error("TypeError: Division by zero.");

	return +example;
}

module.exports = {
    expressionCalculator
}