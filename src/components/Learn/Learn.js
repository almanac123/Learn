import axios from "axios";
import { useState } from "react";
import Card from "./Card";
import "./style.css";

const Learn = () => {
    const [keyWord, setKeyWord] = useState("happy");

    const [result, setResult] = useState(null);
  
    const api = "https://api.dictionaryapi.dev/api/v2/entries/en";
  
    async function handleSearch() {
      try {
        const res = await axios.get(`${api}/${keyWord}`);
        console.log(res, "res");
        setResult(res.data[0]);
      } catch (e) {
        console.log({ e });
      }
    }
    return (
        <>
            <div className='wrap'>
                <div className="search">
                    <input type="search"
                        placeholder='search...'
                        autoFocus
                        id='search'
                        className='searchTerm'
                        value={keyWord}
                        onChange={(e) => setKeyWord(e.target.value)} />
                    <button className="searchButton"
                        type="button" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
            {result && <Card {...{ result }} />}
        </>
    )
}

export default Learn