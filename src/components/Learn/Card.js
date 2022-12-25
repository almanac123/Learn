const Card = ({ result }) => {
    const { word, meanings,phonetics } = result;
  
    function playAudio() {
      try {
        let audio = new Audio(phonetics[0].audio);
        audio.play();
      } catch (e) {
        console.log({ e });
      }
    }
    return (
        <>
            <article className="widget">
                <div className="weatherIcon ">
                 <div> Meaning:</div>
                 <div>{meanings[0].definitions[0].definition}</div>
                    {/* <i className={`wi ${weatherState}`}></i> */}
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                    <div> Word:</div>
                        <span>{word}</span>
                    </div>
                    
                </div>
                <div className="date">

                <p > {phonetics[0].text} </p>
                </div>
                <div className="new">
                <p className="audio" onClick={playAudio}>
                {" "}
                play audio{" "}
              </p>
                </div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        {/* <div className="two-sided-section">
                              <h2>Synonyms </h2>
                               <p>
                                  {meanings[0].synonyms.map((item, index) => {
                                   return <p key={index}>{item}</p>;
                                  })}
                              </p>
                        </div> */}
                        
                        <div className="two-sided-section">
                            {/* <p>
                                <i className={'wi wi-humidity'}></i>
                            </p> */}
                            <p className='extra-info-leftside'>
                               <br />
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            {/* <p>
                                <i className={'wi wi-rain'}></i>
                            </p> */}
                            <p className='extra-info-leftside'>
                            <br />
                            </p>
                        </div>
                        <div className="two-sided-section">
                            {/* <p>
                                <i className={'wi wi-strong-wind'}></i>
                            </p> */}
                            <p className='extra-info-leftside'>
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </article>
    
        </>
    )
    }
    
    export default Card