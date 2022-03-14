function RatingSelect({ select, selected }) {
  //  Don't need local state as its a duplicate of parent state ///    which we pass down as props

  const handleChange = (e) => {
    // + syntax changes typeOf from string to number
    select(+e.currentTarget.value);
  };

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            version={selected === i + 1 ? 'secondary' : 'primary'}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
