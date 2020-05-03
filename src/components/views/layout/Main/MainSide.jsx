import React , { useEffect } from 'react';
import './MainPage.scss';
import { API } from '../../../../api/Call_API';

const MainSide = () => {

    useEffect(() => {

    }, []);

    return (
        <div>
            <aside className="sc-csuQGl pDRpR">
                    <div className="sc-cHGsZl bHiaRe">
                        <div className="sc-TOsTZ eyrfCG">
                            <section className="sc-fAjcbJ fNlsam sc-caSCKo wDGYV">
                                <h4>공지사항</h4>
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                </ul>
                            </section>
                            <section className="sc-fAjcbJ fNlsam sc-gisBJw kPSwsK">
                                <h4>섹스</h4>
                                <ul>
                                    <li>현수씨</li>
                                    <li>보고있으면</li>
                                    <li>대답해주세요.</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </aside>
        </div>
    )
}

export default MainSide;