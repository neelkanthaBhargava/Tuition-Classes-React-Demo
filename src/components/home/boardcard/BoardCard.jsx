//@ts-check
import React from 'react'

const BoardCard = ({ onBoardClick, boardName, boardUrl, classStart, classEnd }) => {

    return (
        <div onClick={boardName === 'ICSE'
            ? () => onBoardClick('icse')
            : boardName === 'CBSE'
                ? () => onBoardClick('cbse')
                : () => onBoardClick('up')}
            className='mh3 grow pointer'>
            <article className="mw8 center bg-white br3 pa3 pa5-ns mv3 ba b--black-10 shadow-4">
                <div className="tc">
                    <img src={boardUrl} className="br-100 h4 w4 dib" alt=''
                        title={`${boardName} board image`} />
                    <h1 className="f4">{boardName}</h1>
                    <hr className="mw3 bb bw1 b--black-10" />
                </div>
                <p className="lh-copy measure center f6 black-70 tc">
                    {`From Classes ${classStart} to ${classEnd}`}
                </p>
            </article>

        </div>
    );
}

export default BoardCard;