import Slider from '../components/Slider';
import { useState } from 'react';

function SliderPage() {
    const [value, setValue] = useState(50);
  
    const handleChange = (newValue) => {
      setValue(newValue);
    };
    
    return <Slider value={value} onChange={handleChange} />
}

export default SliderPage;