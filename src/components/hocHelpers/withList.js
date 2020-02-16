import React, { Component } from 'react'
import Loading from '../Loading';
import DataService from '../../service/ListDataService';

const withList = (ListComponent) => {
    return class extends Component {
        dataservice = new DataService();

        state = {
            items: null,
        }

        componentDidMount() {
            this.getItems();
        }

        getItems = () => {
            const items = this.props.getItems();
            setTimeout(() => {
                this.setState({items});
            }, 500)
        }
        render() {
            const { items } = this.state;
            const { header } = this.props;
        
            if(!items) return <Loading/>

            return ( <ListComponent items={items} {...this.props} header={header} /> )
        }
    }
}

export default withList;
