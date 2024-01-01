import React from 'react';
import '../styles/Grid.css';
import '../styles/Contact.css';
import { Icon } from '@iconify/react';
import Navigation from '../components/Navigation';
import ContactForm from '../components/ContactForm';

function Contact()
{
    return (

        <section className='main-section'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='lf-lg-col'>

                {/* - - - </> [NAV] </> - - - */}
                <Navigation/>

                {/* - - - </> [DIV] </> - - - */}
                <div className='contact-formulary'>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='contact-title'>Contact Us!</p>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='contact-information'>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='contact-item'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-phone-in-talk" className='contact-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='contact-text'>{"(+506)"} 5505-5050</p>

                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='contact-item'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-email" className='contact-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='contact-text'>info@jalecostarica.com</p>

                        </div>

                    </div>

                    {/* - - - </> [FORM] </> - - - */}
                    <ContactForm/>

                </div>
                
            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='rg-lg-col'>

                {/* - - - </> [MAP] </> - - - */}
                <img src="https://rb.gy/tq011w" alt="image_001" className='contact-image'/>

            </div>

        </section>

    );
}

export default Contact;