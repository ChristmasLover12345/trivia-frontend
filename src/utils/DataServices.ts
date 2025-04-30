import { LoginModel } from "./Interface"
const URL = "trivia-api-g3d7dwczhma0hzdt.westus-01.azurewebsites.net/"


export const CreateUser = async (newUser:LoginModel) => {
    const response = await fetch(URL + "User/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newUser)
    })
    if(!response.ok)
        {
            const data = await response.json();
            const message = data.message;
            console.log(message);
            return data.success;
        }
    const data = await response.json();
    console.log(data);
    return data;

}

export const logIn = async (user: LoginModel) =>{
    console.log(user)
    const response = await fetch(URL + "User/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
    })
    if(!response.ok)
    {
        const data = await response.json();
        const message = data.message;
        console.log(message);
       
        return null;
    }
    const data = await response.json();
    return data;
}

export const GetUserById = async(UserId:number) =>
{
    const res = await fetch(URL + `User/GetUser/${UserId}`)
    const data = await res.json();
    return data;
}

export const GetQuizzes = async() =>
    {
        const res = await fetch(URL + `Quiz/GetAllQuizzes`)
        const data = await res.json();
        return data;
    }


export const GetQuizzesById = async(UserId:number) =>
    {
        const res = await fetch(URL + `Quiz/GetQuizzesById/${UserId}`)
        const data = await res.json();
        return data;
    }