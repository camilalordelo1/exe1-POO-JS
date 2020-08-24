/* Atividade 01 - Professor Flávio Mota - Desenvolvimento de Sistemas
    Criar uma classe que represente um posto de gasolina, Criar um método
    chamado abastecer onde o usuário poderá escolher o tipo de combustível
    (gasolina = R$ 4,00 ou Álcool = R$ 2,50) que irá colocar no seu carro e a
    quantidade de litros, A Classe deverá ter um método de pagamento que
    possa ser escolhido entre dinheiro e cartão. Outro método que vai imprimir
    o resumo do abastecimento: Mostrando a quantidade de litros que foi
    colocado, o tipo de combustível, forma de pagamento escolhida e o valor a
    pagar. */

// POSTO - EXERCÍCIO 1
    class CalcPosto {
        constructor(){
            this.combus;
            this.pag;
            this.valida;
            this.litros;
            this.valor;
        }

        abastecer(){
            this.valida = prompt("Qual combustível quer abastecer? 1 - Gasolina / 2 - Álcool");
            if (this.valida == 1){
                this.combus = 'Gasolina'
                this.litros = prompt("Quantos litros?");
                this.valor = 4 * this.litros;
            } else if (this.valida == 2){
                this.combus = 'Álcool'
                this.litros = prompt("Quantos litros?");
                this.valor = 2.5 * this.litros;
            } else {
                return alert("[ERROR] Combustível inválido");
            }
            return true;
        }

        pagamento(){
            this.valida = prompt("Qual forma de pagamento? 1 - Dinheiro / 2 - Cartão");
            if (this.valida == 1){
                this.pag = 'Dinheiro';
            } else if (this.valida == 2){
                this.pag = 'Cartão';
            } else {
                return alert("[ERROR] Pagamento inválido");
            }
        }

        final(){
            if(this.abastecer()){
                this.pagamento()
            }
            alert(` **RESUMO**
            \n Tipo de Combustível: ${this.combus}
            \n Quant. de litros: ${this.litros} 
            \n Valor total: ${this.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} 
            \n Forma de Pagamento: ${this.pag}`);
        }

    }
    
    let calc = new CalcPosto()


/* Atividade 02 -   Professor Flávio Mota - Desenvolvimento de Sistemas
    Crie uma classe animal com os atributos e métodos gerais para as
    subclasses, crie uma classe cachorro herdando de animal e faça-o latir.
    Crie uma classe gato herdando de animal e faça-o miar. Faça os dois
    animais caminharem mostrando o número de passos de cada um.
    Observação: os animais só podem andar se estiverem alimentados, para
    isso crie um atributo para fazer essa condição, A cada 100 passos o animal
    deve ser alimentado, caso contrário ele não consegue andar. */

// POSTO - ANIMAIS EXE 002
    class Animal {
        constructor() {
            this.filo;
            this.classe;
            this.ordem;
            this.familia;
            this.genero;
            this.especie;
            this.validaFome;
            this.som;
        }

        andando(){
            let i;
            this.validaFome = window.confirm("Alimentou seu animalzinho?")
            if (this.validaFome) { 
                res1.innerHTML += `</br>`
                for (i = 0; i <= 100; i++) {
                        res1.innerHTML += (this.som);
                }
                res1.innerHTML += (`<br> <strong> ESTOU CANSADO, ME ALIMENTE CLICANDO NO MEU BOTÃO! </strong>`)
            } else {
                this.validaFome = false;
                alert("Alimente seu animalzinho para começar!")
            }
        }
    }

    class Cachorro extends Animal {
        constructor() {
            super(...arguments);
            this.som = "Au ";
        }
    }

    class Gato extends Animal {
        constructor() {
            super(...arguments);
            this.som = "Miau ";
        }
    }

    let x = new Cachorro();
    let y = new Gato();


