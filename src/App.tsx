import { IconButton } from './components/IconButton';
import { Input } from './components/Input';
import { InputAdornment } from './components/InputAdornment';

export default function App() {
  return (
    <div className="space-y-2">
      <h3>inputs with button icon</h3>
      <Input
        placeholder="Input lg"
        size="lg"
        leftAdornment={
          <InputAdornment position="left">
            <IconButton size="lg">
              <div className="h-6 w-6 rounded-full bg-gray-700"></div>
            </IconButton>
          </InputAdornment>
        }
        rightAdornment={
          <InputAdornment>
            <IconButton size="lg">
              <div className="h-6 w-6 rounded-full bg-gray-700"></div>
            </IconButton>
          </InputAdornment>
        }
      />
      <Input
        placeholder="Input md"
        leftAdornment={
          <InputAdornment position="left">
            <IconButton>
              <div className="h-4 w-4 rounded-full bg-gray-700"></div>
            </IconButton>
          </InputAdornment>
        }
        rightAdornment={
          <InputAdornment>
            <IconButton>
              <div className="h-4 w-4 rounded-full bg-gray-700"></div>
            </IconButton>
          </InputAdornment>
        }
      />

      <Input
        placeholder="Input sm"
        size="sm"
        leftAdornment={
          <InputAdornment position="left">
            <IconButton size="sm">
              <div className="h-3.5 w-3.5 rounded-full bg-gray-700"></div>
            </IconButton>
          </InputAdornment>
        }
        rightAdornment={
          <InputAdornment>
            <IconButton size="sm">
              <div className="h-3.5 w-3.5 rounded-full bg-gray-700"></div>
            </IconButton>
          </InputAdornment>
        }
      />

      <h3>inputs without button icon</h3>

      <Input
        placeholder="Input lg"
        size="lg"
        leftAdornment={
          <InputAdornment position="left">
            <div className="h-6 w-6 rounded-full bg-gray-700"></div>
          </InputAdornment>
        }
        rightAdornment={
          <InputAdornment>
            <div className="h-6 w-6 rounded-full bg-gray-700"></div>
          </InputAdornment>
        }
      />
      <Input
        placeholder="Input md"
        leftAdornment={
          <InputAdornment position="left">
            <div className="h-4 w-4 rounded-full bg-gray-700"></div>
          </InputAdornment>
        }
        rightAdornment={
          <InputAdornment>
            <div className="h-4 w-4 rounded-full bg-gray-700"></div>
          </InputAdornment>
        }
      />

      <Input
        placeholder="Input sm"
        size="sm"
        leftAdornment={
          <InputAdornment position="left">
            <div className="h-3.5 w-3.5 rounded-full bg-gray-700"></div>
          </InputAdornment>
        }
        rightAdornment={
          <InputAdornment>
            <div className="h-3.5 w-3.5 rounded-full bg-gray-700"></div>
          </InputAdornment>
        }
      />
    </div>
  );
}
