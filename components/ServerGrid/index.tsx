import { Server } from "../../interface/server"
import ServerTab from "../ServerTab"

type Props = {
  servers: Server[]
}

export default function ServerGrid({ servers }: Props) {
  return (
    <div className="flex justify-between">
      <div
        className={`grid grid-cols-3 ${servers.length == 2 && "grid-cols-2"}`}
      >
        {servers.map((server) => (
          <ServerTab key={server.id} server={server} />
        ))}
      </div>
    </div>
  )
}
