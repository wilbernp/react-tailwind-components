import { IconButton } from '@/components/IconButton';
import { InputAdornment, InputForm } from '@/components/Input';
import { User2, XCircle } from 'lucide-react';

export default function RenderInputs() {
  return (
    <div>
      <h2>Inputs</h2>
      <h3>inputs with adornment</h3>
      <div className="flex items-center gap-3">
        <InputForm
          label="Input sm"
          placeholder="Input sm"
          supportingText="supporting text"
          id="input-sm"
          size="sm"
          leftAdornment={
            <InputAdornment position="left">
              <User2 className="h-3.5 w-3.5" />
            </InputAdornment>
          }
          rightAdornment={
            <InputAdornment>
              <IconButton size="sm">
                <XCircle className="h-3.5 w-3.5" />
              </IconButton>
            </InputAdornment>
          }
        />
        <InputForm
          fullWidth
          label="Input md"
          supportingText="supporting text"
          placeholder="Input md"
          id="input-md"
          leftAdornment={
            <InputAdornment position="left">
              <User2 className="h-4 w-4" />
            </InputAdornment>
          }
          rightAdornment={
            <InputAdornment>
              <IconButton>
                <XCircle className="h-4 w-4" />
              </IconButton>
            </InputAdornment>
          }
        />

        <InputForm
          label="Input lg"
          placeholder="Input lg"
          supportingText="supporting text"
          id="input-lg"
          size="lg"
          leftAdornment={
            <InputAdornment position="left">
              <InputAdornment position="left">
                <User2 className="h-5 w-5" />
              </InputAdornment>
            </InputAdornment>
          }
          rightAdornment={
            <InputAdornment>
              <IconButton size="lg">
                <XCircle className="h-5 w-5" />
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
      <h3>inputs status</h3>
      <div className="flex items-center gap-3">
        <InputForm
          label="Input default"
          supportingText="supporting text"
          placeholder="Input default"
          id="input-default"
          leftAdornment={
            <InputAdornment position="left">
              <User2 className="h-4 w-4" />
            </InputAdornment>
          }
          rightAdornment={
            <InputAdornment>
              <IconButton>
                <XCircle className="h-4 w-4" />
              </IconButton>
            </InputAdornment>
          }
        />
        <InputForm
          label="Input succes"
          supportingText="supporting text"
          placeholder="Input succes"
          id="input-succes"
          status="succes"
          leftAdornment={
            <InputAdornment position="left">
              <User2 className="h-4 w-4" />
            </InputAdornment>
          }
          rightAdornment={
            <InputAdornment>
              <IconButton>
                <XCircle className="h-4 w-4" />
              </IconButton>
            </InputAdornment>
          }
        />
        <InputForm
          label="Input error"
          supportingText="supporting text"
          placeholder="Input error"
          id="input-error"
          status="error"
          leftAdornment={
            <InputAdornment position="left">
              <User2 className="h-4 w-4" />
            </InputAdornment>
          }
          rightAdornment={
            <InputAdornment>
              <IconButton>
                <XCircle className="h-4 w-4" />
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
      <h3>inputs without adornment</h3>
      <div className="flex items-center gap-3">
        <InputForm
          label="Input sm"
          placeholder="Input sm"
          supportingText="supporting text"
          id="input-sm-without-adornment"
          size="sm"
        />
        <InputForm
          fullWidth
          label="Input md"
          supportingText="supporting text"
          placeholder="Input md"
          id="input-md-without-adornment"
        />

        <InputForm
          label="Input lg"
          placeholder="Input lg"
          supportingText="supporting text"
          id="input-lg-without-adornment"
          size="lg"
        />
      </div>
    </div>
  );
}
