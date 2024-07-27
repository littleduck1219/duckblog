import React from 'react'

export default function PostNav() {
    return (
        <section className='fixed top-16 flex h-10 w-full max-w-[1600px] items-center justify-center border-b'>
            <div className='m-auto flex w-[50rem] max-w-[1200px] justify-between'>
                <div>포스트 제목</div>
                <div>포스트 날짜</div>
            </div>
        </section>
    )
}
