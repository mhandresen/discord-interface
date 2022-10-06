import { signOut } from "next-auth/react"
import ServerGrid from "../Components/ServerGrid"
import { useGetUserGuilds } from "../hooks/use-get-users-discord-guilds"
import { Server } from "../interface/server"

export default function Home() {
  const { data, isLoading, error } = useGetUserGuilds()
  if (error) return <div>{error.toString()}</div>
  if (isLoading || !data) return <>Loading...</>

  return (
    <div className="bg-gray-800">
      <ul>
        <ServerGrid servers={data} />
      </ul>
    </div>
  )
}
