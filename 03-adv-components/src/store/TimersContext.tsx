import { createContext, ReactNode, useContext, useReducer } from "react";

export type Timer = {
    name: string;
    duration: number;
}

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
}

const initialSTate: TimersState = {
    isRunning: true,
    timers: []
}

//Este será el objeto accesible desde cualquier lugar de la aplicación
type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void,
    startTimers: () => void,
    stopTimers: () => void
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {

    const timersCtx = useContext(TimersContext);

    if(timersCtx === null) {
        throw new Error('Something went wrong with TimersContext because is null');
    }

    return timersCtx;

}

type TimersContextProviderProps = {
    children: ReactNode
}

type StartTimersAction = {
    type: 'START_TIMERS'
}

type StopTimersAction = {
    type: 'STOP_TIMERS'
}

type AddTimerAction = {
    type: 'ADD_TIMER',
    payload: Timer
}

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

/* Esto es lo que normalmente se hace pero el problema es que si se agregan
más acciones este enfoque no sería el ideal porque el payload no sería el mismo
para todos. Por ejemplo aquí solo el ADD necesita el payload y los otros no. Por
eso usamos discriminated unions.
type Action = {
    type: 'ADD_TIMER' | 'STOP_TIMERS' | 'START_TIMERS';
    payload?: Timer;
}
*/

function timersReducer(state: TimersState, action: Action): TimersState {

    if(action.type === 'START_TIMERS') {
        //siempre se debe generar un nuevo estado de esta manera.
        //hacer esto: state.isRunning = true; es incorrecto.
        return {
            ...state,
            isRunning: true
        }
    }

    if(action.type === 'STOP_TIMERS') {
        
        return {
            ...state,
            isRunning: false
        }
    }

    if(action.type === 'ADD_TIMER') {
        
        return {
            ...state,
            timers: [
                ...state.timers,
                {
                    name: action.payload.name,
                    duration: action.payload.duration
                }
            ],
        };
    }

    return state;

}

export default function TimersContextProvider({ children }: TimersContextProviderProps) {

    const [timersState, dispatch] = useReducer(timersReducer, initialSTate);

    const ctx: TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer(timerData) {
            dispatch({type: 'ADD_TIMER', payload: timerData})
        },
        startTimers() {
            dispatch({type: 'START_TIMERS'})
        },
        stopTimers() {
            dispatch({type: 'STOP_TIMERS'})
        }
    }

    return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}
