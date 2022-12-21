import React from 'react';
import { AiOutlineUser, AiOutlineUserDelete } from 'react-icons/ai';
import './index.css';

const ListUser = props => {
    const [isHover, setHover] = React.useState(false);
    return (
        <div className="container">
            {props.user.map(e =>
                <div
                    className="userContainer"
                    key={e.id}
                    onClick={() => props.setUser(v => v.filter(vv => vv.id !== e.id))}
                    onMouseOut={() => setHover(false)}
                    onMouseMove={() => setHover(true)}
                    title={`Click para remover ${e.name}.`}
                >
                    <div className='nameContainer'>
                        {isHover ? <AiOutlineUserDelete /> : <AiOutlineUser />}
                        <span>{e.name}</span>
                    </div>
                    <span>{e.age} anos</span>
                </div>
            )}
        </div>
    );
}

export default ListUser;