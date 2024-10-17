import {FC} from 'react';
import { Header } from './components/header/Header';
import { Promo } from './components/promo/Promo';
import { Collection } from './components/collection/Collection';
import "./index.css";

export const App: FC = () => {
    return (
        <div className="container">
            <Header/>
            <Promo/>
            <Collection/>
        </div>
    )
}
