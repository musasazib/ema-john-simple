import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity} = props.product;
    const reviewItemStyle={
        borderBottom: '1px solid lightGray',
        marginBottom: '5px',
        paddingBottom: '5px',
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h3 className="product-name">{name}</h3>
            <p>Quantity: {quantity}</p>
            <br/>
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;