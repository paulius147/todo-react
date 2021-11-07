import React, { Fragment, useState, useContext } from 'react'
import ListContext from '../../context/list/listContext';

const Form = () => {
    const listContext = useContext(ListContext);
    const { addTask, list } = listContext;
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (text.length < 1) {
            alert('Please Enter Task')
            console.log(list);
        } else {
            addTask(text);
            setText('');
        }
    }

    const onChange = (e) => {
        setText(e.target.value);
    }

    return (
        <Fragment>
            <h1 className='title'>Things To Do</h1>
            <form onSubmit={onSubmit} className="list-form">
                <input onChange={onChange} className='form-input' type="text" value={text} placeholder='Enter Task...' />
                <input className='form-submit' type="submit" value='Add' />
            </form>
            <hr />
        </Fragment>
    )
}

export default Form
