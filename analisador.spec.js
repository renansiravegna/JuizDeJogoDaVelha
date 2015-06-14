var assert = require("assert");
var analisador = require("./analisador");

describe("Analisador de jogadas", function() {
	it("deve declarar vencedor se a sequência de caracteres forem iguais", function() {
		assert.equal(true, analisador.analisar("XXX"));
		assert.equal(true, analisador.analisar("OOO"));
	});

	it("deve declarar perdedor se a sequência de caracteres tiver um diferente", function() {
		assert.equal(false, analisador.analisar("OXX"));
		assert.equal(false, analisador.analisar("XOX"));
		assert.equal(false, analisador.analisar("XXO"));
	});
});