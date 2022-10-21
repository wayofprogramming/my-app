import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
function TextBtn() {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text" href="https://www.google.com">Text</Button>
        </Stack>
    );
}

function ContainedBtn() {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained">Contained</Button>
        </Stack>
    );
}

function OutlinedBtn() {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="outlined">Outlined</Button>
        </Stack>
    );
}
export {TextBtn,ContainedBtn,OutlinedBtn};