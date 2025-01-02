import { CaretUpDown, Check } from "@phosphor-icons/react"
import { useState, useRef, useEffect } from "react"

interface IDropDown {
  label: string
  options: {
    value: string
    label: string
  }[]
  value: string
  onChange: (value: string) => void
}

export default function DropDown({
  label,
  options,
  value,
  onChange,
}: IDropDown) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  const selectedLabel =
    options.find((option) => option.value === value)?.label || "Select"

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {label}: {selectedLabel}
        <CaretUpDown
          aria-hidden="true"
          className="-mr-1 size-5 text-gray-400"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black/5 transition-transform transform scale-100 opacity-100 focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className="flex justify-between items-center gap-x-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
              >
                {option.label}
                {value === option.value && <Check />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
