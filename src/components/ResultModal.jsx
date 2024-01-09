const ResultModal = ({ref, result, targetTime}) => {
  return (
      <dialog ref={ref} className="result-modal" open>
          <h2>You {result}</h2>
          <p>Your time: <strong>{targetTime}</strong> seconds.</p>
          <p>You stopped the timer with <strong></strong> seconds left.</p>
          <form method="dialog">
                <button>Close</button>
          </form>
      </dialog>
    );
}

export default ResultModal;
