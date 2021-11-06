import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const HeaderMain = () => {
    const [video, setVideo] = useState(false)
    return (
        <div style={{ height: '600px' }} className="container d-flex align-items-center">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="text-white" style={{fontWeight: 'bold', fontSize: '50px'}}>The Best Fitness <br /> Studio In Town</h1>
                    <small className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quo ipsum omnis. Quos officiis tempora, quasi voluptas, maiores ratione inventore quis cupiditate dolor nisi, ipsum ducimus nesciunt voluptatibus sapiente ullam!</small> <br />
                    <button className="btn btn-warning mt-4 pe-4 ps-4 pt-2 pb-2">Join Us</button>
                </div>
                <div className="col-md-6 d-flex justify-content-md-center justify-content-sm-start">
                    <div>
                        {
                            video ? '' : <button style={{borderRadius: '100px'}} onClick={() => setVideo(true)} className="btn btn-primary mt-5 pt-2 pb-2 pe-4 ps-4"> <FontAwesomeIcon style={{width: '30px'}} icon={faPlayCircle}/> </button>
                        }
                        {
                            video && <video width="320" height="240" controls>
                                <source src="movie.mp4" type="video/mp4" />
                            </video>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;