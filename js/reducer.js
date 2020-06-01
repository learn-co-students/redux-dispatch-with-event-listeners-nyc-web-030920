// add code snippets from README
// let state = {count: 0}
let state;

function reducer(state = {count: 0}, action)
{
    switch (action.type)
    {
        case 'INCREASE_COUNT':
            return {count: state.count + 1}; //returns the object, does not change the actual state
        default:
            return state;
    }
}

function dispatch(action)
{
    state = reducer(state, action); //reassigns the state
    render();
}

function render()
{
    let container = document.getElementById('container');
    container.textContent = state.count;
}

//get the button element
let button = document.getElementById('button');
//onClick send an obj into dispatch with the type: 'INCREASE_COUNT'
button.addEventListener('click', () => {
    dispatch({type: 'INCREASE_COUNT'})
})

//calls dispatch to render initial state on page load
// '@@INIT' is an artibrary value as long is it doesnt go into the switch case
dispatch({type: '@@INIT'})