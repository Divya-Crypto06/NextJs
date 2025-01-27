import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
{/*         HEADER */}
        <Image alt="Image" src={'/vercel.svg'} width={150} height={100} />
        <Button>Get Started</Button>
    </div>
  )
}

export default Header
