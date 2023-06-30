import React from 'react'

function InputForm(props) {
  return (
    <div className='flex justify-start items-start flex-col'>
        <label htmlFor={props.name}>{props.name}</label>
        <input className='border p-1 rounded-md' {...props.method.register(props.methodName)} type={props.type} id={props.name} placeholder={props.name} min={props.min} max={props.max} />
        {props.method.formState.errors[props.methodName] && <p>{props.method.formState.errors[props.methodName].message}</p>}
    </div>
  )
}

export default InputForm