import React, { useEffect, useState } from 'react';
import "../Style/Profile.css";
import "../Style/common.css";
import { ExploreHeader } from './Explore';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import profileimg from '../images/profileimg.jpg'
import suggestprofile from '../images/suggestprofile.jpg'
import Navbar from './Navbar';
import profilepic from '../images/profilepic.png'
import postimg from '../images/postimg.jpg'
import hamburger from '../images/hamburger.png'

import exploredpone from '../images/exploredpone.png'
import exploredptwo from '../images/exploredptwo.png'
import exploredpthree from '../images/exploredpthree.png'
import exploredpfour from '../images/exploredpfour.png'
import exploredpfive from '../images/exploredpfive.png'
import exploredpsix from '../images/exploredpsix.png'
import exploredpseven from '../images/exploredpseven.png'

const Profile = () => {
    var SuggestionArray = [
        {
            id: 1,
            pic: suggestprofile,
            username: 'Rishabh',
            rank: 22,
            followers: 110,
            friends: 220,
        },
        {
            id: 2,
            pic: profileimg,
            username: 'Rohan',
            rank: 22,
            followers: 1910,
            friends: 920,
        },
        {
            id: 3,
            pic: exploredptwo,
            username: 'Ritika',
            rank: 22,
            followers: 1170,
            friends: 7220,
        },
        {
            id: 4,
            pic: exploredpfive,
            username: 'Vivek',
            rank: 22,
            followers: 810,
            friends: 220,
        },
        {
            id: 5,
            pic: exploredpfour,
            username: 'Ritik',
            rank: 22,
            followers: 8610,
            friends: 260,
        },
        {
            id: 6,
            pic: exploredpseven,
            username: 'Divanshi',
            rank: 22,
            followers: 110,
            friends: 420,
        },
        {
            id: 7,
            pic: exploredpone,
            username: 'Sumit',
            rank: 22,
            followers: 110,
            friends: 320,
        },
        {
            id: 8,
            pic: exploredpthree,
            username: 'Varun',
            rank: 22,
            followers: 120,
            friends: 120,
        },
        {
            id: 9,
            pic: exploredpsix,
            username: 'Diana',
            rank: 22,
            followers: 320,
            friends: 1230,
        },
        {
            id: 10,
            pic: exploredpthree,
            username: 'Aijeet',
            rank: 22,
            followers: 140,
            friends: 1203,
        },
        {
            id: 11,
            pic: exploredpsix,
            username: 'Sunzia',
            rank: 22,
            followers: 120,
            friends: 120,
        }
    ]

    var [SuggestList, setSuggestList] = useState(SuggestionArray);
    var [followers, setFollowers] = useState(299);
    var [following, setFollowing] = useState(110);
    var [rank, setRank] = useState(22);
    var [friend, setFriend] = useState(222);
    var [bio, setBio] = useState('Basketball Player currently living in vadodara');
    var [suggest, setSuggest] = useState(' Close Suggestions');
    
    const closesuggests = () => {
        if (suggest === 'Close Suggestions') {
            setSuggestList([]);
            setSuggest('View Suggestions');
        } else {
            setSuggestList(SuggestionArray);
            setSuggest('Close Suggestions')
        }
    }

    //use location for getting data from one page to another
    const location = useLocation();
    const [locationState, setLocationState] = useState({image:'', followers: '', friends:'', rank:'', name:'', username:''});

    useEffect(() => {
        if (location.state) {
            let _state = location.state;
            setLocationState(_state);
        }
    }, [location]);

    return (
        <div>
            <img src={hamburger} alt='hamburger' className='navslide' />
            <div className='navdiv'>
                <Navbar />
            </div>
            <ExploreHeader/>
            <div className='profileMain'>
                <div className='daj'>
                    <Dp  profileimg={locationState.image !== "" ? locationState.image : profilepic}></Dp>
                    {/* <Boxes item={rank} /> */}
                </div>
                        
                <div className='daj wrap'>
                    <Boxes itemname={'Followers'} item={locationState.followers !== '' ? locationState.followers: followers} />
                    <Boxes itemname={'Following'} item={locationState.friends !== '' ? locationState.friends: friend} />
                    <Boxes itemname={'Friends'} item={locationState.rank !== '' ? locationState.rank: rank} />
                </div>

                <Boxes itemname={'username'} item={locationState.name !== '' ? locationState.name: 'riyahnia' } />
                <h2 style={{ cursor: 'pointer' }} onClick={closesuggests}>{suggest}</h2>
                <div className='suggest dajt'>
                    {SuggestList.map((users, index) => {
                        return <Suggest key={index} SuggestList={SuggestList} following={locationState.followers} setFollowing={locationState.followers} friend={locationState.friends} setFriend={locationState.friends} profileimg={users.pic} username={users.username} followers={users.followers} friends={users.friends} rank={users.rank} />
                    })}
                </div>
                <div className='dajt activity'>
                    <Activity />
                    <Activity />
                    <Activity />
                    <Activity />
                    <Activity />
                    <Activity />
                    <Activity />
                    <Activity />
                    <Activity />
                    <Activity />
                    <Activity />
                </div>
            </div>
        </div>
    )
};

const Dp = (props) => {
    return (
        <img className='dp' width={'150px'} height={'150px'} src={props.profileimg} alt='profileimg' />
    )
};

const Boxes = (props) => {
    return (
        <div className='items daj'>
            <p>{props.itemname} : </p>
            <p style={{ color: 'rgb(45, 72, 242)' }}> {props.item}</p>
        </div>
    )
};

const Suggest = (props) => {

    var [follow, setFollow] = useState('Follow');
    var [add, setAdd] = useState('Add');

    useEffect(() => {
        console.log('clicked');
    })
    const closesuggest = () => {
        
        // const index = props.SuggestList.indexOf(props.SuggestList.name);// use useEffect
        // props.SuggestList.splice(index, 1);
        // props.setSuggestList(props.SuggestList)
        // console.log(props.SuggestList);
        // console.log(index);
        var newSuggestList = props.SuggestList.pop();
        props.setSuggestList(newSuggestList);
    }
        
    
    const changeFollow = () => {
        if (follow === 'Follow') {
            setFollow('Following');
            props.setFollowing(props.following + 1);
        } else {
            setFollow('Follow');
            props.setFollowing(props.following - 1);
        }
    }

    const changeAdd = () => {
        if (add === 'Add') {
            setAdd('Friends');
            props.setFriend(props.friend + 1);
        } else {
            setAdd('Add');
            props.setFriend(props.friend - 1);
        }
    }
    return (
        <div className='suggestbox'>
            <div className='daj'>
                <div className='dajf'>
                    <Link to="/profile" state={{ image: props.profileimg, followers:props.followers, rank:props.rank, friends:props.friends, name:props.username }}><img className='profileradius' height={'80px'} width={'80px'} src={props.profileimg} alt="profileimg" /></Link>
                    <h3>{props.username}</h3>
                </div>
                <div className='dajf'>
                    <h4>Followers : {props.followers}</h4>
                    <h4>Rank : {props.rank}</h4>
                    <h4>Friends : {props.friends}</h4>
                </div>
            </div>
            <div className='dajth'>
                <button onClick={changeFollow} className='followaddbtn'>{follow}</button>
                <button onClick={changeAdd} className='followaddbtn'>{add}</button>
                {/* <button onClick={closesuggest} className='followaddbtn'>close</button> */}
            </div>
        </div>
    )
};

const Activity = () => {
    return (
        
        <img className='activitybox' height={'400px'} width={'410px'} src={postimg} alt='suggestprofile' />
        
    )
};

export default Profile