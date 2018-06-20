import React, { Component } from 'react'
import BoardCard from './boardcard/BoardCard';

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

    render() {
        const boardArray = boards.map((board, i) => {
            return (
                <BoardCard
                    key={boards[i].boardName}
                    boardName={boards[i].boardName}
                    boardUrl={boards[i].boardUrl}
                    classStart={boards[i].classStart}
                    classEnd={boards[i].classEnd} />
            );
        });
        return (
            <div className='flex flex-wrap justify-center'>
                {boardArray} 
            </div>
        )
    }
}
