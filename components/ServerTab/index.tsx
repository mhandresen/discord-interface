import Link from "next/link"
import React from "react"
import { Server } from "../../interface/server"
import Image from "next/image"

type Props = {
  server: Server
}

function getServerInitials(serverName: string): string {
  let serverNameArray = serverName.split(" ")
  serverNameArray.forEach((word) => {
    if (word.includes("-")) {
      serverNameArray.push("-")
    }
    return word
  })
  console.log("ServerNameArray", serverNameArray)
  const serverInitials = serverNameArray.map((word) => word.charAt(0))
  return serverInitials.join("")
}

export default function ServerTab({ server }: Props) {
  const serverInitials = getServerInitials(server.name)

  return (
    <div className="m-4 border border-gray-600 rounded-lg h-[300px] w-[300px] relative overflow-hidden">
      <div className="absolute">
        <Image
          className="blur-xl scale-125 brightness-50"
          src={`https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`}
          width={300}
          height={300}
          alt={serverInitials}
        />
      </div>
      <div className="relative w-[300px] h-[300px] rounded-lg">
        <div className="relative h-[100px] w-[100px] rounded-full overflow-hidden border-2 border-white bg-gray-900 mx-auto mt-6 text-center">
          <Image
            className=""
            layout="fill"
            src={`https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`}
            alt=""
          />
          <h1 className="font-bold text-white mt-8 text-lg">
            {serverInitials}
          </h1>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 text-center">
        <div className="bg-gray-900 relative rounded-b-lg h-[150px]">
          <h1 className=" text-white">{server.name}</h1>
          <div className="relative text-white">
            <button>{server ? "Setup" : "Configure"}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
