import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Checkboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>
  );
};

function CheckboxLabels() {
    return (
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel required control={<Checkbox />} label="Required" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
    );
  };

function IconCheckboxes() {
    return (
      <div>
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        <Checkbox
          {...label}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
        />
      </div>
    );
  }

export {
    Checkboxes,
    CheckboxLabels,
    IconCheckboxes
}