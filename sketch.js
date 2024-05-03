function setup() {
    let notas = [7, 8, 4, 8, 10, 6, 1 ];
    let nomes = ["Ana", "Jose", "Pedro", "Beatriz", "Jorge", "Carlos", "Maria"];
    // poisição   0       1        2        3          4        5         6
    // instrução - o 1º nome na posição ZERO e o 2º na posição UM  etc 
  
        for (let contador in nomes) {
        console.log(contador);
        console.log(nomes[contador], "=" ,  notas[contador]);
      }
  
  
    console.log(nomes[0], "=", notas[0]);    
    console.log(nomes[1], "=", notas[1]);
    console.log(nomes[2], "=", notas[2]);
    console.log(nomes[3], "=", notas[3]);
    console.log(nomes[4], "=", notas[4]);
    console.log(nomes[5], "=", notas[5]);
    console.log(nomes[6], "=", notas[6]);
  
    for(let contador in notas)
    console.log(nomes[contador], "=" ,  notas[contador])
    
    }
