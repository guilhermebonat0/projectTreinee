function validaUsuario(usuario){
    if (usuario.length === 0 || usuario.length > 15 ) {
        return {valido:false, texto:"Usuario deve conter até 15 caracteres!"}
    }else{
        return {valido:true, texto:""} 
    }
}

function validaEmail(email){
    if(email.length === 0) {
        return {valido:false, texto:"Email deve ser válido"}
    }else{
        return {valido:true, texto:""}
    }
}

function validaSenha(senhaHash){
    if(senhaHash.length < 8) {
        return {valido:false, texto:"Senha deve conter no mínimo 8 caracteres"}
    }else{
        return {valido:true, texto:""}
    }
}

export{validaUsuario, validaEmail, validaSenha};