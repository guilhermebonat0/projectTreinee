function validarQualificacao(nivel){
    if(nivel.length === 0) {
        return {valido:false, texto:"Por favor, insira uma qualificação válida!"}
    }else{
        return {valido:true, texto:""}
    }
}

export{validarQualificacao};