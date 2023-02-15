# Pilhas

Uma pilha é uma estrutura de dados linear que obedece ao princípio **LIFO** (Last In First Out) assim, nas pilhas, a adição e a remoção de itens existentes ocorrem apenas no mesmo lugar: o topo da pilha.

 Alguns exemplos de pilhas podem ser: pilha de livros numa biblioteca, copos empilhados, pilhas de moedas, etc.
 
 Elas também são utilizadas por compiladores em linguagens de programação, pela memória do computador para armazenagem de variáveis e chamadas de métodos e também pelo navegador no botão de voltar para a página anterior.

Quando definimos a pilha como um ADT (Abstract Data Type), estamos apenas interessados em saber as operações do ponto de vista da usuária.

## Métodos

As pilhas possuem alguns métodos que estão disponíveis para serem utilizados, respeitando o princípio **LIFO**. Nesse caso, os métodos disponíveis são:

 - ***push(element):*** adiciona um ou mais elementos no topo da pilha
 - ***pop():*** remove elemento no topo da pilha (último elemento inserido)
 - ***peek():*** devolve o elemento no topo da pilha  (último elemento inserido), sem removê-lo
 - ***isEmpty():*** devolve *true* se a pilha não possuir elementos
 - ***clear():*** limpa a pilha
 - ***size():*** devolve o número de elementos presentes na pilha

## Implementações de stacks em Arrays

Para iniciarmos os métodos de stacks em arrays, devemos inicialmente criar nossa Stack. Em nosso exemplo, utilizaremos uma função para isso:

    function Stack(){
    let stack = []; //cria um array vazio
    };
Agora que temos nossa *Stack* criada, podemos inserir os métodos.

### Push
Este método é responsável por adicionar novos elementos na pilha, e essa inserção só poderá ser realizada no *topo* da pilha (final do array).

    this.push = function (item){
	    stack.push(item);
	};

### Pop 
Este método é responsável por remover itens da pilha, sendo que essa remoção só poderá ser realizada no *topo* da pilha (final do array).
 
 

    this.pop = function (){
	    return stack.pop();
	};

Como estamos utilizando um array para nossa pilha, podemos simplesmente utilizarmos os métodos de arrays normalmente para implementarmos nossa pilha.

### Peek
Este método é responsável por retornar para nós (apenas como leitura) o último elemento da pilha, ou seja, o *topo* dela.

    this.peek = function (){
	    return stack[stack.lenght - 1]; 
    };
Perceba que utilizamos o *length -1* para definir o último item do nosso array (topo da pilha). Isso acontece pois em javascript, se verificarmos um item usando o length do array como a posição dele, não dará certo.

Por exemplo, se possuirmos um array com 4 items 

    let array = [ "1", "2", "3", "4"];
  
O item presente na posição 4 não existe, pois os arrays iniciam da posição 0, porém o *lenght* está corretamente como 4 items, então nosso array segue tendo as seguintes posições:

    let array = [ "1", "2", "3", "4"];
				 //0    1    2    3

### isEmpty
Este método retorna *true* se nossa pilha estiver vazia e *false* caso ela tenha pelo menos um item.

    this.isEmpty = function () {
	    return stack.length === 0;
	};


### Clear
Este método limpa os elementos da nossa pilha. Podemos chamar o método *pop()* até que a nossa pilha esteja vazia, ou simplesmente podemos esvaziar o array, que seria o método mais simples.

    this.clear = function(){
	    stack = [];
    }
  
### Size
Este método retorna o tamanho da nossa pilha.

    this.size = function (){
	    return stack.lenght;
    };
A implementação completa da pilha pode ser encontrada no arquivo `stack.js` neste mesmo repositório

### Referências

 - Introduction to Stacks - https://www.youtube.com/watch?v=I37kGX-nZEI&ab_channel=NesoAcademy
 - Estruturas de dados e algoritmos com Javascript - Loiane Groner
