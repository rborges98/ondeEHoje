'use client'
import Content from '../components/content'

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center">
      <h1 className="font-shadow pb-10 text-center font-athletic-outfit text-8xl text-white">
        Onde é Hoje?
      </h1>
      <Content />
    </main>
  )
}
