import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
        <Image alt="Image" src={'/logo.jpeg'} width={150} height={100} />
        <Button>Get Started</Button>
    </div>
  )
}

export default Header