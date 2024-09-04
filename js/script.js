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

  /* == Concatenação
    ● Concatenação é o recurso que une dois ou mais 
        textos;
    ● O operador da concatenação é o +;
    ● Exemplo: “Meu “ + “ texto “ + “ combinado”;
    ● Agora o recurso pode não fazer tanto sentido, mas 
        com variáveis teremos um melhor uso para ele;
    ● Vamos ver na prática!*/ 
    
    // 6 - Concatenação
    console.log( "Oi," + " tudo" + " bem?" )
    console.log('Testando' + ' a concatenação.')

    /* == Interpolação (Template Strings)
    ● A interpolação é um recurso semelhante a 
        concatenação;
    ● Mas nos possibilita a escrever tudo na mesma 
        string;
    ● Esta deve ser escrita `entre crases`;
    ● Podemos executar código JavaScript com ${ algum 
        código };
    ● Vamos ver na prática
    
    O símbolo ${} em JavaScript é usado para interpolar variáveis ​​em strings literais.
    
    Com o uso de ${}, podemos tornar essa tarefa mais simples e menos suscetível a erros.
    
    Aqui está um exemplo de como usar ${} em JavaScript:*/

    const name = "Gustavo"
    const age = 41 
    console.log(`Meu nome é: ${name} e eu tenho ${age} anos.`)

    console.log(`A soma de 2+2 é: ${2+2}`)

    /* == Booleans
    ● Os booleans possuem apenas dois valores: true ou 
        false;
    ● Qualquer comparação, utilizando os sinais >, <, ==, 
        resulta em um booleano;
    ● Mais a frente veremos que este tipo é importante 
        para estruturas de condição e repetição;*/

        // 8 - Booleans

        console.log(typeof true) //boolean
        console.log(typeof false) //boolean
        console.log(5>2) //true
        console.log(30>100) // false
        console.log(5<6) // true

       /* == Comparações
    ● As comparações que podemos utilizar são:
    ● Maior e menor: > e <;
    ● Maior ou igual e menor ou igual: >= e <=; 
    ● Igual: ==;
    ● Diferente: !=;
    ● Idêntico: ===;*/
    
    // 9 - Comparações
    console.log(5 <= 5) // true
    console.log(5 < 5) // false
    console.log(10 == 10) // true
    console.log(9 == 10) // false
    console.log(9 != 10) // true

        /* == Comparação de idêntico ==

    ● Os operadores === e !== funcionam como == e !=;
    ● Porém também levam em consideração o tipo do 
    dado;
    ● Estes operadores necessitam que o tipo e o dado 
    sejam iguais/diferentes;
    ● Devemos tentar ao máximo utilizar estes 
    operadores;*/

    // 10 - Idênticos
    console.log(9 == "9") // true
    console.log(9 === "9") // false 
    console.log(9 !== "9") // true
    console.log(9 != "9") // false