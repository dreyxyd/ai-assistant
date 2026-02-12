import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      className="-ml-9 mb-2 gap-1 text-muted-foreground hover:text-foreground w-32 bg-white hover:bg-gray-100"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft />
      Назад
    </Button>
  );
};
