import React from 'react';
import { makeStyles } from '@material-ui/core'
import { useState } from 'react';

const useStyles = makeStyles(() => ({
    screen: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '98vw',
        height: '98vh',
        backgroundColor: 'grey'
    },
    pageDiv:{
        display: 'flex',
        width: '80%',
        height: '90%',
    },
    rightPanel:{
        width: '20%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    leftPanel: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        height: '100%',
    },
    leftBottomDivContainer: {
        display: 'flex',
        flexDirection: 'column-reverse',
        height: 'calc(100% - 100px)',
        backgroundColor: 'green', 
    },
    headerDiv: {
        height: '100px',
        backgroundColor: 'red', 
    },
    middleDiv: {
        height: 'auto',
        marginTop: 0,
        // Here is MaterialUI syntax. It's defines the scrollBar style
        overflow: 'auto',
        '@global': {
            '*::-webkit-s-crollbar': {
            width: 1
            },
            '*::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)'
            },
            '*::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.1)',
                borderRadius: '5px',
                outline: '1px solid slategrey'
            },
            '::-webkit-scrollbar-button:increment': {
                width: '0px'
            }
        },
        // End definition of the scrollBar
    },
    flexBottomDiv: {
        maxHeight: '150px',
        mainHeight: '100px',
        overflow: 'hidden',
        backgroundColor: 'yellow', 
    },
}));

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.screen}>
            <div className={classes.pageDiv}>
                <LeftPanel />
                <RightPanel />
            </div>
        </div>
    );
}


export default App;

const LeftPanel = () => {
    const classes = useStyles();

    const [state, setState ] = useState({
        bottomDivFieldsCounter: 1,
        middleDivFieldsCounter: 1,
    })

    const addFieldToMiddleDiv = () => {
        setState(prevState => {
            return {...prevState, middleDivFieldsCounter: prevState.middleDivFieldsCounter + 1}
        })
    }

    const addFieldToBottomDiv = () => {
        setState(prevState => {
            return {...prevState, bottomDivFieldsCounter: prevState.bottomDivFieldsCounter + 1}
        })
    }
    
    return(
        <div className={classes.leftPanel}>
            <div className={classes.headerDiv}>
                <h4>Header</h4>
            </div>
            <div className={classes.leftBottomDivContainer}>
                <div className={classes.flexBottomDiv} onClick={addFieldToBottomDiv}>
                    <TextField sumOfTextFields={state.bottomDivFieldsCounter} />
                </div>
                <div className={classes.middleDiv} onClick={addFieldToMiddleDiv}>
                    <TextField sumOfTextFields={state.middleDivFieldsCounter}/>
                </div>
            </div>
            
        </div>
    );
}


const RightPanel = () => {
    const classes = useStyles();
    return(
        <div className={classes.rightPanel}>
            <h4>Other pannel component and not important for our case</h4>
        </div>
    );
}


const TextField = (props) => {
    return(
        <>
        {
            [...Array(props.sumOfTextFields)].map((e, i) => <h4> Text field number {i} </h4> )
        }
        </>
    );
}