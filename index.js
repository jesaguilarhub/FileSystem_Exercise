//Imports de los módulos
const fs = require('fs/promises');
const path = require('path');

const usersPath = path.resolve('users.json');
const helloPath = path.resolve('hello.txt');
const readFileUsers = async () => {
	//Imprimir en consola el arreglo de usuarios
	try {
		const data = await fs.readFile(usersPath, 'utf8');
		console.log(data);
	} catch (err) {
		console.error(err);
	}
};

const writeHelloWorld = async () => {
	//Escribir hello world! en el archivo hello.txt
	try {
		await fs.writeFile(helloPath, 'hello world!');
	} catch (err) {
		console.error(err);
	}
};

const addUser = async (username) => {
	//Agregar un usuario en la lista users.json
	try {
		let data = await fs.readFile(usersPath, 'utf8');
		data = JSON.parse(data);
		data.push(username);
		await fs.writeFile(usersPath, JSON.stringify(data));
	} catch (err) {
		console.error(err);
	}
};

//No hace falta ejecutar las funciones

module.exports = {
	readFileUsers,
	writeHelloWorld,
	addUser
};
