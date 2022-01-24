import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

function App() {
  const [Tickets, setTickets] = useState([
    {
      id: "1",
      title: "Space Travel Partners",
      content: "Engage Jupiter Express for outer system"
    },
    {
      id: "2",
      title: "Seespaceez Plus",
      content: "Requesting available flights"
    },
    {
      id: "3",
      title: "Locate Mars Office",
      content: "Create 90 day plans for ali departments in the Mars office"
    },
    {
      id: "4",
      title: "Space Travel Partners",
      content: "Hompage footer uses an inline style should use a class"
    }
  ])

  const addTicket = () => {
    console.log('pushed')
};


  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(Tickets)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    setTickets(items)
    console.log(result, 'result')
  }


  return (
    <div className="App">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tickets">
          {(provided) => (
            <div className="grid-container" {...provided.droppableProps} ref={provided.innerRef}>
            <div className="grid-item">
            <div className="todo-list-card card">
              <div className="list">
                <div className="column">To Do</div>            
                <div className="list-cards"> 
                    {/* champs des lists */}
                    {Tickets.map((el, index) => 
                    <Draggable key={el.id} draggableId={el.id} index={index}>
                      {(provided) => (
                      <div className="list-card" {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                        {el.content}
                        <div className="card-title">{el.title}</div>

                      </div>   
                      )}                      
                    </Draggable>                 
                    )}                
                </div>
                <div className="open-card-composer">
                  <button onClick={addTicket}> + Add card</button>             
                </div>
              </div>
            </div>
            
            </div>
            <div className="grid-item">
            <div className="todo-list-card card">
            <div className="list">
            <div className="column">In progress</div>             
                <div className="list-cards"> 
                    {/* champs des lists */}
                </div>
                <div className="open-card-composer">
                  + Add card
                </div>
              </div>
            </div>
            </div>
            <div className="grid-item">
            <div className="todo-list-card card">
            <div className="list">
            <div className="column">Done</div>             
                <div className="list-cards"> 
                    {/* champs des lists */}
                    
                </div>
                <div className="open-card-composer">
                  + Add card
                </div>
              </div>
            </div>
            </div> 
            {provided.placeholder}
          </div>
          )}          
        </Droppable>
      </DragDropContext>
    

    </div>
  );
}

export default App;
