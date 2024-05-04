const unidades = [
  [
    "zero",
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
  ],
  [
    "dez",
    "onze",
    "doze",
    "treze",
    "catorze",
    "quinze",
    "dezesseis",
    "dezessete",
    "dezoito",
    "dezenove",
  ],
  [
    "",
    "cento",
    "vinte",
    "trinta",
    "quarenta",
    "cinquenta",
    "sessenta",
    "setenta",
    "oitenta",
    "noventa",
  ],
  [
    "cem",
    "cento",
    "duzentos",
    "trezentos",
    "quatrocentos",
    "quinhentos",
    "seiscentos",
    "setecentos",
    "oitocentos",
    "novecentos",
  ],
];
function Calcular(num) {
  if (num < 10) {
    return unidades[0][num];
  }
  if (num < 20) {
    return unidades[1][num - 10];
  }
  if (num < 100) {
    const resto = num % 10;
    const dezena = parseInt(num / 10);
    if (resto != 0) {
      return `${unidades[2][dezena]} e ${unidades[0][resto]}`;
    }
    return `${unidades[2][dezena]}`;
  }
  if (num == 100) {
    return "cem";
  }
  if (num < 1000 && num != 100) {
    const resto = num % 100;
    const dezena = parseInt(num / 100);
    if (resto != 0) {
      return `${unidades[3][dezena]} e ${Calcular(resto)}`;
    }
    return unidades[3][dezena];
  }
  if (num == 1000) {
    return "mil";
  }

  if (num < 1000000) {
    const resto = num % 1000;
    const dezena = parseInt(num / 1000);
    if (dezena == 1) {
      return `mil e ${Calcular(resto)}`;
    }
    if (resto != 0) {
      return `${Calcular(dezena)} mil e ${Calcular(resto)}`;
    }
    return `${Calcular(dezena)} mil`;
  }
  if (num < 1000000000) {
    const resto = num % 1000000;
    const dezena = parseInt(num / 1000000);
    if (dezena == 1) {
      return `um milhão`;
    }
    if (resto != 0) {
      return `${Calcular(dezena)} milhoes e ${Calcular(resto)}`;
    }
    return `${Calcular(dezena)} milhões`;
  }
}
console.log(Calcular(2312312));

const express = require("express");
const app = express();
app.get("/:num", (req, res) => {
  const resultado = Calcular(parseInt(req.params.num));
  res.status(200).json({
    body: resultado,
  });
});
app.listen(80);
