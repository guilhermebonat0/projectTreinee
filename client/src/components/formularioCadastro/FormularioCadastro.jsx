const { Component } = require("react");


export class FormularioCadastro extends Component{
    render(){
    return (
        <form>
           <input type="text" placeholder="email" />     
           <input type="text" placeholder="senha" />
           <button>Login</button>
        </form>
    );
    }
}
