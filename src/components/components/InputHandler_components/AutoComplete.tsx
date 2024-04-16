import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
    return (
        <div>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
                />
        </div>
        
    );
}

const top100Films = [
    {label: 'ಸಪ್ತ ಸಾಗರ ದಾ ಆಚೆ ಎಲ್ಲೋ- ಸೈಡ್ ಎ', year: 2023},
    {label: 'ಸಪ್ತ ಸಾಗರ ದಾ ಆಚೆ ಎಲ್ಲೋ- ಸೈಡ್ ಬಿ', year: 2023},
    {label: 'ಉಳಿದವರು ಕಂಡಂತೆ', year: 2014},
    {label: 'ಗೋಧಿ ಬಣ್ಣ ಸಾಧಾರಣ ಮೈಕಟ್ಟು', year: 2016},
    {label: 'ಕಿರಿಕ್ ಪಾರ್ಟಿ', year: 2016},
    {label: 'ಪೃಥ್ವಿ', year: 2010},
    {label: 'ಗೂಗ್ಲಿ', year: 2013},
    {label: 'ಮಿಲಾನಾ', year: 2006},
];