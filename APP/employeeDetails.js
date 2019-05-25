import React from 'react';
import {View,Text} from 'react-native';
import {ActivityIndicator, FlatList } from 'react-native';

export default class Employee extends React.Component {
    constructor() {
        super();
        this.state ={
            isLoading : true,
            dataSource: []
        }
    }

    componentDidMount() {
        fetch('https://api.myjson.com/bins/uej8g')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            this.setState({
                isLoading: false,
                dataSource: responseJson.user
            })
        })
    }

    _renderItem = ({item}) => (<View>
                <Text>{item.id}</Text>
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
                <Text>{item.gender}</Text>
                <Text>{item.email}</Text>
                <Text>{item.phoneNo}</Text>
                </View>);

    render() {
        if(this.state.isLoading){
            return(
                <View>
                    <ActivityIndicator size="large" animating />
                </View>
            )
        }
        else{
            return (
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this._renderItem}
                />
            );
        }
    }
}