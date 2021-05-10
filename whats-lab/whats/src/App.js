import React from 'react'
import './App.css';
import './App'



export class App extends React.Component {
  // State com as váriaveis
  state = {
    lista:[],
    valorInputUsuario:'',
    valorInputMsg:''
  }

  //Função que atualiza o valor do input de usuario
  rendleUsuario = (event) =>{
    this.setState({valorInputUsuario: event.target.value})
  }


  //Função que atualiza o valor do input de mensagem
  rendleMsg = (event) => {
    this.setState({valorInputMsg: event.target.value})
  }


  //Função para enviar o usuário e a mensagem para o array
  aoEnviar = () => {

    const novaMensagem = {
      mensagem: this.state.valorInputMsg,
      nome: this.state.valorInputUsuario
    }

    const novaLista = [...this.state.lista];
    novaLista.push(novaMensagem);
    this.setState({lista: novaLista}) 

    this.setState({
      valorInputUsuario: "",
      valorInputMsg: ""      
    })
  };

  //Função enviar com 'ENTER'
  // Input = () => {
  //  const handleKeyDown = (event) => {
  //   if (event.key === 'Enter') {
  //     console.log('do validate')
  //   }
  // }




  render() {
    //console.log(this.state.lista)

    const listaComponentes = this.state.lista.map(({mensagem, nome}) =>{
      return (<p><strong>{nome}: </strong>{mensagem}</p>)
    })

    return ( 
      <div className={'msg-container'}>
      <h1>WhatsLab</h1>
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

      {listaComponentes}
    </div>
    )
  }


}


export default App;
