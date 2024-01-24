import React, { useEffect, useState } from 'react';
import '../styles/Review.css';
import { Icon } from '@iconify/react';
import Reviews from '../services/Reviews';

function Review()
{
    //* - - - </> [DATA] </> - - - *//
    const [reviews, setReviews] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    const service = new Reviews();
    
    useEffect(() => {
        
        getData();
    
    }, []);

    //* - - - </> [DATA] </> - - - *//
    const getData = async () => {

        //* - - - </> [DATA] </> - - - *//
        const reviewData = await service.getReview(1);
        setReviews(reviewData);
    }

    console.log(reviews);

    return (

        //* - - - </> [DIV] </> - - - *//
        <section className='review-section'>

            <p>45 Review</p>

            {/* - - - </> [DIV] </> - - - */}
            <div className='review-wrapper'>

                {/* - - - </> [DIV] </> - - - */}
                <div className='review-about'>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='review-user'>Deynor Rodriguez</p>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='review-rating-score'>

                        {/* - - - </> [ICON] </> - - - */}
                        {Array(5).fill(<Icon icon="ic:baseline-star" color={"#E4E5E9"} className='review-rating-star'/>).fill(<Icon icon="ic:baseline-star" color={"#FFC439"} className='review-rating-star'/>, 0, Math.floor(1))}

                    </div>

                </div>

                {/* - - - </> [TEXT] </> - - - */}
                <p className='review-date'>Mon 24th Oct 2024</p>

                {/* - - - </> [TEXT] </> - - - */}
                <p className='review-desc'><span>I hate this place</span> - This place is terrible, avoid it all cost!</p>
                
            </div>

        </section>

    );
}

export default Review;