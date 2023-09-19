import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

export default function SelectBasic({ onChangeValue }) {
    const handleChange = (event, newValue) => {
        onChangeValue(newValue);
    };
    return (
        <Select placeholder="Choississez une action" defaultValue={0} onChange={handleChange}>
            <Option value={1}>Ajouter un utilisateur</Option>
            <Option value={2}>Avoir la reponse</Option>
        </Select>
    );
}