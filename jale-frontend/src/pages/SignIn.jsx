import React from 'react';
import '../styles/Grid.css';
import '../styles/SignIn.css';
import { Link } from 'react-router-dom';
import SignInForm from '../components/SignInForm';

function SignIn()
{
    return (

        <section className='main-section'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='lf-lg-col hide'>

                {/* - - - </> [IMAGE] </> - - - */}
                <img src="https://t.ly/ZIs5s" alt="image_001" className='signin-image'/>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='rg-lg-col form'>

                {/* - - - </> [DIV] </> - - - */}
                <div className='signin-formulary'>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='signin-title'>Let's <span className='signin-title-span'>Start!</span></p>

                    {/* - - - </> [FORM] </> - - - */}
                    <SignInForm/>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='signin-text'>Doesn't have an account? <Link to="/signup" className='signin-link'>Sign Up</Link></p>

                </div>

            </div>

        </section>

    );
}

export default SignIn;