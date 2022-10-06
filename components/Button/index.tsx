import React from "react"
import cx from "classnames"
interface Props {
  filled?: boolean
  children?: React.ReactNode
  height?: string
  onClick: () => void
  width?: string
  className?: string
}
export default function Button({
  filled,
  children,
  height,
  onClick,
  width,
  className,
}: Props) {
  //border border-gray-700 hover:border-gray-500
  //bg-gray-700 hover:bg-gray-600 bg-gray-700 hover:bg-opacity-50
  if (filled)
    return (
      <button
        className="px-2 py-1 rounded hover:bg-gray-600 bg-gray-700 hover:bg-opacity-50 ease-in-out duration-100 text-gray-200"
        onClick={onClick}
      >
        {children}
      </button>
    )

  return (
    <button
      className={cx(
        "px-2 py-1 rounded border border-gray-700 hover:border-gray-500 ease-in-out duration-100 text-gray-200"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
