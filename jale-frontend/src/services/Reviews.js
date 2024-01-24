import axios from "axios";

export default class Reviews
{
    //* - - - </> [GET] </> - - - *//
    async getReviews()
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const { data } = (await axios.get('http://localhost:3000/api/reviews'));
            
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
    async createReview(data)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const response = await axios.post('http://localhost:3000/api/reviews', data);
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
    async getReview(id)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const { data } = await axios.get(`http://localhost:3000/api/reviews/${id}`);
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
    async updateReview(id, data)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            await axios.put(`http://localhost:3000/api/reviews/${id}`, data);
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
    async deleteReview(id)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            await axios.delete(`http://localhost:3000/api/reviews/${id}`);
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