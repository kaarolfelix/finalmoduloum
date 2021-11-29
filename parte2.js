
    
    
    var nome = prompt ("Olá, Qual é seu nome?")

    var saudacao = alert ( nome + ', seja bem-vindo(a)! ')
    

    
   

    function enigma() {

        alert ('responda ao enigma a seguir para continuar.')
        var enigmaUm = prompt('Caminhando na trilha haviam arvores dos dois lados, chapeuzinho contou 20 arvores  à sua direita. No regresso, ela contou 20 arvores à sua esquerda. Quantas arvores ela viu no total?');
        
        
        
        
         if (enigmaUm == 20) {
            alert ('Parabéns! passou de fase.')
            alert ('chapeuzinho contou 20 arvores no total, porque a sua direita na ida é a sua esquerda na volta, ou seja, nos dois itinerários, ela viu e contou as mesmas arvores, e não arvores diferentes.')
            return location = "../finalmoduloum/parte3.html"
        
        } 
         else { 
            alert ('Oh não, resposta errada! tente outra vez.');
            return location = "../finalmoduloum/game-over.html"
        }  
            
        }