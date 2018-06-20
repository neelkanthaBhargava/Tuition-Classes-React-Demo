//@ts-check
import React from 'react';

const HomeHeader = ({ onRouteChange, isSignedIn }) => {
    
    return (
        <div className=' flex justify-center'>
            <div className="tc mt4 mt5-m mt6-l ph3">
                <h1 className="f3 f1-ns fw2 white-90 mb0 lh-title header-quotes">
                    “Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”
                </h1>
                <h2 className="fw1 f5 f3-ns white-80 mt3 mb4">WRITE SOMETHING AWESOME</h2>
                {
                    !isSignedIn
                        ? <div>
                            <div className="f5 grow-large no-underline br-pill ph4 pv2 mb2 dib white bg-dark-blue shadow-5 pointer"
                                onClick={() => onRouteChange('signin')}>
                                Sign In
                            </div>
                            <span className="f5 dib pv2 ph4 white-70 mb2">or</span>
                            <div className="f5 grow-large no-underline br-pill ph4 pv2 mb2 dib white bg-dark-pink shadow-5 pointer"
                                onClick={() => onRouteChange('signup')}>
                                Sign Up
                            </div>
                        </div>
                        : <div></div>
                }
            </div>
        </div>
    );
}

export default HomeHeader;