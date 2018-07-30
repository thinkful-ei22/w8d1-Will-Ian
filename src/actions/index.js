export const ADD_GUESS = 'ADD_GUESS';

export const addGuess = guess => ({
    type: ADD_GUESS,
    guess
});

export const NEW_GAME = 'NEW_GAME';

export const newGame = () => ({
    type: NEW_GAME
})

export const SHOW_INFO = 'SHOW_INFO';

export const showInfo = () => ({
    type: SHOW_INFO
});

export const UPDATE_AURAL_STATUS = 'UPDATE_AURAL_STATUS';

export const updateAuralStatus = () => ({
    type: UPDATE_AURAL_STATUS,
  
})