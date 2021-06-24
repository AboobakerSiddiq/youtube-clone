import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchpage_filter">
                <TuneIcon/>
                <h2>FILTER</h2>
            </div>
            <hr className='hr'/>
            <ChannelRow image="https://www.hairdohairstyle.com/wp-content/uploads/2018/01/16-Verdi-Beard.jpg"
            channel="Clever Programmer"
            verified
            subs="659K"
            nooFvideos={382}
            description="You can find awesome programming lessons here! 
            Also,expect programming tips and tricks that will take your coding 
            skills to the ...."/>
            <hr/>

            <VideoRow views="1.4M"
            subs="659k"
            description="Do you want a free online bootcamp for reactjs!!! Watch here!!!"
            timestamp="59 seconds ago"
            title="Let's build Youtube Clone with ReactJS for beginners"
            image="https://d205s6oy6l2xs9.cloudfront.net/wp-content/uploads/20200701103258/Youtube3.jpg"/>
            <hr/>
            <VideoRow views="1.4M"
            subs="659k"
            description="Do you want a free online bootcamp for reactjs!!! Watch here!!!"
            timestamp="59 seconds ago"
            title="Let's build Youtube Clone with ReactJS for beginners"
            image="https://d205s6oy6l2xs9.cloudfront.net/wp-content/uploads/20200701103258/Youtube3.jpg"/>
            <hr/>
            <VideoRow views="1.4M"
            subs="659k"
            description="Do you want a free online bootcamp for reactjs!!! Watch here!!!"
            timestamp="59 seconds ago"
            title="Let's build Youtube Clone with ReactJS for beginners"
            image="https://d205s6oy6l2xs9.cloudfront.net/wp-content/uploads/20200701103258/Youtube3.jpg"/>
            <hr/>
            <VideoRow views="1.4M"
            subs="659k"
            description="Do you want a free online bootcamp for reactjs!!! Watch here!!!"
            timestamp="59 seconds ago"
            title="Let's build Youtube Clone with ReactJS for beginners"
            image="https://d205s6oy6l2xs9.cloudfront.net/wp-content/uploads/20200701103258/Youtube3.jpg"/>
            <hr/>
            <VideoRow views="1.4M"
            subs="659k"
            description="Do you want a free online bootcamp for reactjs!!! Watch here!!!"
            timestamp="59 seconds ago"
            title="Let's build Youtube Clone with ReactJS for beginners"
            image="https://d205s6oy6l2xs9.cloudfront.net/wp-content/uploads/20200701103258/Youtube3.jpg"/>
            <hr/>
            <VideoRow views="1.4M"
            subs="659k"
            description="Do you want a free online bootcamp for reactjs!!! Watch here!!!"
            timestamp="59 seconds ago"
            title="Let's build Youtube Clone with ReactJS for beginners"
            image="https://d205s6oy6l2xs9.cloudfront.net/wp-content/uploads/20200701103258/Youtube3.jpg"/>
            <hr/>
            <VideoRow views="1.4M"
            subs="659k"
            description="Do you want a free online bootcamp for reactjs!!! Watch here!!!"
            timestamp="59 seconds ago"
            title="Let's build Youtube Clone with ReactJS for beginners"
            image="https://d205s6oy6l2xs9.cloudfront.net/wp-content/uploads/20200701103258/Youtube3.jpg"/>
            <hr/>
            <VideoRow views="1.4M"
            subs="659k"
            description="Do you want a free online bootcamp for reactjs!!! Watch here!!!"
            timestamp="59 seconds ago"
            title="Let's build Youtube Clone with ReactJS for beginners"
            image="https://d205s6oy6l2xs9.cloudfront.net/wp-content/uploads/20200701103258/Youtube3.jpg"/>
            <hr/>
            <VideoRow views="1.4M"
            subs="659k"
            description="Do you want a free online bootcamp for reactjs!!! Watch here!!!"
            timestamp="59 seconds ago"
            title="Let's build Youtube Clone with ReactJS for beginners"
            image="https://d205s6oy6l2xs9.cloudfront.net/wp-content/uploads/20200701103258/Youtube3.jpg"/>
            <hr/>
        </div>
    )
}

export default SearchPage
