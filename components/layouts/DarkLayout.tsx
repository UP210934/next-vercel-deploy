import { ReactNode } from 'react'

export const DarkLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{backgroundColor:'rgba(0,0,0,0.3)',
padding:'10px',
borderRadius:'10px'}}>

<h3>DarkLayout</h3>
<div>{children}</div>

</div>
  )
}
