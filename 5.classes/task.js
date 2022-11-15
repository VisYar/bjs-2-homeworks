// Задача 1
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(condition) {
		this._state = condition;
		if (condition < 0) {
			this._state = 0;
		} else if (condition > 100) {
			this._state = 100;
		} else {
			this._state = condition;
		}
	}

	get state() {
		return this._state
	}
}
class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}
	
class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}	

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

// Задача 2
class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		let bookState = book.state;
		if (bookState > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		let book = null;
		this.books.forEach(element => {
			if (element[type] === value) {
				book = element;
			}
		});
		return book;
	}

	giveBookByName(bookName) {
		let bookIndex = 0;
		let book = null;
		this.books.forEach(element => {
			if(element.name === bookName) {
				book = element;
				this.books.splice(bookIndex, 1);
			}
		});
		return book
	}
}