import {FC} from 'react'
import { Header } from './components/header/Header'
import { Promo } from './components/promo/Promo'

export const App: FC = () => {
    return (
        <div>
            <Header/>
            <Promo/>
        </div>
    )
}
