import axios from 'axios';
import cheerio from 'cheerio';

export const fetchMovieNames = async (): Promise<string[]> => {
  try {
    const response = await axios.get('https://www.imdb.com/'); // Replace with the URL of the movies website
    
    const $ = cheerio.load(response.data);

    const movieNames: string[] = [];

    // Replace this with the appropriate selector that targets movie names on the website
    $('h2.barbie').each((index, element) => {
      movieNames.push($(element).text());
    });

    return movieNames;
  } catch (error) {
    console.error('Error fetching movie names:', error);
    throw error;
  }
};
