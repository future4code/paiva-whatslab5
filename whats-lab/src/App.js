import logo from './logo.svg';
import './App.css';
import React from 'react'

export class App extends React.Component {
  state = {
    lista:[{nome:'tania', mensagem:'uyghghi'}],
    valorInputUsuario:'',
    valorInputMsg:''
  }
  rendleUsuario = (event) =>{
    this.setState({valorInputUsuario: event.target.value})
  }
  rendleMsg = (event) => {
    this.setState({valorInputMsg: event.target.valeu})
  }
  aoEnviar = () =>{
    
    const novaMensagem = {
      mensagem: this.state.valorInputMsg,
      usuario: this.state.valorInputUsuario
    }
    const novaLista = [...this.state.lista]
    novaLista.push(novaMensagem)
    this.setState({lista: novaLista})
  }
  
  
  
  render() {
    console.log(this.state.lista)
     const listaComponentes = this.state.lista.map((mensagem) =>{
      return(<p>{mensagem}</p>)
    })
    return ( 
      <div className={'msg-container'}>
      <input
      className={'inpunt-usuario-container'}
      placeholder={'Usuário'}
      value={this.state.lista.nome}
      onChange={this.rendleUsuario}
      />
      <input
      className={'inpunt-msg-container'}
      placeholder={'mensagem...'}
      value={this.state.lista.mensagem}
      onChange={this.rendleMsg}
      />
      <button onClick={this.aoEnviar}>Enviar</button>
      <listaComponentes/>
    </div>
    )
  }


}

export default App;
