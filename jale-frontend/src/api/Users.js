import axios from "axios";

export default class Users
{
    // - - - </> [GET] </> - - - //
    async getUsers()
    {
        try
        {
            // - - - </> [URL] </> - - - //
            const { data } = await axios.get('http://localhost:3000/users');
            return data;
        }
        catch (error)
        {
            // - - - </> [ERROR] </> - - - //
            console.log(error);
            throw error;
        }
    }

    // - - - </> [POST] </> - - - //
    async createUser(data)
    {
        try
        {
            // - - - </> [URL] </> - - - //
            const response = await axios.post('http://localhost:3000/users', data);
            return response;
        }
        catch(error)
        {
            // - - - </> [ERROR] </> - - - //
            console.log(error);
            throw error;
        }
    }

    // - - - </> [GET] </> - - - //
    async getUser(id)
    {
        try
        {
            // - - - </> [URL] </> - - - //
            const { data } = await axios.get(`http://localhost:3000/users/${id}`);
            return data;
        }
        catch (error)
        {
            // - - - </> [ERROR] </> - - - //
            console.log(error);
            throw error;
        }
    }

    // - - - </> [PUT] </> - - - //
    async updateUser(id, data)
    {
        try
        {
            // - - - </> [URL] </> - - - //
            await axios.put(`http://localhost:3000/users/${id}`, data);
            return {status: 200, message: 'Content updated successfully!'};
        }
        catch(error)
        {
            // - - - </> [ERROR] </> - - - //
            console.log(error);
            throw error;
        }
    }

    // - - - </> [DELETE] </> - - - //
    async deleteUser(id)
    {
        try
        {
            // - - - </> [URL] </> - - - //
            await axios.delete(`http://localhost:3000/users/${id}`);
            return {status: 200, message: 'Content removed successfully!'};
        }
        catch(error)
        {
            // - - - </> [ERROR] </> - - - //
            console.log(error);
            throw error;
        }
    }

};