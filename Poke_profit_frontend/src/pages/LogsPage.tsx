import { useEffect } from "react";
import { useLogStore } from "../store/useLogStore";
import { LogCard } from "../components/LogCard";

function LogsPage() {
  const logs = useLogStore((state) => state.logs);
  const fetchLogs = useLogStore((state) => state.fetchLogs);

  useEffect(() => {
    fetchLogs();
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-blue-500">Poke Profit</h1>
      {logs.map((log) => (
        <LogCard key={log.id} species={log.species} status={log.status} />
      ))}
    </div>
  );
}
export default LogsPage;
