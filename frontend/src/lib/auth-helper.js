import { signout } from './api-auth.js'
const auth = {
    isAuthenticated() {
        if (typeof window == "undefined")
            return false
        if (localStorage.getItem('jwt') && localStorage.getItem('user'))
            return {
                   token: JSON.parse(localStorage.getItem('jwt')),
                   user: JSON.parse(localStorage.getItem('user'))
                }
        else
            return false
    },
    
    isAdmin() {
        const user = JSON.parse(localStorage.getItem('user'))
        return user.role === 'admin'
    },

    authenticate(jwt, user, cb) {
        if (typeof window !== "undefined"){
            localStorage.setItem('jwt', JSON.stringify(jwt))
            localStorage.setItem('user', JSON.stringify(user))
            cb()
        }

    },
    clearJWT(cb) {
        console.log(window)
        if (typeof window !== "undefined"){

            localStorage.removeItem('jwt')
            localStorage.removeItem('user')
        cb()

        }
        //optional
        signout().then((data) => {
            document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        })
    },
    getToken(){
        return JSON.parse(localStorage.getItem('jwt'))
    }
}
export default auth