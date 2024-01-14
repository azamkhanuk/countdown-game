import {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from 'react-dom'

const ResultModal = forwardRef(function ResultModal({targetTime, remainingTime, onReset}, ref) {

    const dialog = useRef()
    const userLost = remainingTime <= 0
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100 )

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })

  return createPortal(
      <dialog ref={dialog} className="result-modal" onClose={onReset}>
          {userLost && <h2>You lost</h2>}
          {!userLost && <h2>Your Score: {score}</h2>}
          <p>Your time: <strong>{targetTime}</strong> seconds.</p>
          <p>You stopped the timer with <strong>{formattedRemainingTime}</strong> seconds left.</p>
          <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
          </form>
      </dialog>,
        document.getElementById('modal')
    );
})

export default ResultModal;
