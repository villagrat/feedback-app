import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  let average =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;

  // 1 decimal place, remove w regex if it's 0
  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews posted</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;

/*
Alternative way to calculate avg:

  // round and ignore decimal places
  const average = Math.round(
    feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  );

*/
