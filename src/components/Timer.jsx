import React, { useState, useRef, useEffect } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0)
    const [timerState, setTimerState] = useState('stopped') // 'running', 'paused', 'stopped'
    const intervalRef = useRef(null)

    const startOrResumeTimer = () => {
        if (timerState === 'stopped' || timerState === 'paused') {
            setTimerState('running')
            intervalRef.current = setInterval(() => {
                setCount(prevCount => prevCount + 1)
            }, 1000)
        }
    }

    const pauseTimer = () => {
        if (timerState === 'running') {
            clearInterval(intervalRef.current)
            setTimerState('paused')
        }
    }

    const stopTimer = () => {
        if (timerState !== 'stopped') {
            clearInterval(intervalRef.current)
            setTimerState('stopped')
            setCount(0)
        }
    }

    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60)
        const seconds = timeInSeconds % 60
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }

    const getStartButtonText = () => {
        switch (timerState) {
            case 'stopped':
                return 'Start'
            case 'paused':
                return 'Resume'
            default:
                return ''
        }
    }

    return (
        <div>
            <h1>Timer</h1>
            <div>
                <h2>{formatTime(count)}</h2>
                <div>
                    {timerState !== 'running' && (
                        <button 
                            onClick={startOrResumeTimer}
                        >
                            {getStartButtonText()}
                        </button>
                    )}

                    {timerState === 'running' && (
                        <button onClick={pauseTimer}>
                            Pause
                        </button>
                    )}

                    <button 
                        onClick={stopTimer} 
                        disabled={timerState === 'stopped'}
                    >
                        Stop
                    </button>
                </div>
                
                <p>Timer is {timerState} and ran for {formatTime(count)}</p>
            </div>
        </div>
    )
}

export default Timer