import { useState } from 'react';
import DropdownButton from './DropdownButton';

export default function DropdownButtonsGroup(props) {
    const [selectedRadio, setSelectedRadio] = useState('');
    const {handleDropdown} = props;

    const handleRadioChange = (value) => {
        setSelectedRadio(value);
    };

    return (
    <div className='hello__dropdown-buttons' onChange={() => handleDropdown(selectedRadio)}>
      <DropdownButton
      title='Fields'
      isChecked={selectedRadio === 'Fields'}
      onRadioChange={handleRadioChange}
      />
      <DropdownButton
      title='Tools'
      isChecked={selectedRadio === 'Tools'}
      // onChange(title)
      onRadioChange={handleRadioChange}
      />
    </div>
    );
}