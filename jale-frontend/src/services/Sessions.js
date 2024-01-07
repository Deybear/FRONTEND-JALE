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
            localStorage.setItem("user", JSON.stringify(response.data));
            console.log(response);
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
    async signOut(id)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            await axios.delete(`http://localhost:3000/auth/logout/${id}`);
            localStorage.removeItem("user");

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