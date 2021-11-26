function validarEmail(email){
    if(email.length === 0) {
        return {valido:false, texto:"Email deve ser válido"}
    }else{
        return {valido:true, texto:""}
    }
}

function validarSenha(senhaHash){
    if(senhaHash.length < 8) {
        return {valido:false, texto:"Senha deve conter no mínimo 8 caracteres"}
    }else{
        return {valido:true, texto:""}
    }
}

export{validarEmail, validarSenha};