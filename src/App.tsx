import RenderButtons from './pages/RenderButtons';
import RenderInputs from './pages/RenderInputs';

export default function App() {
  return (
    <div className="flex flex-col items-center gap-5 px-14 py-8">
      <RenderButtons />
      <RenderInputs />
    </div>
  );
}
