import { Input } from './components/Input';

export default function App() {
  return (
    <div className="space-y-2">
      <h3>inputs</h3>
      <Input placeholder="Input sm" size="sm" fullWidth />
      <Input placeholder="Input md" size="md" />
      <Input placeholder="Input lg" size="lg" />
    </div>
  );
}
