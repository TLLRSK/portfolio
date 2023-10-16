export default function DropdownButtons(props) {
  const { title, isChecked, onRadioChange } = props;

  return (
    <div className={`btn--hello-dropdown ${isChecked ? 'active' : ''}`}>
      <label htmlFor={title} className='btn--hello-dropdown-label'>
        <input
          type="radio"
          className='btn--hello-dropdown-toggler'
          id={title}
          name='skills'
          checked={isChecked}
          onChange={() => onRadioChange(title)}
        />
        {title}
      </label>
    </div>
  );
}