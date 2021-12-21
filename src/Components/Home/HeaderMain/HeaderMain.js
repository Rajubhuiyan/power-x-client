import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    const [video, setVideo] = useState(false)
    return (
        <div style={{ height: '600px' }} className="container d-flex align-items-center">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="text-white" style={{fontWeight: 'bold', fontSize: '50px'}}>The Best Fitness <br /> Studio In Town</h1>
                    <small className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quo ipsum omnis. Quos officiis tempora, quasi voluptas, maiores ratione inventore quis cupiditate dolor nisi, ipsum ducimus nesciunt voluptatibus sapiente ullam!</small> <br />
                    <Link to="/ourClasses"><button className="btn btn-warning mt-4 pe-4 ps-4 pt-2 pb-2">Join Us</button></Link>
                </div>
                <div className="col-md-6 d-flex justify-content-md-center justify-content-sm-start">
                    <div>
                        {
                            video ? '' : <button style={{borderRadius: '100px'}} onClick={() => setVideo(true)} className="btn btn-primary mt-5 pt-2 pb-2 pe-4 ps-4"> <FontAwesomeIcon style={{width: '30px'}} icon={faPlayCircle}/> </button>
                        }
                        {
                            video && <video width="400" height="300" controls>
                                <source src="https://rr3---sn-gvcp5mp5u5-q5js.googlevideo.com/videoplayback?expire=1640080647&ei=p1DBYaWgKM28x_APovazuAc&ip=91.90.124.12&id=o-AOipW6HZcZLUzv8geOilMSjT5-15RHfNSjjVGzg7FHW_&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=WPFKryEM_TMHLiwk5hVNzQwG&gir=yes&clen=5590994&ratebypass=yes&dur=110.503&lmt=1605078403912928&fexp=24001373,24007246&c=WEB&txp=5531432&n=LMHnbsyWU3pVqw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgB_9QNgT3Gbhm3HH_5TAVEv5hv6MB0uT-P_nBg4h_n04CIQCLDlW7sdZGgpWBaUxtI00VcypGZiaD1BciRZ6vPV6hnw%3D%3D&redirect_counter=1&rm=sn-q0cee7s&req_id=fb355f5ea48a3ee&cms_redirect=yes&ipbypass=yes&mh=7M&mip=58.145.190.238&mm=31&mn=sn-gvcp5mp5u5-q5js&ms=au&mt=1640074621&mv=m&mvi=3&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgVYJZ5-96vTUt3B3naVNWJtOo6EB0iWlrkZ3KOdSZT7kCIDYDtrhRDMnAx1jQekkrKWVD8DQrzSVrMnkPmg2LcqXn" type="video/mp4" />
                            </video>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;