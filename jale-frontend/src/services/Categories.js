import axios from "axios";

export default class Categories
{
    //* - - - </> [GET] </> - - - *//
    async getCategories()
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const { data } = (await axios.get('http://localhost:3000/api/categories'));
            
            return data;
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [GET] </> - - - *//
    async getPlaceCategories()
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const { data } = (await axios.get('http://localhost:3000/api/place_categories'));
            
            return data;
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [GET] </> - - - *//
    async getEventCategories()
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const { data } = (await axios.get('http://localhost:3000/api/event_categories'));
            
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
    async createCategory(data)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const response = await axios.post('http://localhost:3000/api/categories', data);
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

    //* - - - </> [POST] </> - - - *//
    async createPlaceCategory(data)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const response = await axios.post('http://localhost:3000/api/place_categories', data);
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

    //* - - - </> [POST] </> - - - *//
    async createEventCategory(data)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const response = await axios.post('http://localhost:3000/api/event_categories', data);
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
    async getCategory(id)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const { data } = await axios.get(`http://localhost:3000/api/categories/${id}`);
            return data;
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [GET] </> - - - *//
    async getPlaceCategory(id)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const { data } = await axios.get(`http://localhost:3000/api/place_categories/${id}`);
            return data;
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [GET] </> - - - *//
    async getEventCategory(id)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            const { data } = await axios.get(`http://localhost:3000/api/event_categories/${id}`);
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
    async updateCategory(id, data)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            await axios.put(`http://localhost:3000/api/categories/${id}`, data);
            return {status: 200, message: 'Content updated successfully!'};
        }
        catch(error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [PUT] </> - - - *//
    async updatePlaceCategory(id, data)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            await axios.put(`http://localhost:3000/api/place_categories/${id}`, data);
            return {status: 200, message: 'Content updated successfully!'};
        }
        catch(error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [PUT] </> - - - *//
    async updateEventCategory(id, data)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            await axios.put(`http://localhost:3000/api/event_categories/${id}`, data);
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
    async deleteCategory(id)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            await axios.delete(`http://localhost:3000/api/categories/${id}`);
            return {status: 200, message: 'Content removed successfully!'};
        }
        catch(error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [DELETE] </> - - - *//
    async deletePlaceCategory(id)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            await axios.delete(`http://localhost:3000/api/place_categories/${id}`);
            return {status: 200, message: 'Content removed successfully!'};
        }
        catch(error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }

    //* - - - </> [DELETE] </> - - - *//
    async deleteEventCategory(id)
    {
        try
        {
            //* - - - </> [URL] </> - - - *//
            await axios.delete(`http://localhost:3000/api/event_categories/${id}`);
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