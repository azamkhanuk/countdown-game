import {forwardRef, useImperativeHandle, useRef} from "react";

const ResultModal = forwardRef(function ResultModal({ result, targetTime}, ref) {

    const dialog = useRef()
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })

  return (
      <dialog ref={dialog} className="result-modal" open>
          <h2>You {result}</h2>
          <p>Your time: <strong>{targetTime}</strong> seconds.</p>
          <p>You stopped the timer with <strong></strong> seconds left.</p>
          <form method="dialog">
                <button>Close</button>
          </form>
      </dialog>
    );
})

export default ResultModal;
