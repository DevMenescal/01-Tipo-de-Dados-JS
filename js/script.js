// Vamos das as boas vindas ao JS.


//window.alert("Fala Galera! Bora lançar o HelloWorld? Para tirar a zica.")
//window.confirm("Tá tudo beleza?")
//window.prompt("Beleza, vamos lá. Qual o seu nome?")

// Formas de comentar em JavaScript

// Utilizamos " // " para comentar uma só linha.

// Utilizamos " /* */" para comentar mais de uma linha.

/* Exemplo:
O pé do Padre Pedro é Perto. */

// Testando o JS
console.log("Tá funfando, meu chapa!")

//TIPOS DE DADOS:
/*É a forma de CLASSIFICAR UM dado. Todo dado vai ter um tipo.
Os tipos mais comuns são:
 *NUMBER; - TODOS O TIPO DE NÚMEROS
 *STRING; - TODO O TIPO DE TEXTO EM FORMA DE CARACTÉRES
 *BOOLEAN; - TRABALHA COM TRUE OU FALSE (VERDADEIRA OU FALSO)
 *EMPITY VALUES (NULL, UNDEFINED). - VALORES VAZIOS */

     /* == TIPO NUMBER ==

    ● Number é o tipo de dado para valores numéricos;
    ● Em JS todos os números são considerados Number;
    ● Sejam eles: inteiros, "Numero quebrados" ou negativos;
    ● Alguns exemplos: 10, 52.5, -12;
    ● Note que nas linguagens de programação as casas 
        decimais são após o caractere ponto (15.8);
    ● Em JavaScript o operador typeof exibe o tipo do dado;
     Vamos ver na prática!*/

// 1 - NUMBER
console.log(typeof 2)
console.log(typeof 2.2)
console.log(typeof -4)

   /* == OPERAÇÃO ARITMETICAS
     ● Podemos realizar operações aritméticas na 
        programação;
    ● Operadores como: +, -, *, /, podem ser utilizados;
    ● Veja um exemplo: console.log(2 + 5);
    ● A ordem matemática também é respeitada na 
        programação, exemplo: console.log(5 + (4* 12));
    ● Vamos utilizá-los na prática!*/

        // 2 - Ops. aritméticas

        console.log(2+4)
        console.log(10-5)
        console.log(5*4)
        console.log(10/2)
        console.log( 5 * ( 5 + 3 ) )

  /* == Special Numbers == 
    ● Special Numbers são dados considerados como 
        números, mas não funcionam como eles;
    ● Eles são:
        ○ Infinity;
        ○-Infinity;
        ○ NaN (Not  a Number);
    ● Algumas operações podem resultar nestes valores;
    ● Vamos ver na prática*/
     
    // 3 - Special Numbers
    console.log(typeof Infinity)
    console.log(typeof -Infinity)
    console.log(12 * "asd")
    console.log(typeof NaN)

        /* == Strings ==
    ● Strings são textos, sequência de caracteres;
    ● Em JavaScript temos três formas de criar dados de 
        texto;
    ● Aspas simples, duplas e crases;
    ● Desta maneira: console.log(“teste”);
    ● O “efeito final” é o mesmo, mas cada um destes 
        recursos tem particularidades*/

        // 4 - Strings
        console.log("Um texto qualquer.")

        console.log('Um texto qualquer de novo.')

        console.log(`Agora mais uma vez`)

        /* == Mais sobre strings
    ● Uma string deve sempre começar e terminar com o mesmo caractere (“, ‘, `);
    ● Há algumas combinações de caracteres que tem efeitos interessantes nas strings;
    ● Por exemplo o \n (contra-barra), ele pula uma linha no texto;*/

    // 5 - Símbolos Especiais em String
    console.log("Testando \nquebra de linha.")

    console.log("Espaçamento \tde tab.")