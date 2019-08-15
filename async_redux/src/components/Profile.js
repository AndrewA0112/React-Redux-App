import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../actions'
import Loader from "react-loader-spinner"

import './Profile.scss'

const Profile = ({ isLoading, profile, getProfile }) => {

    // const { isLoading, profile } = props
    // console.log('PROPS', props)

    const [profileInput, setProfileInput] = useState('Gooddog228')

    const getProfileDispatch = () => {
        getProfile(profile, profileInput)
    }

    const handleChange = e => {
        setProfileInput(e.target.value)
    }

    if (profile === null) {
        return (
            <>
                <input value={profileInput} onChange={handleChange} />
                <button onClick={getProfileDispatch}>Fetch Profile</button>
                <h1>No Profile Found</h1>
            </>
        )
    } else {
        return (
            <>
                <input value={profileInput} onChange={handleChange} />
                <button onClick={getProfileDispatch}>Fetch Profile</button>
                {isLoading ? (
                    <Loader type="TailSpin" color="black" height="100" width="100" />
                ) : (
                    <div>
                        <h1>{profile.player.name}</h1>
                        <h2>Rank: {profile.player.rank.name} (Lvl: {profile.player.rank.nr})</h2>
                        <h3>Time Played: {parseFloat(Math.round(profile.player.timePlayed / 3600 * 100) / 100).toFixed(2)} Hours</h3>
                        <div>
                            <h3>K/D: {parseFloat(profile.stats.extra.kdr).toFixed(2)}</h3>
                            <h3>Total Score: {profile.stats.scores.score}</h3>
                            <h3>Conquest Score: {profile.stats.modes[0].score}</h3>
                            <h3>Full Stats: <a href={profile.player.blPlayer} target='_blank'>{profile.player.name}'s Stats</a></h3>
                        </div>
                    </div>
                )}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profile,
        isLoading: state.isLoading
    }
}

export default connect(
    mapStateToProps,
    { getProfile }
)(Profile);