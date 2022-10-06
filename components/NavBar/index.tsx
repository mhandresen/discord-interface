import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { ReactNode } from "react"
import cx from "classnames"
import { signOut, useSession } from "next-auth/react"
import LogOutIcon from "../../public/icons/LogOut"
import GitHubIcon from "../../public/icons/Github"

type Props = {
  children: ReactNode
  links: {
    name: string
    path: string
  }[]
}

export default function NavBar({ children, links }: Props) {
  const router = useRouter()
  const { data: session } = useSession()
  return (
    <>
      <nav className="flex pl-4 border-b border-gray-700 md:shadow-lg items-center fixed w-full top-0 z-10 bg-gray-800">
        <div className="text-lg font-bold md:py-0 p-4 text-white">Logo</div>
        <div className="text-lg border-l border-gray-700 font-bold md:py-0 p-4 text-gray-500">
          Chateau interface
        </div>
        <ul className="md:px-2 ml-auto md:flex md:space-2 absolute md:relative top-full left-0 right-0">
          {links.map((link) => {
            return (
              <li
                className={cx(
                  " hover:text-gray-600 border-l border-gray-700 font-bold",
                  router.pathname == link.path ? "text-white " : "text-gray-500"
                )}
              >
                <a
                  href={link.path}
                  className="flex md:inline-flex p-4 items-center"
                >
                  <span>{link.name}</span>
                </a>
              </li>
            )
          })}
          <li>
            <a
              href="/user"
              className="flex md:inline-flex p-4 items-center border-l border-gray-700"
            >
              <Image
                className="rounded-full"
                src={session!.user!.image!.toString()}
                width={28}
                height={28}
              />
            </a>
          </li>
          <li className="text-gray-500 hover:text-gray-600 border-l border-gray-700">
            <a
              href="https://github.com/mhandresen/discord-interface/issues"
              target="_blank"
              className="flex md:inline-flex p-4 items-center"
            >
              <span>
                <GitHubIcon />
              </span>
            </a>
          </li>
          <li className="text-gray-500 hover:text-gray-600 border-l border-gray-700">
            <button
              className="flex md:inline-flex py-4 pl-4 pr-2 items-center"
              onClick={() => signOut()}
            >
              <span className="">
                <LogOutIcon />
              </span>
            </button>
          </li>
        </ul>
      </nav>
      <main>
        <div className="max-w-6xl mx-auto px-3 py-3 md:py-20 drop-shadow-sm">
          {children}
        </div>
      </main>
    </>
  )
}
