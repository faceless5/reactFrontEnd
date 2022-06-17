import { API } from "../config"
// API = http://localhost:5000/api

export const userRegister = (name, email, password) => {
    const user = {name, email, password}
    return fetch(`${API}/register`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        // body:JSON.stringify({name, email, password})
        body: JSON.stringify(user)
    })
    // .then(res=>res.json())
    .then((res)=>{ return res.json()})
    .catch(err=>console.log(err))
}

export const confirmation = (token) => {
    return fetch(`${API}/confirmuser/${token}`,{
        method:"GET"
    })
    .then((res)=>{ return res.json()})
    .catch(err=>console.log(err))
}

export const signIn = (email, password) => {
    const user = {email, password}
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then((res)=>{ return res.json()})
    .catch(err=>console.log(err))
}

// to keep signed in
export const authenticate = (data) => {
    localStorage.setItem('jwt',JSON.stringify(data))
    
}

// to check if user is signed in, to authenticate
export const isAuthenticated = () => {
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else{
        return false
    }
}

// to signout
export const signOut = () => {
    localStorage.removeItem('jwt')
    return fetch(`${API}/signout`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}