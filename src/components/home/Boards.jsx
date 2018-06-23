import React, { Component } from 'react'
import BoardCard from './boardcard/BoardCard';
import BoardDetailCard from './boardcard/BoardDetailCard';

const boards = [
    {
        boardName: 'ICSE',
        boardUrl: 'https://cisce.allresultsnic.in/wp-content/uploads/2016/10/icse-logo.jpg',
        classStart: 'K.G.',
        classEnd: 'X'
    },
    {
        boardName: 'CBSE',
        boardUrl: 'http://blog.careerlauncher.com/wp-content/uploads/2018/03/rceehvgcdjfib.jpg',
        classStart: 'K.G.',
        classEnd: 'X'
    },
    {
        boardName: 'U.P.',
        boardUrl: 'https://www.sarkariexam.com/wp-content/uploads/2011/12/up-board-logo-uttar-pradesh.jpg',
        classStart: 'K.G.',
        classEnd: 'XII'
    },
];

export default class Boards extends Component {
    constructor(props){
        super(props);
        this.state = {
            boardSelected: 'icse'
        }
    }

    onBoardClick = (board) => {
        this.setState({ boardSelected: board });
    }

    render() {
        const { boardSelected } = this.state;
        const boardArray = boards.map((board, i) => {
            return (
                <BoardCard
                    onBoardClick={this.onBoardClick}
                    key={board.boardName}
                    boardName={board.boardName}
                    boardUrl={board.boardUrl}
                    classStart={board.classStart}
                    classEnd={board.classEnd} />
            );
        });
        return (
            <div>
                <div className='flex flex-wrap justify-center'>
                    {boardArray}
                </div>
                {
                    boardSelected !== ''
                        ? <BoardDetailCard boardSelected={boardSelected} />
                        : <div></div>
                }
            </div>
        )
    }
}
