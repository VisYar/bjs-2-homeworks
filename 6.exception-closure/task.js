// Задача 1
function parseCount(value) {
	let parse = Number.parseInt(value);
	if (isNaN(parse)) {
		throw new Error("Невалидное значение");
	}
	return parse;
}

function validateCount (value) {
	try {
		let parse = parseCount(value);
		return parse;
	} catch (error) {
		return error;
	}
}

// Задача 2
class Triangle {
	constructor (a, b, c) {
		if (b + c <= a || a + c <= b  || a + b <= c) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.a = a,
		this.b = b,
		this.c = c
	}

	getPerimeter () {
		return this.a + this.b + this.c;
	}

	getArea () {
		let semiPerimeter = 0.5 * this.getPerimeter(this.a, this.b, this.c);
		let square = (Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c)));
		return Number((square).toFixed(3));
	}
}

function getTriangle (a, b, c) {
	try {
		return new Triangle (a, b, c);
	} catch (error) {
		return {
			getPerimeter: () => "Ошибка! Треугольник не существует",
			getArea: () => "Ошибка! Треугольник не существует"
		}
	}
}