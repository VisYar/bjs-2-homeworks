function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
	if(this.marks === undefined) {
		this.marks = [mark];
	} else {
		this.marks.push(mark);
	}
}

Student.prototype.addMarks = function (...arr) {
	if (this.marks === undefined) {
		this.marks = [...arr];
	} else {
		this.marks.push(...arr);
	}
 }

Student.prototype.getAverage = function () {
	let sum = 0;
	this.marks.map(item => sum += item);
	return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
}