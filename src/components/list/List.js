import React, { useContext } from 'react'
import ListItem from './ListItem';
import ListContext from '../../context/list/listContext';

const List = () => {
    const listContext = useContext(ListContext);
    const { list, active, completed, current } = listContext;

    return (
        <div className='list'>
            {current === 'All' ? list.map(task => <ListItem key={task.id} task={task} />) : current === 'Active' ? active.map(task => <ListItem key={task.id} task={task} />) : current === 'Completed' ? completed.map(task => <ListItem key={task.id} task={task} />) : ''}
        </div>
    )
}

export default List
