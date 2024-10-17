import { type Metadata } from 'next'
import './globals.css'

type Props = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'WebGue | Build Modern with WebGue',
  description:
    'Create stunning, high-performance websites effortlessly with WebsiteAja.',
}

export default function RootLayout({ children }: Props) {
  return children
}
