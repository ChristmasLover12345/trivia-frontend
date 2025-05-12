import { LoginModel, QuizModel } from "./Interface"
const URL = "https://trivia-api-g3d7dwczhma0hzdt.westus-01.azurewebsites.net/"

const blobUrl = "https://triviablobjh.blob.core.windows.net/triviastorage/"


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
        try {
            const data = await response.json();
            console.log(data.message);
        } catch {
            const message = await response.text();
            console.log(message);
        }
            return false;
    }
    const data = await response.json();
    console.log(data);
    return true;

}

export const logIn = async (user: LoginModel) =>{
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
    console.log(data);
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
        if (!res.ok) {
            console.log("Error");
            return null;
        }
        const data = await res.json(); // should be an array
        return data;
    }


export const GetQuizzesById = async(UserId:number) =>
    {
        const res = await fetch(URL + `Quiz/GetQuizzesById/${UserId}`)
        const data = await res.json();
        return data;
    }

    export const CreateQuiz = async (quiz:QuizModel ) => {
         const res = await fetch(URL + "Quiz/CreateQuiz", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify(quiz)
         });
         if (!res.ok) {
             console.log("Error");
             return null;
         };
         const data = await res.json();
         return data;
     }

     export const UpdateQuiz = async (quiz:QuizModel ) => {
        const res = await fetch(URL + "Quiz/UpdateQuiz", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(quiz)
        });
        if (!res.ok) {
            console.log("Error");
            return null;
        };
        const data = await res.json();
        return data;
    }

  

    export const blobUpload = async (params: FormData)=> {
        const response = await fetch(URL + 'Blob/Upload', {
            method: 'POST',
            // The browser automatically sets the correct Content-Type header to multipart/form-data
            body: params, //becuase params is FormData we do NOT need to stringify it
        });

        if (response.ok) {
            // Extract the filename from FormData
            const fileName = params.get('fileName') as string;
            
            // Construct the Blob Storage URL
            const uploadedFileUrl = `${blobUrl}/${fileName}`;
            
            return uploadedFileUrl;
        } else {
            console.log('Failed to upload file.');
            return null;
        }
};