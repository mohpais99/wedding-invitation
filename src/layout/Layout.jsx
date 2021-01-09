import React, { Component, Suspense, lazy } from 'react';
import music from 'assets/music/MZ.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Preload } from 'components';

const Welcome = lazy(() => import('views/Welcome'))
const HadistPage = lazy(() => import('views/HadistPage'))
const EventPage = lazy(() => import('views/EventPage'))

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
            <Suspense fallback={<Preload />}>
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
            </Suspense>
        )
    }
}

export default Layout
