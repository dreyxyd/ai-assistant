import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { formatTime } from '@/lib/formatters.ts';

export interface WhatsNewItem {
  id: number;
  time: string;
  title: string;
  confirmed: number;
}
interface WhatsNew {
  data: WhatsNewItem[];
}
export const WhatsNew = ({ data }: WhatsNew) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Что нового с прошлого просмотра</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 justify-center items-between">
        <ul>
          {data.map((item) => (
            <li key={item.id} className="flex flex-row gap-4 justify-between items-center">
              <div className="flex gap-4">
                <span className="font-bold">{formatTime(item.time)} </span>
                <span>{item.title}</span>
              </div>

              <span>подтверждений {item.confirmed}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
