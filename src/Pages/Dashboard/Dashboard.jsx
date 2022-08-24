import React from 'react'
import TakeNoteOne from '../../Components/TakeNoteOne/TakeNoteOne'
import TakeNoteTwo from '../../Components/TakeNoteTwo/TakeNoteTwo'
import Header from '../../Components/Header/Header'
import TakeNoteThree from '../../Components/TakeNoteThree/TakeNoteThree'
import { getNotes } from '../../Services/dataService'
import MiniDrawer from '../../Components/Drawer/Drawer'
function Dashboard() {

    //list rendering
    const [notes, setNotes] = React.useState([])
    const [drawer, setDrawer] = React.useState(false)

    const listenToHeader = () => {
        setDrawer(!drawer)
    }    
    //For get Notes
    React.useEffect(() => {
        getNotes()
            .then(response => {
                console.log(response);
                setNotes(response.data.data)
            })
            .catch(error => { console.log(error) })
    }, [])



    //Conditional rendering
    const [view, setView] = React.useState(true);

    const listenToTakeNoteOne = () => {
        setView(false)
    }

    const listenToTakeNoteTwo = () => {
        setView(false)
    }
    // passing note as props

    return (
        <div>
            <div>
                <Header listenToHeader={listenToHeader} />

                <MiniDrawer drawer={drawer}/>
            </div>
            {
                view ? <TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne} /> : <TakeNoteTwo listenToTakeNoteTwo={listenToTakeNoteTwo} />
            }

            {/* <TakeNoteOne/>
             <TakeNoteTwo/> */}
            {/* <TakeNoteThree note={notes}/> */}

            <div >
                {notes.map((note) => (
                    <TakeNoteThree note={note} />
                ))
                } </div>
            <div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
