import {FC} from 'react';
import { Header } from './components/header/Header';
import { Promo } from './components/promo/Promo';
import { Collection } from './components/collection/Collection';
import "./index.css";
import { Creators } from './components/creators/Creators';

export const App: FC = () => {
    return (
        <div className="container">
            <Header/>
            <Promo/>
            <Collection/>
            <Creators/>
        </div>
    )
}
