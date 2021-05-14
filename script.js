function verificaLente() {
  let grauEsfericoOlhoEsquerdo = document.getElementById(
    "grauEsfericoOlhoEsquerdo"
  ).value;
  let grauEsfericoOlhoDireito = document.getElementById(
    "grauEsfericoOlhoDireito"
  ).value;

  let grauCilindricoOlhoEsquerdo = document.getElementById(
    "grauCilindricoOlhoEsquerdo"
  ).value;
  let grauCilindricoOlhoDireito = document.getElementById(
    "grauCilindricoOlhoDireito"
  ).value;
  if (
    ((grauEsfericoOlhoEsquerdo < -3 && grauEsfericoOlhoEsquerdo > -12) || 
    (grauEsfericoOlhoDireito < -3 && grauEsfericoOlhoDireito > -12) //grau esférico, seja do olho esquerdo ou do olho direito, entre -3 e -12.
      && 
    (grauCilindricoOlhoEsquerdo > -2 || grauCilindricoOlhoDireito > -2)) //grau cilíndrico até -2
    || 
    ( 
    (grauEsfericoOlhoEsquerdo < -3 && grauEsfericoOlhoEsquerdo > -10) || // grau esférico entre -3 e -10
    (grauEsfericoOlhoDireito < -3 && grauEsfericoOlhoDireito > -10) 
    && 
    (grauCilindricoOlhoEsquerdo < -2 || grauCilindricoOlhoDireito < -2) //  se o usuário apresentar grau cilíndrico
    )
  ) {
    document.getElementById("resposta").innerText =
      "Sua lente ideal é a Lente Prime";
  } else if (
    (grauEsfericoOlhoEsquerdo < 0 || grauEsfericoOlhoDireito < 0) &&
    (grauCilindricoOlhoEsquerdo > -5 || grauCilindricoOlhoDireito > -5)
  ) {
    document.getElementById("resposta").innerText =
      "Sua lente ideal é a Lente Vision";
  } else
    document.getElementById("resposta").innerText = "Não há opções disponíveis";
}


