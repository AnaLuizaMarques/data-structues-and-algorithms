class VetorNaoOrdenado {
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.ultimaPosicao = -1;
        this.valores = [];

    }
// O(n)
    imprime() {
        if (this.ultimaPosicao === -1) {
            console.log('O vetor está vazio.');
        } else {
            for (let i = 0; i <= this.ultimaPosicao; i++) {
                console.log(i + ' - ', this.valores[i]);
            }
        }       
    }

// O(1) - O(2)
    insere(valor) {
        if (this.ultimaPosicao === this.capacidade -1) {
            console.log('Capacidade máxima atendida.')
        } else {
            this.ultimaPosicao += 1;
            this.valores[this.ultimaPosicao] = valor;
        }
    }

// O(n)
    pesquisar(valor) {
        for (let i = 0; i <= this.ultimaPosicao; i++) {
            if (valor === this.valores[i]) {
                return i
            }
        }
        return -1   
    }

// O(n)
    excluir(valor) {
        let posicao = this.pesquisar(valor)
        if (posicao === -1) {
             return -1
        } else {
           for  (posicao; posicao < this.ultimaPosicao; posicao++) {
               this.valores[posicao] = this.valores[posicao + 1];
           }
           this.ultimaPosicao -= 1;    
        }
    }
}

    vetor = new VetorNaoOrdenado(5);
    console.log(vetor.capacidade);
    console.log('--------------------');
 
    vetor.insere(2);
    vetor.insere(3);
    vetor.insere(5);
    vetor.insere(8);
    vetor.insere(7);
    vetor.insere(9);
    vetor.imprime();

    console.log('--------------------');
    console.log(vetor.pesquisar(3));
    console.log('--------------------');   
    vetor.excluir(5);
    vetor.imprime();



