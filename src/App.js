import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Card from './components/Card';
import Select from './components/Select';
import Table from './components/Table';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleInputChange = event => {
    setInputValue(event.target.value);
  };
  
  const handleSelectChange = event => {
    setSelectedOption(event.target.value);
  };

  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  const tableData = [
    { Name: 'usaid', Age: 25, City: 'dsfsd' },
    { Name: 'ahmed', Age: 28, City: 'adas' },
    { Name: 'sufi', Age: 22, City: 'ewqeq' }
  ];

  return (
    <div>
      <h1>Dynamic Components Example</h1>
      <Input
        type="text"
        placeholder="Enter something..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button label="Click me" onClick={handleButtonClick} />
      <Card title="Card Title" content="Card content goes here." />
      <Select
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
      />
      <Table data={tableData} />
    </div>
  );
};

export default App;
