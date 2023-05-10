import React from 'react'
import PropTypes from 'prop-types'

const RadioGroup = ({labelText, options, onChange, selected}) => {
  return (
    <div>
        {labelText && <label classNae='text-sm'>{labelText}</label>}
        <div className="flex items-center space-x-6">
        {options.map((o,i) => <div key={`${o}-${i}`}><input type="radio" name={o} value={o} id={o} checked={selected === o} onChange={onChange} /> <label className='text-sm text-placeholderColor' htmlFor={o}>{o}</label></div>)}
        </div>
    </div>
  )
}

RadioGroup.propTypes = {
    options: PropTypes.array.isRequired,
    labelText: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    selected: PropTypes.string
}


export default RadioGroup