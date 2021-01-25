import React from 'react';
import {connect} from 'react-redux';

const SongDetail=({mySong})=>
{
    if(!mySong)
    {
        return <div>Select a Song </div>
    }
    return <div>
        <h2>Song Details:</h2>
        <p>
        {mySong.title}
        <br/>
        Duration :
        {mySong.duration}
        </p>
        </div>;
};

const mapStateToProps=state=>
{
    return {
        mySong:state.song
    }
}
export default connect(mapStateToProps)(SongDetail);