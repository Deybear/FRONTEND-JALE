import React from 'react';
import '../styles/Grid.css';
import '../styles/SignUp.css';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';

function SignUp()
{
    return (

        <section className='main-section'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='lf-lg-col hide'>

                {/* - - - </> [IMAGE] </> - - - */}
                <img src="https://t.ly/a3SS2" alt="image_001" className='signin-image'/>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='rg-lg-col'>

                {/* - - - </> [DIV] </> - - - */}
                <div className='signup-formulary'>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='signup-title'>Let's <span className='signup-title-span'>Join!</span></p>

                    {/* - - - </> [FORM] </> - - - */}
                    <SignUpForm/>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='signup-text'>Already have an account? <Link to="/signin" className='signup-link'>Sign In</Link></p>

                </div>

            </div>

        </section>

    );
}

export default SignUp;