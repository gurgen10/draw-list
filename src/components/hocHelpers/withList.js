import React, { Component } from 'react'
import Loading from '../Loading';

const withList = (ListComponent) => {
    return class extends Component {
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
