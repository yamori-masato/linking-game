import React from 'react'
import Game from '../components/Game'
import Title from '../components/Title'

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { connect } from 'react-redux'



const App = (props) => {
  console.log(props.result)
  return (
    <DndProvider backend={HTML5Backend}>
      {props.page === 'title' && (
        <Title/> 
      )}
      {props.page === 'game' && (
        <Game/> 
      )}
      {props.page === 'result' && (
        <></>
      )}
    </DndProvider>
  )
}



function mapStateToProps(store) {
    return store.game
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)