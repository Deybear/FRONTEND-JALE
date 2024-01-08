import axios from "axios";

export default class Sessions
{
    //* - - - </> [POST] </> - - - *//
    async signIn(data)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const response = await axios.post('http://localhost:3000/auth/login', data);

            //* - - - </> [TOKEN] </> - - - *//
            localStorage.setItem("user", JSON.stringify(response.data));

            //* - - - </> [TOKEN] </> - - - *//
            console.log("token:", response.data.token);

            //* - - - </> [DATA] </> - - - *//
            return response.data;
        }
        catch(error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [DELETE] </> - - - *//
    async signOut()
    {
        //* - - - </> [USER] </> - - - *//
        const currentUser = JSON.parse(localStorage.getItem("user"));

        //* - - - </> [TOKEN] </> - - - *//
        const token = currentUser.token;

        //* - - - </> [TOKEN] </> - - - *//
        const auth = {headers: {Authorization: `Bearer ${token}`}}

        try
        {
            //* - - - </> [URL] </> - - - *//
            await axios.delete(`http://localhost:3000/auth/logout`, auth);

            //* - - - </> [TOKEN] </> - - - *//
            localStorage.removeItem("user");

            //* - - - </> [DATA] </> - - - *//
            return {status: 200, message: 'Content removed successfully!'};
        }
        catch(error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

};