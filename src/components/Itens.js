import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

class Itens extends Component {
  
  constructor(props) {
      super(props);
      console.log('Construindo a aplicação');
  }

  componentWillMount() {
    console.log('Fazer alguma coisa antes de renderizar');
  }

  componentDidMount() {
    console.log('Fazer alguma coisa depois da renderização');
  }

  render() {
    console.log('Objeto é renderizado');
    return (
        <View style={styles.item}>
            <View style={styles.photo}>
                <Image 
                    style={{ height: 100, width: 100 }} 
                    source={{ uri: this.props.detalhe_item.foto }} />
            </View>
            <View style={styles.detailsItem}>
                <Text style={styles.txtTitle}>{this.props.detalhe_item.titulo}</Text>
                <Text style={styles.txtPrice}>R$: {this.props.detalhe_item.valor}</Text>
                <Text style={styles.txtDetail}>Local: {this.props.detalhe_item.local_anuncio}</Text>
                <Text style={styles.txtDetail}>Data publicação: {this.props.detalhe_item.data_publicacao}</Text>
            </View>            
            
        </View>
    );
  }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row'
    },
    photo: {
        width: 102,
        height: 102
    },
    detailsItem: {
        marginLeft: 20,
        flex: 1
    },
    txtTitle: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 5
    },
    txtPrice: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    txtDetail: {
        fontSize: 16
    }
});

export default Itens;
