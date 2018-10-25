import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView  
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

class ListaItens extends Component {
  
  constructor(props) {
      super(props);
      //console.log('Construindo a aplicação');
      this.state = {
          listaItens: []
      };
  }

  componentWillMount() {
    //console.log('Fazer alguma coisa antes de renderizar');
    // requisição HTTP
    // http://faus.com.br/recursos/c/dmairr/api/itens.html
    const url = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';
    axios.get(url)
        .then(response => {            
            this.setState({
                listaItens: response.data
            });
        })
        .catch(err => {
            console.error(err);
        });
  }

  componentDidMount() {
    //console.log('Fazer alguma coisa depois da renderização');
  }

  render() {
    //console.log('Objeto é renderizado');
    return (
        <ScrollView style={{ backgroundColor: '#DDD' }}>
            { 
                this.state.listaItens.map(item => (                    
                        <Itens key={item.titulo} detalhe_item={item} />
                ))
            }
        </ScrollView>
    );
  }
}

export default ListaItens;
