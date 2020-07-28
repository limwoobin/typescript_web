import React , {useState , useEffect} from 'react';
import '../MainPage.scss';
import {API} from '../../../../../api/callAA';
import {Link} from 'react-router-dom';

import axios from 'axios';

export default function RecentPost(props: any) {
    const [postTitle , setPostTitle] = useState([]);
    const { recentPosts , onRecentPosts } = props;
    // useEffect(() => {
    //      API.Get_RecentPosts()
    //      .then(res => {
    //          console.log(res);
    //         setPostTitle(res.data.data);
    //      }).catch(err => {
    //         console.log(err);
    //      })
    // } , []);

    return (
        <section className="sc-fAjcbJ fNlsam sc-gisBJw kPSwsK">
            <h4>최신글</h4>
            {recentPosts}
            <button onClick={onRecentPosts}>Hi Post</button>
            {/* <ol>
                {postTitle.length === 0 
                    ? <h3>최신글이 없습니다.</h3>
                    : RenderPostTitle(postTitle)}
            </ol> */}
        </section>
    )
}