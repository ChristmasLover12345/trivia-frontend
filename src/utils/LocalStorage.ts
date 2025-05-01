import { UserTokenModel } from "./Interface";


export const SetTokenLocalStorage = (data: UserTokenModel) => {

    localStorage.setItem("UserData", JSON.stringify(data));

}

export const GetTokenLocalStorage = () => {
    const data = localStorage.getItem("UserData")

    if (data == null)
    {
       return null
    } 

    const userData: UserTokenModel = JSON.parse(data);

    if (userData.Token == null || userData.userId == null) {
        return null;
    }

    return userData;

}