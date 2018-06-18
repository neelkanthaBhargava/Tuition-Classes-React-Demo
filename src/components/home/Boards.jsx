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
        return (
            <div>
                <div className='flex flex-wrap flex-nowrap-ns justify-center'>
                    <BoardCard boardName={boards[0].boardName}
                        boardUrl={boards[0].boardUrl}
                        classStart={boards[0].classStart}
                        classEnd={boards[0].classEnd} />
                    <BoardCard boardName={boards[1].boardName}
                        boardUrl={boards[1].boardUrl}
                        classStart={boards[1].classStart}
                        classEnd={boards[1].classEnd} />
                    <BoardCard boardName={boards[2].boardName}
                        boardUrl={boards[2].boardUrl}
                        classStart={boards[2].classStart}
                        classEnd={boards[2].classEnd} />

                </div>
            </div>
        )
    }
}
