import { useEffect, useRef } from 'react'

const FocusInput = () => {
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div>
      <h4>Input Ref</h4>
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default FocusInput
