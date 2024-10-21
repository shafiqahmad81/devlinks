"use client"
import { PlusIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'

function AddNew () {
   return (
      <Button variant="outline" className="w-full"> <PlusIcon className="mr-2 font-bold" /> Add new link</Button>
   )
}

export default AddNew