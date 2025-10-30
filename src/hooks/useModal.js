import { useState, useCallback } from 'react'

export default function useModal(){
  const [open, setOpen] = useState(false)
  const show = useCallback(()=>setOpen(true),[])
  const hide = useCallback(()=>setOpen(false),[])
  return { open, show, hide }
}
