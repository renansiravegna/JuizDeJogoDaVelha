var analisador = {};

analisador.analisar = function(sequenciaDeCaracteres) {
	return sequenciaDeCaracteres === "XXX" || sequenciaDeCaracteres === "OOO";
};

module.exports = analisador;