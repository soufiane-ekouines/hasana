import React from 'react';
import '../../../styles/components/container/first content/Content.css';

const Content = () => {
    return (
        <div className='cnt'>
            <h1>Read Quran Everyday. Add On Your Daily Routine .</h1>
            <p>the Quran is not simply an inspired scripture. It is a divine book brought down from heaven by the angel Gabriel to the Prophet Muhammad, and its message is the key to heaven. </p>
            <div className='buttons'>
                <button className='read'>Read Quran</button>
                <button className='audio'>Quran Audio</button>
            </div>
        </div>
    );
};

export default Content;