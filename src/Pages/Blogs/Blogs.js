import React from 'react';
import useTitle from '../../Hooks/UseTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='ml-8 mr-8 p-5'>
            <div className='bg-amber-200 rounded p-5 mb-8'>
                <h1>Question-01:Difference between SQL and NoSQL?</h1>
                <p>Ans:SQL databases are relational, NoSQL databases are non-relational.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>
            </div>
            <div className='bg-amber-200 rounded p-5 mb-8'>
                <h1>Question-02:What is JWT, and how does it works?</h1>
                <p>Ans:For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. </p>
            </div>
            <div className='bg-amber-200 rounded p-5 mb-8'>
                <h1>Question-03: What is the difference between JavaScript and NodeJs</h1>
                <p>Ans:Javascript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. JavaScript is also commonly used in game development and mobile app development. Node js is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server</p>
            </div>
            <div className='bg-amber-200 rounded p-5 mb-8'>
                <h1>Question-04: How does NodeJS handle multiple requests at the same time?</h1>
                <p>Ans:Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
                No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded.</p>
            </div>
        </div>
    );
};

export default Blogs;