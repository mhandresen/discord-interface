import Link from "next/link"
import React, { useEffect } from "react"
import { Server } from "../../interface/server"
import Image from "next/image"
import cx from "classnames"
import PencilSquare from "../../public/icons/PencilSquare"
import CogSixToothIcon from "../../public/icons/CogSixTooth"

type Props = {
  server: Server
}

function getServerInitials(serverName: string): string {
  let serverNameArray = serverName.split(" ")
  const serverInitials = serverNameArray.map((word) => word.charAt(0))
  return serverInitials.join("")
}

export default function ServerTab({ server }: Props) {
  const serverInitials = getServerInitials(server.name)
  console.log("info", server.name, server.icon)
  return (
    <div className="m-4 border border-gray-600 rounded-lg h-[300px] w-[300px] relative overflow-hidden drop-shadow-md">
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
          {server.icon != null ?  (<Image
            className=""
            layout="fill"
            src={`https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`}
            alt=""
          />) : (
          <h1 className="font-bold text-white mt-8 text-lg">
            {serverInitials}
          </h1>)}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 text-center">
        <div className="bg-gray-900 relative rounded-b-lg h-[150px]">
          <div className="relative pt-2">
            <h1 className="font-extrabold text-gray-600">Server:</h1>
            <h1 className="text-gray-400 font-extrabold">{server.name}</h1>
            <h1 className="font-extrabold text-gray-600">Role:</h1>
          </div>
          <div className="relative mt-8">
            <button className={cx(`text-white h-10 w-full flex justify-center items-center`, server.icon == null ? "bg-gray-600" : "bg-blue-600")}>{server.icon != null ? (<><PencilSquare /><h1 className="ml-1">Add to server</h1></>) : (<><CogSixToothIcon /><h1 className="ml-1">Configure</h1></>)}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
