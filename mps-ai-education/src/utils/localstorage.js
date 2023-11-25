const TOKEN_NAME = 'token'

//1.保存
export const saveToken = (tokenObj=>{
    localStorage.setItem(TOKEN_NAME,JSON.stringify(tokenObj))
})

// 2. 获取
export const getToken = () => {
    return JSON.parse(localStorage.getItem(TOKEN_NAME))
}
   
// 3. 删除
export const delToken = () => {
    localStorage.removeItem(TOKEN_NAME)
}

//4.用户信息
export const saveUser=(user)=>{
   localStorage.setItem('user',JSON.stringify(user))
}
export const getUser=()=>{
   return JSON.parse(localStorage.getItem('user'))
}