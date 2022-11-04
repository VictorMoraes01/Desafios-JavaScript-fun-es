//Desafio 1: "Crie uma função que recebe o array alunos e um número que irá representar a média final".

const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C',
    },
];

function alunosAprovados(arr, media){
    let aprovados = [];

    for(let i = 0; i < arr.lenght; i++){

        const { nota, nome } = arr[i];

      if(arr[i].nota >= media){
        aprovados.push(arr[i].nome);
      }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos,5));

//Desafio 2: "Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final".

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 ={
    nome: 'Maria',
    idade: 30
};

const pessoa2 ={
    nome: 'Carla',
    idade: 26
};

const animal ={
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug',
};

console.log(calculaIdade.call(pessoa2, 30));