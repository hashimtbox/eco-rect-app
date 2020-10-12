import React from 'react';
import Radio from '@material-ui/core/Radio';

export default function ColorsFilters() {
    const [selectedValue, setSelectedValue] = React.useState(null);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <Radio
                style={{ color: 'green', '&$checked': { color: 'green' } }}
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
            />
            <Radio
                style={{ color: 'red', '&$checked': { color: 'red' } }}
                checked={selectedValue === 'b'}
                onChange={handleChange}
                value="b"
            />
            <Radio
                style={{ color: 'blue', '&$checked': { color: 'blue' } }}
                checked={selectedValue === 'c'}
                onChange={handleChange}
                value="c"
            />
            <Radio
                style={{ color: 'black', '&$checked': { color: 'black' } }}
                checked={selectedValue === 'd'}
                onChange={handleChange}
                value="d"
            />
            <Radio
                style={{ color: 'yellow', '&$checked': { color: 'yellow' } }}
                checked={selectedValue === 'e'}
                onChange={handleChange}
                value="e"
            />
            <Radio
                style={{ color: 'purple', '&$checked': { color: 'purple' } }}
                checked={selectedValue === 'f'}
                onChange={handleChange}
                value="f"
            />
            <Radio
                style={{ color: 'orange', '&$checked': { color: 'orange' } }}
                checked={selectedValue === 'g'}
                onChange={handleChange}
                value="g"
            />

        </div>
    );
}
