import { createContext, useContext, useReducer } from 'react';	

const initialState = {
    level: 0,
};

function phaseReducer(state, action) {
    switch (action.type) {
        case 'NEXT_LEVEL':
            return { ...state, level: state.level + 1 };
        default:
            return state;
    }
}

const PhaseContext = createContext();

export function PhaseProvider({ children }) {
    const [state, dispatch] = useReducer(phaseReducer, initialState);

    return (
        <PhaseContext.Provider value={{ state, dispatch }}>
            {children}
        </PhaseContext.Provider>
    );
}

export function usePhase() {
    return useContext(PhaseContext);
}