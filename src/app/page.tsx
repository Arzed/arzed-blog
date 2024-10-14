import { PostCard } from '@/components/PostCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div>
      <div className="space-y-7">
        <Card className="relative w-full bg-[url('/images/banner.webp')] md:h-96">
          <div className="-bottom-20 left-80 shadow-md md:absolute md:rounded-full">
            <Image
              src={'/images/unnamed.webp'}
              alt=""
              width={200}
              height={200}
              className="mx-auto rounded-full"
            />
          </div>
        </Card>
      </div>

      <div className="mt-20">
        <h2 className="text-center">Arzed</h2>
        <p className="mt-2 leading-8">Hello world</p>
        <p className="mt-2 leading-8">
          I&apos;m Muhammad Irsyad, an Frontend Developer
        </p>
      </div>
      <div className="mt-10 space-y-12 border-t border-gray-200 pt-10 dark:border-gray-700">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  )
}
