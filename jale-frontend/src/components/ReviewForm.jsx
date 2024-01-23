import React, { useState } from 'react';
import '../styles/Form.css';
import '../styles/StarRating.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function ReviewForm()
{
    //* - - - </> [SCORE] </> - - - *//
    const [score, setScore] = useState(null);

    //* - - - </> [HOVER] </> - - - *//
    const [hover, setHover] = useState(null);

    //* - - - </> [DATA] </> - - - *//
    const [data, setData] = useState({
        review_title: "",
        review_desc: "",
        review_score: 0
    });

    //* - - - </> [METHOD] </> - - - *//
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    //* - - - </> [METHOD] </> - - - *//
    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(data);
    }

    console.log('Score:', score);
    
    return (
        
        //* - - - </> [FORM] </> - - - *//
        <form onSubmit={handleSubmit} className='formulary-v3'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='formulary-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:sharp-text-snippet" className='formulary-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input

                //* - - - </> [TYPE] </> - - - *//
                type="text"
                
                //* - - - </> [NAME] </> - - - *//
                name='review_title'
                
                //* - - - </> [TEXT] </> - - - *//
                placeholder="Your title here*"
                
                //* - - - </> [CODE] </> - - - *//
                pattern='^[A-Za-z0-9 ]{3,30}$'
                
                //* - - - </> [CLASS] </> - - - *//
                className='formulary-input'
                
                //* - - - </> [EVENT] </> - - - *//
                onChange={handleChange}
                
                //* - - - </> [EMPTY] </> - - - *//
                required
                
                />

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='formulary-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:sharp-text-snippet" className='formulary-textarea-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <textarea
                
                //* - - - </> [NAME] </> - - - *//
                name="review_desc"
                
                //* - - - </> [SIZE] </> - - - *//
                cols="20"
                
                //* - - - </> [SIZE] </> - - - *//
                rows="5"
                
                //* - - - </> [TEXT] </> - - - *//
                placeholder="Your review here*"
                
                //* - - - </> [CLASS] </> - - - *//
                className='formulary-input'
                
                //* - - - </> [EVENT] </> - - - *//
                onChange={handleChange}
                
                //* - - - </> [EMPTY] </> - - - *//
                required
                
                />

            </div>

            {/* - - - </> [DIV] </> - - - */}
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

                            //* - - - </> [NAME] </> - - - *//
                            name="review_score"

                            //* - - - </> [SCORE] </> - - - *//
                            value={current}

                            //* - - - </> [EVENT] </> - - - *//
                            onChange={handleChange}
                            
                            //* - - - </> [EVENT] </> - - - *//
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

            {/* - - - </> [DIV] </> - - - */}
            <div className='formulary-actions'>

                {/* - - - </> [DIV] </> - - - */}
                <div className='formulary-button-wrapper'>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:outline-arrow-back-ios-new" className='formulary-button-icon-v1'/>

                    {/* - - - </> [LINK] </> - - - */}
                    <Link to="/" className='formulary-button-v1'>Go back</Link>

                </div>

                {/* - - - </> [DIV] </> - - - */}
                <div className='formulary-button-wrapper'>

                    {/* - - - </> [SUBMIT] </> - - - */}
                    <input type="submit" value="Send message" className='formulary-button-v2'/>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:baseline-send" className='formulary-button-icon-v2'/>

                </div>

            </div>

        </form>

    );
}

export default ReviewForm;