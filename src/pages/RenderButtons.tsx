import { Button } from '@/components/Button';
import { Plus } from 'lucide-react';

export default function RenderButtons() {
  return (
    <div>
      <h2>Buttons</h2>
      <h3>buttons sizes</h3>
      <div className="flex items-center gap-3">
        <Button size="xs">button xs</Button>
        <Button size="sm">button sm</Button>
        <Button>button md</Button>
        <Button size="lg">button lg</Button>
        <Button size="xl">button xl</Button>
      </div>
      <h3>outlined buttons</h3>
      <div className="flex items-center gap-3">
        <Button variant="outlined">primary outlined</Button>
        <Button color="secondary" variant="outlined">
          secondary outlined
        </Button>
        <Button color="success" variant="outlined">
          success outlined
        </Button>
        <Button color="danger" variant="outlined">
          danger outlined
        </Button>
        <Button color="error" variant="outlined">
          error outlined
        </Button>
      </div>
      <h3>filled buttons</h3>
      <div className="flex items-center gap-3">
        <Button>primary filled</Button>
        <Button disabled>primary filled disable</Button>
        <Button color="secondary">secondary filled</Button>
        <Button color="success">success filled</Button>
        <Button color="danger">danger filled</Button>
        <Button color="error">error filled</Button>
      </div>
      <h3>buttons with icons</h3>
      <div className="flex items-center gap-3">
        <Button
          leftIcon={<Plus className="h-3.5 w-3.5" />}
          rightIcon={<Plus className="h-3.5 w-3.5" />}
          size="xs"
        >
          button xs
        </Button>
        <Button
          leftIcon={<Plus className="h-4 w-4" />}
          rightIcon={<Plus className="h-4 w-4" />}
          size="sm"
        >
          button sm
        </Button>
        <Button
          leftIcon={<Plus className="h-4 w-4" />}
          rightIcon={<Plus className="h-4 w-4" />}
        >
          button md
        </Button>
        <Button
          leftIcon={<Plus className="h-5 w-5" />}
          rightIcon={<Plus className="h-5 w-5" />}
          size="lg"
        >
          button lg
        </Button>
        <Button
          leftIcon={<Plus className="h-5 w-5" />}
          rightIcon={<Plus className="h-5 w-5" />}
          size="xl"
        >
          button xl
        </Button>
      </div>
    </div>
  );
}
