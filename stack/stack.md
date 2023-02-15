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
 - ***isFull():*** devolve *true* se a pilha estiver cheia
 - ***clear():*** limpa a pilha
 - ***size():*** devolve o número de elementos presentes na pilha


### Referências

 - Introduction to Stacks - https://www.youtube.com/watch?v=I37kGX-nZEI&ab_channel=NesoAcademy
 - Estruturas de dados e algoritmos com Javascript - Loiane Groner
