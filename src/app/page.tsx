'use client'

import Image from 'next/image'
import { type ReactNode, useState } from 'react'
import styles from './page.module.scss'
import logo from '@/../public/logo.svg'

export default function Home(): ReactNode {
    const [count, setCount] = useState<number>(0)

    const onClick = () => {
        setCount(count + 1)
    }

    return (
        <main className={styles.main}>
            <Image src={logo} alt='logo' onClick={onClick} />
            <p>You've clicked the logo {count} times!</p>
        </main>
    )
}
