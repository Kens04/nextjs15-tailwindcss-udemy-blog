import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArticleList = () => {
  return (
    <div>
      <article className='shadow my-4'>
        <Link href={"#"} className='hover:opacity-75'>
        <Image className='aspect-video object-cover' src={"https://picsum.photos/1280"} alt='投稿記事' width={1280} height={300} />
        </Link>
        <div className='bg-white flex flex-col justify-start p-6'>
          <Link href="#" className='text-blue-700 pb-4 font-bold'>Technology</Link>
          <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'>Next.jsの勉強中</Link>
          <p className='text-sm pb-3 text-slate-900'>Published on 2023/07/15</p>
          <Link href="#" className='text-slate-900 pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta pariatur reiciendis quaerat dolor soluta. In a delectus consectetur voluptates quaerat nemo fugit nulla veritatis ex, ducimus unde, voluptatum, sunt vero!</Link>
          <Link href={"#"} className='text-purple-800 hover:text-black'>続きを読む</Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList