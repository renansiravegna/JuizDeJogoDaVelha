var assert = require("assert");
var MatrizComJogadas = require("./matrizComJogadas");

describe("Matriz com jogadas", function() {
	var matriz = new MatrizComJogadas([
		["X", "O", "X"],
		["O", "X", "O"],
		["O", "O", "X"]
	]);

	var outraMatriz = new MatrizComJogadas([
		["O", "X", "O"],
		["O", "O", "X"],
		["X", "O", "X"]
	]);

	describe("obtendo as linhas", function() {
		it("deve retornar as jogadas da primeira linha", function() {
			assert.equal(matriz.obterLinha(1), "XOX");
			assert.equal(outraMatriz.obterLinha(1), "OXO");
		});

		it("deve retornar as jogadas da segunda linha", function() {
			assert.equal(matriz.obterLinha(2), "OXO");
			assert.equal(outraMatriz.obterLinha(2), "OOX");
		});

		it("deve retornar as jogadas da terceira linha", function() {
			assert.equal(matriz.obterLinha(3), "OOX");
			assert.equal(outraMatriz.obterLinha(3), "XOX");
		});
	});

	describe("obtendo as colunas", function() {
		it("deve retornar as jogadas da primeira coluna", function() {
			assert.equal(matriz.obterColuna(1), "XOO");
			assert.equal(outraMatriz.obterColuna(1), "OOX");
		});

		it("deve retornar as jogadas da segunda coluna", function() {
			assert.equal(matriz.obterColuna(2), "OXO");
			assert.equal(outraMatriz.obterColuna(2), "XOO");
		});

		it("deve retornar as jogadas da terceira coluna", function() {
			assert.equal(matriz.obterColuna(3), "XOX");
			assert.equal(outraMatriz.obterColuna(3), "OXX");
		});
	});

	describe("obtendo as diagonais", function() {
		it("deve retornar as jogadas da diagonal principal", function() {
			assert.equal(matriz.obterDiagonalPrincipal(), "XXO");
			assert.equal(outraMatriz.obterDiagonalPrincipal(), "OOX");
		});

		it("deve retornar as jogadas da diagonal secundária", function() {
			assert.equal(matriz.obterDiagonalSecundaria(), "XXX");
			assert.equal(outraMatriz.obterDiagonalSecundaria(), "OOX");
		});
	});
});