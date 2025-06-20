#!/usr/bin/env node

const { LinkedList } = require("./linkedList/LinkedList");

function testAppend() {
	const list = new LinkedList();

	list.append("dog");
	list.append("cat");
	list.append("parrot");
	list.append("hamster");
	list.append("snake");
	list.append("turtle");

	console.log(list.toString());
}

function testPrepend() {
	const list = new LinkedList();

	list.prepend("dog");
	list.prepend("cat");
	list.prepend("parrot");
	list.prepend("hamster");
	list.prepend("snake");
	list.prepend("turtle");

	console.log(list.toString());
}

function testAt() {
	const list = new LinkedList();

	list.append("dog");
	list.append("cat");
	list.append("parrot");
	list.append("hamster");
	list.append("snake");
	list.append("turtle");

	console.log(list.at(2));
}

function testShiftAndPop() {
	const list = new LinkedList();

	list.append("dog");
	list.append("cat");
	list.append("parrot");
	list.append("hamster");
	list.append("snake");
	list.append("turtle");

	list.shift();
	list.pop();

	console.log(list.toString());
}

function testContains() {
	const list = new LinkedList();

	list.append("dog");
	list.append("cat");
	list.append("parrot");
	list.append("hamster");
	list.append("snake");
	list.append("turtle");

	console.log(list.contains("hamster"));
}

function testFind() {
	const list = new LinkedList();

	list.append("dog");
	list.append("cat");
	list.append("parrot");
	list.append("hamster");
	list.append("snake");
	list.append("turtle");

	console.log(list.find("snake"));
}

function testInsertAndRemoveAt() {
	const list = new LinkedList();

	list.append("dog");
	list.append("cat");
	list.append("parrot");
	list.append("hamster");
	list.append("snake");
	list.append("turtle");

	list.removeAt(2);
	list.insertAt("elephant", 2);

	console.log(list.toString());
}

testAppend();
testPrepend();
testAt();
testShiftAndPop();
testContains();
testFind();
testInsertAndRemoveAt();
