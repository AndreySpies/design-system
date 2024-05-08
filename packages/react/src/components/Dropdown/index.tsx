'use client'

import { useRef, useState, useEffect } from 'react'
import {
  DropdownContainer,
  DropdownList,
  DropdownItem,
  DropdownTrigger,
} from './styles'
import { Button } from './../Button'

export interface Option {
  text: string
  variant?: 'default' | 'danger'
  onSelect: () => void
}

export interface DropdownProps {
  options: Option[]
  name?: string
  children?: React.ReactElement
}

export function Dropdown({ options, children, name }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLUListElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelectOption = (option: Option) => {
    option.onSelect()
    setIsOpen(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      buttonRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const handleReposition = () => {
      if (isOpen && buttonRef.current && dropdownRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect()
        const dropdownRect = dropdownRef.current.getBoundingClientRect()
        const buttonTop = buttonRect.top
        const buttonHeight = buttonRect.height
        const dropdownHeight = dropdownRect.height

        const spaceBelow = window.innerHeight - buttonTop - buttonHeight
        if (spaceBelow < dropdownHeight) {
          dropdownRef.current.style.bottom = `${buttonHeight + 6}px`
        } else {
          dropdownRef.current.style.top = `${buttonHeight + 6}px`
        }
      }
    }

    handleReposition()
  }, [isOpen])

  return (
    <DropdownContainer>
      <DropdownTrigger ref={buttonRef} onClick={toggleDropdown}>
        {name && children === undefined && <Button>{name}</Button>}
        {children && name === undefined && children}
      </DropdownTrigger>
      {isOpen && (
        <DropdownList ref={dropdownRef}>
          {options.map((option, index) => (
            <DropdownItem
              key={index}
              onClick={() => handleSelectOption(option)}
              variant={option.variant}
            >
              {option.text}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  )
}

Dropdown.displayName = 'Dropdown'
