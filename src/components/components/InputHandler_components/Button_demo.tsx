import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import ButtonGroup from '@mui/material/ButtonGroup';

const Button_demo = () => {
  return (
    <div>
            {/* <div>Button_demo</div> */}
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
    </div>
  );
};

function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
};

export {
  Button_demo,
  BasicButtonGroup
}