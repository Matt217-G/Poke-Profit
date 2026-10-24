type LogCardProps = {
  species: string;
  status: string;
};

export function LogCard({ species, status }: LogCardProps) {
  return (
    <div className=" border rounded-lg p-4">
      <h2>{species}</h2>
      <p>{status}</p>
    </div>
  );
}
