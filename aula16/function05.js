// FATORIAL DE MANEIRA RECURSIVA
// UMA RECURSÃO ACONTECE QUANDO UMA FUNÇÃO CHAMA ELA MESMA

// RECURSIVIDADE
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(6))

/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n * (n-1)!

exceto 1! porque fatorial de 1 é 1

*/

/*
No caso a função se chama automaticamente enquanto (n) não for igual a 1, quando essa condição se torna verdadeira o sistema para o loop e inicia os retornos, podemos dizer a grosso modo que o sistema empilha as chamadas e quando (n) se torna 1 ele inicia o desempilhamento executando as multiplicações de cada retorno como no exemplo a baixo:
console.log(fatorial(5) )

chamada1 (n = 5 => n == 1? false => senão => 5 * fatorial(5 - 1))
chamado2 (n = 4 => n == 1? false => senão => 4 * fatorial(4 -1))
chamada3 (n = 3 => n == 1? false => senão => 3 * fatorial(3 -1))
chamada4 (n = 2 => n == 1? false => senão => 2 * fatorial(2 -1))
chamada5 (n = 1 => n == 1? true => então retorne 1)
retornou para a chamada4 (retorne 2 * retorno da chamada5(1))
retornou para a chamada3 (retorne 3 * retorno da chamada4(2))
retornou para a chamada2 (retorne 4 * retorno da chamada3(6))
retornou para a chamada1 (retorne 5 * retorno da chamada2(24))
retornou para o console.log(120)
*/

/*
1 function fatorial(n) {
2     if (n == 1) {
3         return 1 
4     } else {
5         return n * fatorial(n-1)
6     }
7 }
8 console.log(fatorial(5))

  SÃO 2 PASSOS, 2 BLOCOS:

Primeiro faz-se o BLOCO 2. E o BLOCO 1 fica PENDENTE/AGUARDANDO.

   BLOCO 1    |||||          BLOCO 2          
                       |||||
return n(5) * ||||| fatorial (n-1), ou seja = 4
return n(4) * ||||| fatorial (n-1), ou seja = 3
return n(3) * ||||| fatorial (n-1), ou seja = 2
return n(2) * ||||| fatorial (n-1), ou seja = 1   AQUI: n == 1

Neste último, a CONDIÇÃO de PARADA do LOOP, o if (linha2), torna-se VERDADEIRO e  RETORNA 1 (linha3)  .
No site W3Schools diz: "When JavaScript reaches a return statement, the function will stop executing".
Só que, neste caso, a função não é finalizada pois ainda há a PENDÊNCIA de CÁLCULOS do BLOCO 1.
E, nesta pendência, há OUTRO RETURN (linha5)
Pois então, se a função não é finalizada, para onde vai este  return 1 (linha3)  ?
Quando uma função retorna um valor, este é retornado para a CHAMADA da FUNÇÃO. Ex:

function Multiplicar(A, B) {return A * B} <- função
let x = Multiplicar(4, 3) <- chamada para a função
Quando faz-se esta chamada, o argumento  4  é passado para o parâmetro  A  e o argumento  3  é passado para o parâmetro  B  . A multiplicação acontece e o RESULTADO é RETORNADO para a CHAMADA da FUNÇÃO, que então é guardada na variável  x  . Neste caso fica:  x = 12

Portanto, o  return 1 (linha3)  é retornado para as CHAMADAS: fatorial(n-1) (linha5)  e  fatorial(5) (linha 8)  .
Ou seja, estas DUAS passam a valer apenas:  1  . (O OUTRO RETURN, do BLOCO 1, irá SOBREPOR este VALOR mais para frente, retornando o resultado FINAL da FATORAÇÃO).
Retornado o valor  1  , começam as multiplicações do BLOCO 1 de TRÁS para FRENTE.
*Não entendi o PORQUÊ de trás para frente, mas como já bem ouvimos de nossos professores de matemática: "a ordem dos fatores não altera o produto". Então não faz diferença.

ATENÇÃO:
NÃO É: FAZER AS MULTIPLICAÇÕES E SOMAR OS RESULTADOS.
E SIM: MULTIPLICAR, PEGAR O RESULTADO, E MULTIPLICAR PELO PRÓXIMO  n  .

return n(2) * _1  = 2
return n(3) * 2   = 6
return n(4) * 6   = 24
return n(5) * 24  = 120   AQUI: return n * fatorial(n-1) == 120

Este "_1" é o  return 1 (linha3)  , que substitiu o  fatorial(n-1) (linha5)  .

Ilustrado de outra forma:
n(2) * _1 = 2 * n(3) = 6 * n(4) = 24 * n(5) = 120

Terminada as multiplicações, o resultado de  n * fatorial(n-1)  é RETORNADO: 120.
Este valor SOBREPUJARÁ aquele  return 1 (linha3)  , RETORNANDO o resultado FINAL da fatoração para a CHAMADA fatorial(5) (linha 8)  , que irá exibir o resultado na tela.
*/