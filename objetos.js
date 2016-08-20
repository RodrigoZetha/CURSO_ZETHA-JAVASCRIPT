/*
var pessoa = {
     nome: 'Rodrigo'
    ,idade: 31
    ,sexo: 'Masculino'
    ,andar: function(){
        return 'Ando com as pernas'
  }
}

console.log('Nome da pessoa:', pessoa.nome);
console.log('Idade da pessoa:', pessoa.idade);
console.log('Sexo da pessoa:', pessoa.sexo);
console.log('Como a pessoa anda?', pessoa.andar());
*/

var rodrigo  ={
     nome: 'Rodrigo'
    ,idade: 31
    ,sexo: 'Masculino'
    ,andar: function(){
        return 'ando com os pés'
    }
  }

var lucas = {
     nome: 'Lucas Taliberti'
    ,idade: 26
    ,sexo: 'Masculino'
    ,andar:  function(){
        return 'ando pela rua'
    }
  }

var PrintPessoa = function(){
    console.log('Nome da pessoa',       this.nome)
    console.log('Idade da pessoa',      this.idade)
    console.log('Sexo da pessoa',       this.sexo)
    console.log('Como a pessoa anda?',  this.andar())
}

var PrinPessoaParametro =  function(pessoa){
  console.log('Nome da pessoa',       pessoa.nome)
  console.log('Idade da pessoa',      pessoa.idade)
  console.log('Sexo da pessoa',       pessoa.sexo)
  console.log('Como a pessoa anda?',  pessoa.andar())
}

var printRodrigo = PrintPessoa.bind(rodrigo)
var printLucas = PrinPessoaParametro(lucas)

printRodrigo()
