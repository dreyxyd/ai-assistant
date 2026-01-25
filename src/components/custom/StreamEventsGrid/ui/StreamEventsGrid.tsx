import { type StreamEvent, StreamEventItem } from '@/components/custom/StreamEventItem/ui/StreamEventItem.tsx';
interface StreamEventsGridProps {
  streamEvents: StreamEvent[];
}
export const StreamEventsGrid = ({ streamEvents }: StreamEventsGridProps) => {
  return (
    <div
      className="
        flex flex-col justify-center gap-2
        md:grid md:grid-cols-2 md:gap-2
      "
    >
      {streamEvents.map((streamEvent) => (
        <StreamEventItem streamEvent={streamEvent} key={streamEvent.title} />
      ))}
    </div>
  );
};
