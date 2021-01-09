import React, { Component } from 'react';
import { Welcome, HadistPage } from 'views';
import music from 'assets/music/ILY.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EventPage from 'views/EventPage';


class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: window.innerWidth,
            play: false,
            
        };
        this.audio = new Audio(music)
    }

    componentDidMount() {
        this.audio.addEventListener('ended', () => this.setState({'play': false}))
    }

    componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({'play': false}))
    }

    playmusic = () => {
        this.setState({play: !this.state.play}, () => {
            this.state.play ? this.audio.play() : this.audio.pause()
        })
    }

    updateDimensions() {
        this.setState({ width: window.innerWidth });
    }
    render() {
        return (
            <div className="wrapper">
                <Welcome />
                <HadistPage {...this.state} />
                <EventPage {...this.state} />

                <div onClick={this.playmusic} className="play-box">
                    <div className="play-btn text-center">
                        {
                            this.state.play ?
                                <FontAwesomeIcon icon={["fa", "pause"]} />
                            :
                                <FontAwesomeIcon icon={["fa", "play"]} />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout
