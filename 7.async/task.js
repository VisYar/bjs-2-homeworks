class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(time, callback, id) {
		if (id === undefined) {
			throw new Error("необходимо создавать будильник");
		}
		if (this.alarmCollection.some(element => element.id === id)) {
			console.error("существует звонок на это же время");
			return;
		}
		this.alarmCollection.push({ id, time, callback });
	}

	removeClock(id) {
		let initialCollection = this.alarmCollection.length;
		this.alarmCollection = this.alarmCollection.filter(element => element.id != id);
		let finalCollection = this.alarmCollection.length;
		return initialCollection != finalCollection;
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString().slice(0, -3);
	}

	start() {
		let checkClock = (timer) => {
			if (timer.time === this.getCurrentFormattedTime()) {
				timer.callBack();
			}
		}
		if (this.timerId === null) {
			this.timerId = setInterval(() => this.alarmCollection.forEach(element => checkClock(element)), 1000);
		}
	}

	stop() {
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}

	printAlarms() {
		console.log(`Печать будильников ${this.alarmCollection.length}:`);
		this.alarmCollection.forEach(element => console.log(`Будильник ${element.id} включен на ${element.time}`));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}

function testCase() {
	let alarmClock = new AlarmClock();
	alarmClock.addClock(alarmClock.getCurrentFormattedTime(), () => console.log('Пора вставать!'), 1);
	alarmClock.addClock(addTime(1), () => {
		console.log('Давай, вставай уже!');
		alarmClock.removeClock(2)
	}, 2);
	alarmClock.addClock(addTime(2), () => {
		console.log('Вставай, а то проспишь');
		alarmClock.clearAlarms();
		alarmClock.printAlarms();
	}, 3);
	alarmClock.printAlarms();
	alarmClock.start();
}

function addTime(minute) {
	let newTime = new Time();
	newTime.setTime(newTime.getTimes() + minute);
	return newTime.toLocaleTimeString.slice(0, -3)
}