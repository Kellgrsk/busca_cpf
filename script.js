function busca() {
    console.log("Apertou")

   fetch('db.json').then(resposta => resposta.json()).then(banco => {
    
      let identificador = document.getElementById('valor').value 
      let encontrado = false

      banco.forEach(pessoa => {
        if(identificador == pessoa.fpc) {
            document.getElementById('imagem').innerHTML = pessoa.image
            encontrado = true
            document.getElementById('imagem').innerHTML = pessoa.image
            document.getElementById('nome').innerHTML = "Nome: " + pessoa.name
            document.getElementById('sobrenome').innerHTML =  "Sobrenome: " + pessoa.lastname
            document.getElementById('cidade').innerHTML = "Cidade: " + pessoa.city
            document.getElementById('pais').innerHTML =  "País: " + pessoa.country
            document.getElementById('cpf').innerHTML =  "CPF: " + pessoa.fpc
           
        }

      })
      if(!encontrado) {
         document.getElementById('erro').innerHTML = "CPF inválido"
      }

   })



}