import React, { useContext, useEffect, useState } from 'react';
import ListContext from '../../context/list/listContext';

const Nav = () => {
    const listContext = useContext(ListContext);
    const { list, current, setCurrent, moveActive, moveCompleted } = listContext;

    const [isInitialRender, setIsInitialRender] = useState(true);

    useEffect(() => {
        if (isInitialRender) {
            setIsInitialRender(false);
            moveActive();
            moveCompleted();
        }
        // eslint-disable-next-line
    }, [isInitialRender]);

    const onClick = (e) => {
        setIsInitialRender(true);
        setCurrent(e.target.value);
    }

    return (
        <div className='nav'>
            <span>{list.length} Items Left</span>
            <div className="buttons">
                <button onClick={onClick} style={current === 'All' ? { border: "1px solid white" } : { border: '0' }} className="all" value='All'>All</button>
                <button onClick={onClick} style={current === 'Active' ? { border: "1px solid white" } : { border: '0' }} className="all" value='Active'>Active</button>
                <button onClick={onClick} style={current === 'Completed' ? { border: "1px solid white" } : { border: '0' }} className="all" value='Completed'>Completed</button>
            </div>
        </div >
    )
}

export default Nav