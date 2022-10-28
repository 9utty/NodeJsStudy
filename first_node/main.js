// Prototype

function Student(name) {
	this.name = name
}

Student.prototype.greet = function greet() {
	return `Hi, ${this.name}!`
}

const me = new Student('gulee')
console.log(me.name)
console.log(me.greet())

Student.prototype.study = function study() {
	return `${this.name} is studying.`
}

console.log(me.study())
