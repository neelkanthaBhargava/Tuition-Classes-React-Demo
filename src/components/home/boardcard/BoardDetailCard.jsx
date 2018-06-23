import React, { Component } from 'react';

const boards = [
    {
        name: 'ICSE',
        details: `The Indian Certificate of Secondary Education (ICSE) is an examination conducted by the Council for the Indian School Certificate Examination, a private board of school education in India. It has been designed to provide an examination in a course of general education, in accordance with the recommendations of the New Education Policy 1986 (India), through the medium of English. It was affiliated to French Board of Examination before 1986. It is the one of the reputed boards in India and its board examination is regarded as the toughest in India.`,
        subjects: ['Mathematics', 'Science', 'Commerce', 'Computers', 'Hindi', 'HCG'],
    },
    {
        name: 'CBSE',
        details: `The Central Board of Secondary Education (CBSE) is a national level board of education in India for public and private schools, controlled and managed by Union Government of India. CBSE has asked all schools affiliated to follow only NCERT curriculum. There are approximately 19,316 schools in India and 211 schools in 25 foreign countries affiliated to the CBSE.`,
        subjects: ['Mathematics', 'Science', 'Commerce', 'Computers', 'Hindi', 'HCG'],
    },
    {
        name: 'UP',
        details: `The Board of High School and Intermediate Education Uttar Pradesh is the Uttar Pradesh state government administered autonomous examining authority for the Standard 10 examination (or secondary school level examination) and Standard 12 examination (or inter college level examination) of Uttar Pradesh, headquartered in Allahabad India. Presently this board enjoys the tag of Asia's largest board in terms of no. of students. The examination for the 10th and 12th standard is called the High school examination and Intermediate examination respectively. The High school and Intermediate examinations are conducted annually and simultaneously all over the state of Uttar Pradesh. The Board holds the examinations and prepares the results of nearly 32,00,000 students.`,
        subjects: ['Mathematics', 'Science', 'Commerce', 'Computers', 'Hindi', 'HCG'],
    }
]

export default class BoardDetailCard extends Component {
    render() {
        const {boardSelected} = this.props;
        const b = boards.filter((b1) =>  b1.name.toLowerCase()===boardSelected)[0];
        return (
            <div>
                <article className="center mw6 mw7-ns br3  bg-white mv3 shadow-4">
                    <h1 className="f2 bg-white br3 br--top black-60 mv1 tc pa2">{b.name}</h1>
                    <hr className="mw6 mw7-ns bb bw1 b--black-10" />
                    <div className="pa4 flex justify-around flex-wrap bg-white">
                        <p className="f6 f5-ns tj lh-copy measure">
                            {b.details}
                        </p>
                        <div className="f6 f5-ns lh-copy measure">
                            <strong >Subjects Available: </strong><br/>
                            <ul>
                                {b.subjects.map((subject) => {
                                    return (
                                        <li key={`${subject}`}>{subject}</li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
