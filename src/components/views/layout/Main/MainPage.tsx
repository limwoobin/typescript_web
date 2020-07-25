import React from 'react';
import './MainPage.scss';
// import MainSide from './MainSide';
// import MyProfile from '../../MyProfile/MyProfile';
import CounterContainer from '../../../../containers/CounterContainer';

const MainPage = () => {
    return (
        <div className="sc-fjdhpX iqwyib">
            <div className="sc-jlyJG lpgbkm">
                <main className="sc-gipzik BAccj">
                    <div className="sc-eqIVtm gLLJLX">
                        {/* <MyProfile /> */}
                        <CounterContainer />
                    </div>
                </main>
                {/* <MainSide /> */}
            </div>
        </div>
    )
}

export default MainPage;