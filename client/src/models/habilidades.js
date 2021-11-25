function validarHabilidades(habilidades){
    if(habilidades.length === 0) {
        return {valido:false, texto:"Por favor, insira uma habilidade válida!"}
    }else{
        return {valido:true, texto:""}
    }
}

export{validarHabilidades};