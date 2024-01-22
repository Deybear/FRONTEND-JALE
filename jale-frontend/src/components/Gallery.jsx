import React from 'react';
import '../styles/Gallery.css';

function Gallery(props)
{
    return (props.src.length > 0) ? (

        //* - - - </> [DIV] </> - - - *//
        <section className='gallery-section'>

            {props.src.map((item, index) => (

                //* - - - </> [DIV] </> - - - *//
                <div className={index > 0 ? 'gallery-photo-small' : 'gallery-photo-large'} key={index}>

                    {/* - - - </> [IMG] </> - - - */}
                    <img src={item.photo_url} alt={`image_00${index}`} className='gallery-image'/>

                </div>

            ))}

        </section>
    )
    :
    (
        //* - - - </> [DIV] </> - - - *//
        <section className='message-section'>

            <div>This place doesn't have photos!</div>

        </section>
    );
}

export default Gallery;