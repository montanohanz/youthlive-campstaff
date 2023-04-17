import * as CampLIVE2023 from '../components/2023'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <CampLIVE2023.Head /> */}
      <CampLIVE2023.Fullwidth />
      <CampLIVE2023.Deets />
      {/* <CampLIVE2023.PersonGrid /> */}
      <CampLIVE2023.FAQ />
      <CampLIVE2023.CTA />
      <CampLIVE2023.Footer />
    </>
  )
}
