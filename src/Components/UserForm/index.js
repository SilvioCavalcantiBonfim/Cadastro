import React from 'react';
import { UserEntity } from '../../Entities/userEntity';
import { AiOutlineUserAdd } from 'react-icons/ai';
import './index.css';

const validation = (state, action) => {
    if(action.type === 'UPDATE_NAME')
        return {...state,name: {value: action.val, isValid: true}};
    if(action.type === 'FOCUSOUT_NAME')
        return {...state,name: {value: state.name.value, isValid: state.name.value !== ''}};
    if(action.type === 'UPDATE_AGE')
        return {...state,age: {value: action.val, isValid: true}};
    if(action.type === 'FOCUSOUT_AGE')
        return {...state,age: {value: state.age.value, isValid: state.age.value > 0}};
    if(action.type === 'RESET')
        return {name: {value: '', isValid: true}, age: {value: 0, isValid: true}};
}

const UserForm = (props) => {
    const [Value, dispatcherValue] = React.useReducer(validation, {name: {value: '', isValid: true}, age: {value: 0, isValid: true}});

    return (
        <div className='container'>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (Value.name.value !== '' && Value.age.value > 0) {
                    props.setUser(v => v.concat([new UserEntity(null, Value.name.value, Value.age.value)]));
                    dispatcherValue({type: 'RESET'});
                }else{
                    dispatcherValue({type: 'FOCUSOUT_NAME'})
                    dispatcherValue({type: 'FOCUSOUT_AGE'})
                }
            }}>
                <div className='title'>
                    <AiOutlineUserAdd />
                    <span>Cadastro</span>
                </div>
                <div className='formControl'>
                    <div className='formControlLabel'>Nome</div>
                    <div className='formControlInputContainer'>
                        <input
                            className={`formControlInput${(!Value.name.isValid) ? ' error' : ''}`}
                            name='name'
                            value={Value.name.value}
                            autoComplete='off'
                            placeholder='Ex.: Regina'
                            onBlur={() => dispatcherValue({type: 'FOCUSOUT_NAME'})}
                            onChange={(e) => dispatcherValue({type: 'UPDATE_NAME', val: e.target.value})}
                        />
                    </div>
                    <div className='errorMsg'> {!Value.name.isValid && `Por favor, indique um nome válido.`}</div>
                </div>
                <div className='formControl'>
                    <div className='formControlLabel'>Idade</div>
                    <div className='formControlInputContainer'>
                        <input
                            type='number'
                            min={0}
                            max={120}
                            name='age'
                            value={Value.age.value}
                            className={`formControlInput${(!Value.age.isValid) ? ' error' : ''}`}
                            placeholder='0'
                            onBlur={() => dispatcherValue({type: 'FOCUSOUT_AGE'})}
                            onChange={(e) => dispatcherValue({type: 'UPDATE_AGE', val: Number(e.target.value)})}
                        />
                    </div>
                    <div className='errorMsg'> {!Value.age.isValid && `Por favor, indique uma idade válido.`}</div>
                </div>
                <div className='formControlSubmit'>
                    <input type='submit' className='formControlSubmitButton' value='Salvar' />
                </div>
            </form>
        </div>
    );
}

export default UserForm;