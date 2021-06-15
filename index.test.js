const app = require("./index");
const path = require("path");
const fs = require("fs");

jest.mock('fs');

test('Lectura del archivo users.json', () => {
    const pathFile = path.resolve('users.json');

    app.readFileUsers();

    expect(fs.readFile).toHaveBeenCalledTimes(1);
    expect(fs.readFile.mock.calls[0][0]).toBe(pathFile);
});

test('Escritura correcta del archivo hello.txt con la cadena Hello world!', () => {
    app.writeHelloWorld();

    const pathFile = path.resolve('hello.txt');
    const data = "Hello world!";

    expect(fs.writeFile).toHaveBeenCalledTimes(1);
    expect(fs.writeFile).toHaveBeenCalledWith(pathFile, data, expect.any(Function));
});

