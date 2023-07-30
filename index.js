import axios from "axios";
import * as dotenv from 'dotenv';
dotenv.config();

const result = dotenv.config();

export const main = async () => {
  if (!process.env.API_KEY) throw new Error('Please set api key');
  const apiKey = process.env.API_KEY;
  const a = await axios.get(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.059856,141.343081&radius=250&types=food&language=ja&key=${apiKey}`
  );
  console.log(a["data"]);
};

main()
