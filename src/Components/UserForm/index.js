import React from 'react';
import { UserEntity } from '../../Entities/userEntity';
import { AiOutlineUserAdd } from 'react-icons/ai';
import './index.css';

const UserForm = (props) => {
    const [Value, setValue] = React.useState({ name: '', age: 0 });
    const [isValid, setValid] = React.useState([true, true]);

    return (
        <div className='container'>
            <form onSubmit={(e) => {
                e.preventDefault();
                var _isValid = [(Value.name !== ''), (Value.age > 0)]
                if (_isValid.indexOf(false) === -1) {
                    props.setUser(v => v.concat([new UserEntity(null, Value.name, Value.age)]));
                    setValue({ name: '', age: 0 });
                    setValid([true, true]);
                }
                else
                    setValid(_isValid);
            }}>
                <div className='title'>
                    <AiOutlineUserAdd />
                    <span>Cadastro</span>
                </div>
                <div className='formControl'>
                    <div className='formControlLabel'>Nome</div>
                    <div className='formControlInputContainer'>
                        <input
                            className={`formControlInput${(!isValid[0]) ? ' error' : ''}`}
                            name='name'
                            value={Value.name}
                            autoComplete='off'
                            placeholder='Ex.: Regina'
                            onChange={(e) => setValue(v => { return { ...v, name: e.target.value } })}
                        />
                    </div>
                    <div className='errorMsg'> {!isValid[0] && `Por favor, indique um nome válido.`}</div>
                </div>
                <div className='formControl'>
                    <div className='formControlLabel'>Idade</div>
                    <div className='formControlInputContainer'>
                        <input
                            type='number'
                            min={0}
                            max={120}
                            name='age'
                            value={Value.age}
                            className={`formControlInput${(!isValid[1]) ? ' error' : ''}`}
                            placeholder='0'
                            onChange={(e) => setValue(v => { return { ...v, age: Number(e.target.value) } })}
                        />
                    </div>
                    <div className='errorMsg'> {!isValid[1] && `Por favor, indique uma idade válido.`}</div>
                </div>
                <div className='formControlSubmit'>
                    <input type='submit' className='formControlSubmitButton' value='Salvar' />
                </div>
            </form>
        </div>
    );
}

export default UserForm;