import React from 'react'
import TakeNoteOne from '../../Components/TakeNoteOne/TakeNoteOne'
import TakeNoteTwo from '../../Components/TakeNoteTwo/TakeNoteTwo'
import Header from '../../Components/Header/Header'
import TakeNoteThree from '../../Components/TakeNoteThree/TakeNoteThree'
function Dashboard() {

    return (
        <div>
            <Header/>
            <TakeNoteOne/>
            <TakeNoteTwo/>
            <TakeNoteThree/>
        </div>
    )
}

export default Dashboard
