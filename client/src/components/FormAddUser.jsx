import * as React from 'react';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';

export default function InputFormProps({ isLoading, onSubmitAddUser }) {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                const data = new FormData(event.currentTarget);
                onSubmitAddUser(data.get('wooclap_id'), data.get('attack_number'));
            }}
        >
            <Stack spacing={1}>
                <Input name='wooclap_id' placeholder="WOOCLAP ID" required />
                <Input name='attack_number' placeholder="Nombre d'attaque" type='number' required />
                <Button loading={isLoading} type="submit">Lancer</Button>
            </Stack>
        </form>
    );
}