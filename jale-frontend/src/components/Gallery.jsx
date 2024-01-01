import React from 'react';
import '../styles/Gallery.css';

function Gallery()
{
    return (

        //* - - - </> [SECTION] </> - - - *//
        <section className='gallery-section'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='gallery-photo-large'>

                {/* - - - </> [IMG] </> - - - */}
                <img src="https://rb.gy/b1syuz" alt="image_001" className='gallery-image'/>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='gallery-photo-small'>

                {/* - - - </> [IMG] </> - - - */}
                <img src="https://shorturl.at/dozDR" alt="image_002" className='gallery-image'/>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='gallery-photo-small'>

                {/* - - - </> [IMG] </> - - - */}
                <img src="https://shorturl.at/mwBDG" alt="image_003" className='gallery-image'/>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='gallery-photo-small'>

                {/* - - - </> [IMG] </> - - - */}
                <img src="https://shorturl.at/afiwP" alt="image_004" className='gallery-image'/>

            </div>

        </section>

    );
}

export default Gallery;