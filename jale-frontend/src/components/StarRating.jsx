import React, { useEffect, useState } from 'react';
import '../styles/StarRating.css';
import { Icon } from '@iconify/react';

function StarRating()
{

    //* - - - </> [SCORE] </> - - - *//
    const [score, setScore] = useState(null);

    //* - - - </> [HOVER] </> - - - *//
    const [hover, setHover] = useState(null);

    console.log('Score:', score);
    
    return (
        
        <div className='rating-score'>

            {/* - - - </> [DATA] </> - - - */}
            {[...Array(5)].map((item, index) => {

                //* - - - </> [SCORE] </> - - - *//
                const current = index + 1;

                //* - - - </> [DATA] </> - - - *//
                return(

                    //* - - - </> [LABEL] </> - - - *//
                    <label className='rating-label' key={index}>

                        {/* - - - </> [INPUT] </> - - - */}
                        <input

                        //* - - - </> [TYPE] </> - - - *//
                        type="radio"

                        //* - - - </> [SCORE] </> - - - *//
                        value={current}

                        //* - - - </> [CLICK] </> - - - *//
                        onClick={() => setScore(current)}
                        
                        //* - - - </> [CLASS] </> - - - *//
                        className='rating-input'
                        
                        />

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon
                        
                        //* - - - </> [CODE] </> - - - *//
                        icon="ic:baseline-star"
                        
                        //* - - - </> [COLOR] </> - - - *//
                        color={current <= (hover || score) ? "#FFC439" : "#E4E5E9"}

                        //* - - - </> [HOVER] </> - - - *//
                        onMouseEnter={() => setHover(current)}
                        
                        //* - - - </> [HOVER] </> - - - *//
                        onMouseLeave={() => setHover(null)}

                        //* - - - </> [CLASS] </> - - - *//
                        className='rating-star'
                        
                        />

                    </label>
                );

            })}
            
        </div>

    );
}

export default StarRating;