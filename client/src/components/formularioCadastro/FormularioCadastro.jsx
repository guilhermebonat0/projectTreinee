import "./estilo.css"
const { Component } = require("react");


export class FormularioCadastro extends Component{
    render(){
    return (
        <form>
           <input className="tabelaLogin" type="text" placeholder="email" />     
           <input className="tabelaLogin" type="text" placeholder="senha" />
           <button id="botaoLogin" className="tabelaLogin">Login</button>
        </form>
    );
    }
}
