import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3001;

const GOOGLE_API_ENDPOINT = "https://maps.googleapis.com/maps/api/place/autocomplete/json";
const GOOGLE_PLACE_DETAILS_ENDPOINT = `https://maps.googleapis.com/maps/api/place/details/json`;

const key = process.env.GOOGLE_MAPS_API_KEY;

app.use(cors());

app.get('/get-places', async (req, res) => {
    const input = req.query.searchText;

    try {
        const response = await fetch(`${GOOGLE_API_ENDPOINT}?input=${input}&key=${key}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/place-details', async (req, res) => {
    const placeId = req.query.placeId;

    try {
        const response = await fetch(`${GOOGLE_PLACE_DETAILS_ENDPOINT}?placeid=${placeId}&key=${key}`);
        const data = await response.json();
        const { result } = data;
        res.json(result.geometry);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
