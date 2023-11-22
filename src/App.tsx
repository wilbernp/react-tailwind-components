import { IconButton } from './components/IconButton';
import { Input } from './components/Input';
import { InputAdornment } from './components/InputAdornment';

export default function App() {
  return (
    <div className="space-y-2">
      <h3>inputs</h3>
      {/* <Input placeholder="Input sm" size="sm" fullWidth />
      <Input placeholder="Input md" size="md" /> */}
      <Input
        placeholder="Input lg"
        size="lg"
        leftAdornment={
          <InputAdornment position="left">
            <IconButton>
              <div className="h-6 w-6 rounded-full bg-gray-700"></div>
            </IconButton>
          </InputAdornment>
        }
        rightAdornment={
          <InputAdornment position="right">
            <IconButton>
              <div className="h-6 w-6 rounded-full bg-gray-700"></div>
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
}
