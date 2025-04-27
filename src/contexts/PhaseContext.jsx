import { createContext, useContext, useReducer } from 'react';	

const initialState = {
    level: 0,
    completedLevels: [],
};

function phaseReducer(state, action) {
    switch (action.type) {
        case 'NEXT_LEVEL':
            return { ...state, level: state.level + 1, completedLevels: [...state.completedLevels, state.level], };
        default:
            return state;
    }
}

const PhaseContext = createContext();

export function PhaseProvider({ children }) {
    const [state, dispatch] = useReducer(phaseReducer, initialState);

    const nextLevel = () => dispatch({ type: 'NEXT_LEVEL' });
    return (
        <PhaseContext.Provider value={{ state, nextLevel }}>
            {children}
        </PhaseContext.Provider>
    );
}

export function usePhase() {
    return useContext(PhaseContext);
}