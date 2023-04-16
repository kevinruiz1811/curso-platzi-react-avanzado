import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyle } from './styles/GlobalSyles';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import Logo from './components/Logo';

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Logo />
            <ListOfCategories />
            <ListOfPhotoCards />
        </div>
    )
}

export default App
