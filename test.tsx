import React from 'react'
import Image from 'next/image'
import Link from './Link'
import { Session, signOut } from 'next-auth/client' 5
interface Props {
   session: Session
}
