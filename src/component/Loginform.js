
import { useForm } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import InputForm from './InputForm'
import api from '../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { isLogin } from '../store/auth/action/auth'

function Loginform() {

    const dispatch = useDispatch()
    const {token, loadingAuth, msg} = useSelector(state=>state.auth)
    console.log(token)

    const methodLogin = useForm({
        mode:"onSubmit",
        resolver:yupResolver(
            yup.object().shape({
                email: yup.string().required("username kosong"),
                password: yup.string().min(8, "password salah").required("password kosong"),
            })
        )
    }) 
    
    const post = (data) =>{
        dispatch(isLogin(data))
        // api.post("api/login/", data)
        //     .then(response =>{
        //         console.log(response)
        //         localStorage.setItem("token",response.data.token)
        //     })
        //     .catch(function(error){
        //         console.log(error);
        //     })
    }
   

  return (
    <div>
        <form onSubmit={methodLogin.handleSubmit(post)}>
            <InputForm name="email " type="text" method={methodLogin} methodName="email"/>
            <InputForm name="password " type="password" method={methodLogin} methodName="password"/>
            {/* <div>
            <label htmlFor='username'>username:</label>
            
            <input id='username' type='text' placeholder='Username' {...methodLogin.register("username")} ></input>
            {methodLogin.formState.errors["username"] && <p>{methodLogin.formState.errors["username"].message}</p>}
            <input id='username' type='text' placeholder='Username' {...methodLogin.register("data.email")} ></input>
            </div>
            <div>
            <label htmlFor='username'>password:</label>
            <input type='password' {...methodLogin.register("password")} ></input>
            {methodLogin.formState.errors["password"] && <p>{methodLogin.formState.errors["password"].message}</p>}
            </div>
            <button type='submit' >Login</button> */}
            <button type='submit' >Login</button>
        </form>
    </div>
  )
}

export default Loginform