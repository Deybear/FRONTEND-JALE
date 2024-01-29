import axios from "axios";

export default class UserTours
{
    //* - - - </> [GET] </> - - - *//
    async getUserTours()
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const { data } = await axios.get('http://localhost:3000/api/user_tours');
            return data;
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [POST] </> - - - *//
    async createUserTour(data)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const response = await axios.post('http://localhost:3000/api/user_tours', data);
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

    //* - - - </> [GET] </> - - - *//
    async getUserTour(id)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const { data } = await axios.get(`http://localhost:3000/api/user_tours/${id}`);
            return data;
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [PUT] </> - - - *//
    async updateUserTour(id, data)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            await axios.put(`http://localhost:3000/api/user_tours/${id}`, data);
            return {status: 200, message: 'Content updated successfully!'};
        }
        catch(error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [DELETE] </> - - - *//
    async deleteUserTour(id)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            await axios.delete(`http://localhost:3000/api/user_tours/${id}`);
            return {status: 200, message: 'Content removed successfully!'};
        }
        catch(error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    // //* - - - </> [DELETE] </> - - - *//
    async deleteTour (data)
    {
        //* - - - </> [DATA] </> - - - *//
        const userId = data.user_id;

        //* - - - </> [DATA] </> - - - *//
        const placeId = data.place_id;

        try
        {
            //* - - - </> [URL] </> - - - *//
            const response = await axios.delete('http://localhost:3000/api/delete_tour', { data: { user_id: userId, place_id: placeId } });
            console.log(response.data);
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

};