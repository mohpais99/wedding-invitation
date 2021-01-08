import React, { Component } from 'react';
import { HadistPage } from 'views';
import { Welcome, DatePage } from 'views';
import music from 'assets/music/ILY.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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

    // playmusic() {
    //     const audioEl = document.getElementsByClassName("audio-element")[0]
    //     const status = this.state.play
    //     if (status) {
    //         this.setState({play: false})
    //         audioEl.pause()
    //     } else {
    //         this.setState({play: true})
    //         audioEl.play()
    //     }
    // }

    updateDimensions() {
        this.setState({ width: window.innerWidth });
    }
    render() {
        return (
            <div className="wrapper">
                {/* <audio className="audio-element">
                    <source src={music} />
                </audio> */}
                <Welcome />
                <HadistPage {...this.state} />
                <DatePage {...this.state} />

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

                {/* <button 
                    onClick={this.playmusic} 
                    className="btn btn-circle btn-lg play text-white position-fixed text-center">
                    {
                        this.state.play ?
                            <FontAwesomeIcon icon={["fa", "play"]} />
                            // <ion-icon name="pause-outline"></ion-icon>
                        :
                            <FontAwesomeIcon icon={["fa", "pause"]} />
                            // <ion-icon name="play-outline"></ion-icon>
                    }
                </button> */}
            </div>
        )
    }
}

export default Layout
