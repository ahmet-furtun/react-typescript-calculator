import React, { FC } from 'react'
import Calculator from '../../pages/calculator/calculator.page';

import './app.component.css';
import '../../common/styles';

const App:FC = () => {
    return (
        <div>
            <Calculator/>
        </div>
    )
}
export default App;