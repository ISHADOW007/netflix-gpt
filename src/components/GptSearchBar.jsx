import lang from "./languageConstan";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS, OPENAI_KEY } from "../utils/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const genAI= new GoogleGenerativeAI(OPENAI_KEY);
    const dispatch= useDispatch();
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);


    const SearchMovieTMDB = async (movie) =>{
          const data = await  fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
          
          const json= await data.json();
          return json.results;
    }

    // const handleGptSearchClick = async () => {
    //     console.log(searchText.current.value);
    //     const model = genAI.getGenerativeModel({ model: "gemini-pro" });


    //     // make an API call to GPT API and get Movie Results
    //     const gptQuery="Act as a movie Recommendation system and suggest some movies for the query :"
    //      +searchText.current.value+".only give me names of 5 movies,commma seperated like teh example result given ahead. Example Results:Gadar,Sholay,Don,Golmal,Koi mil Gya";
        
    //      const gptResults =await openai.chat.completions.create({
    //         messages: [{ role: 'user', content: gptQuery }],
    //         model: model,
    //       });
    //     console.log(gptResults.choices);
        
    // };

    const handleGptSearchClick = async () => {
        // setLoadingBtn(true);
    
        const searchTextValue = searchText.current.value.trim();
        
    
        if (!searchTextValue) {
        //   setError("Please enter a valid movie query");
        //   setLoadingBtn(false);
          return;
        }
    
        try {
          const model = genAI.getGenerativeModel({ model: "gemini-pro" });
          const prompt =
            "Act as a movie recommendation system and suggest some movies for the query" +
            searchTextValue +
            ".only give me names of movies,comma separated like example result given ahead.Example result:Gadar,Sholay,Godzilla,Pathaan,3 Idiots.";
          const result = await model.generateContent(prompt);
          const gptResults = await result.response;

          //"Gadar,Sholay,Godzilla,Pathaan,3 "Idiots".
          const gptMovies = gptResults.candidates?.[0]?.content?.parts?.[0]?.text.split(",");
          //["Gadar","Sholay","Godzilla","Pathaan","3Idiots"]
          console.log(gptResults);
          

    
        //   setLoadingBtn(false);

        //For each Movie I will search TMDB API
        const PromiseArray =gptMovies.map((movie)=> SearchMovieTMDB(movie));
        // [Promise,Promise,Promise,Promise,Promise]=data
        // how to resolve Promise then
        const tmdbResults = await Promise.all(PromiseArray);
        console.log(tmdbResults);
        // storing tmdbResults in store gpt slice
        dispatch(
            addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
          );

    
          if (!gptMovies) {
            throw new Error("Failed to generate movie suggestions from GPT model.");
          }
    
        //   const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        //   const tmdbResults = await Promise.all(promiseArray);
    
        //   dispatch(
        //     addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
        //   );
        } catch (error) {
          // Handle errors
          console.error("An error occurred:", error.message);
        //   setError(
        //     " Movie recommendations powered by Gemini are unavailable on request due to paid APIs"
        //   );
        //   setLoadingBtn(false);
        }
      };

    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick}>
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
