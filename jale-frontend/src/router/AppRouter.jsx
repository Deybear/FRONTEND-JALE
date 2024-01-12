import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Item from '../pages/Item';
import Home from '../pages/Home';
import About from '../pages/About';
import Tours from '../pages/Tours';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Menu from '../components/Menu';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

function AppRouter()
{
    return (

        <>

            {/* - - - </> [NAV] </> - - - */}
            <Menu/>

            {/* - - - </> [LINK] </> - - - */}
            <Routes>

                {/* - - - </> [LINK] </> - - - */}
                <Route path="/" element={ <Home/> }></Route>

                {/* - - - </> [LINK] </> - - - */}
                <Route path="/tours" element={ <Tours/> }></Route>

                {/* - - - </> [LINK] </> - - - */}
                <Route path="/about" element={ <About/> }></Route>

                {/* - - - </> [LINK] </> - - - */}
                <Route path="/contact" element={ <Contact/> }></Route>

                {/* - - - </> [LINK] </> - - - */}
                <Route path="/tours/:id" element={ <Item/> }></Route>

                {/* - - - </> [LINK] </> - - - */}
                <Route path="/signin" element={ <SignIn/> }></Route>

                {/* - - - </> [LINK] </> - - - */}
                <Route path="/signup" element={ <SignUp/> }></Route>

                {/* - - - </> [LINK] </> - - - */}
                <Route path='*' exact={true} element={ <NotFound/> } />

            </Routes>

        </>

    );
}

export default AppRouter;