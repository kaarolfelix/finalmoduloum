
function enigma() {

    alert ('responda ao enigma a seguir para continuar.')
    var enigmaUm = prompt('A Vovó dividiu 20 balas entre as duas netas. Que horas são?                 a) 10:02 b) 13:50 c) 20:02 d) 8:02 e) 12:50')
    
   
    
    
     if (enigmaUm == 'b') {
        alert ('Parabéns! passou de fase.')
        alert ('Se a avó dividiu 20 balas entre as duas netas, cada neta recebeu 10 balas, ou seja, são dez para as duas (13h50).')
            return location = "../finalmoduloum/parte4.html"
        
    } 
     else { 
        alert ('Oh não, resposta errada! tente outra vez.');
        return location = "../finalmoduloum/game-over.html"
    }  
    
     
    }




            
        




