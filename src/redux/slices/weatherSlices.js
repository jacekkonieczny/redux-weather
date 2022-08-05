import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

export const fetchWeatherAction = createAsyncThunk(
    "weather/fetch",
    async (payload, {rejectedWithValue, getState, dispatch}) => {
        try {
            const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=c4d6f34839795fcb50c197cd51f27489`);
            return data;
        }
        catch (error) {

        }

    }
)

