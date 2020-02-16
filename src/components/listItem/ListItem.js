import React from 'react';
import PropTypes from 'prop-types';
import ItemDetail from '../ItemDetail';
import './ListItem.css';
import { withList } from '../hocHelpers';


const ListItem = ({ items, header, children }) => {
    const detailData = items.map(item => {
        return (
            <ItemDetail key={item.details.id} item={item} header={header}>
               { children }
            </ItemDetail>
        )

    })
    return (
        <div className="list-item">
            { detailData }
        </div>
    )

}

ListItem.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
}

export default withList(ListItem);

