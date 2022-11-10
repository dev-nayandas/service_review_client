import React from 'react';
import useTitle from '../../Hooks/UseTitle';

const MyReviews = () => {
    useTitle('My Reviews');
    return (
        <div>
            <h1>This is my review page</h1>
        </div>
    );
};

export default MyReviews;