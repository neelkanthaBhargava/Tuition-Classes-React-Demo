//@ts-check
import React from 'react'

const BoardCard = ({ boardName, boardUrl, classStart, classEnd }) => {

    return (
        <div className='mh3 grow'>
            <article className="mw8 center bg-white br3 pa3 pa5-ns mv3 ba b--black-10 shadow-4">
                <div className="tc">
                    <img src={boardUrl} className="br-100 h4 w4 dib" alt=''
                        title={`${boardName} board image`}/>
                    <h1 className="f4">{boardName}</h1>
                    <hr className="mw3 bb bw1 b--black-10" />
                </div>
                <p className="lh-copy measure center f6 black-70">
                    {`From Classes ${classStart} to ${classEnd}`}
                </p>
            </article>

        </div>
    );
}

export default BoardCard;