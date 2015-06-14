module.exports = function MatrizComJogadas(matriz) {
	var self = this;
	self.matriz = matriz;

	self.obterLinha = function(numeroDaLinha) {
		var jogadas = self.matriz[numeroDaLinha - 1];
		return converterResultados(jogadas);
	};

	self.obterColuna = function(numeroDaColuna) {
		var jogadas = [];

		for (var index = 0; index < 3; index++)
			jogadas.push(self.matriz[index][numeroDaColuna - 1]);

		return converterResultados(jogadas);
	};

	self.obterDiagonalPrincipal = function() {
		var jogadas = [];

		jogadas.push(self.matriz[0][2]);
		jogadas.push(self.matriz[1][1]);
		jogadas.push(self.matriz[2][0]);

		return converterResultados(jogadas);
	};

	self.obterDiagonalSecundaria = function() {
		var jogadas = [];

		jogadas.push(self.matriz[0][0]);
		jogadas.push(self.matriz[1][1]);
		jogadas.push(self.matriz[2][2]);

		return converterResultados(jogadas);
	};

	function converterResultados(jogadas) {
		return jogadas.join("").toUpperCase();
	}
};