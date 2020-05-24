// add code snippets from README
let state
let button = document.getElementById('button')
 
function reducer(state={count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}
function render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
  }

function dispatch(action) {
    state = reducer(state, action)
    render()
}

button.addEventListener('click', ()=> {
    dispatch({type: 'INCREASE_COUNT'})
})
// dispatch({type: 'INCREASE_COUNT'})
dispatch({type: '@@INIT'})

