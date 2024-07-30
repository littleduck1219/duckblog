import React from 'react'

import Link from 'next/link'

type Props = {
    category: string
    onCategoryChange: () => void
}

export default function CategoryButton({ category, onCategoryChange }: Props) {
    return (
        <button
            className='rounded-md border px-3 py-1'
            onClick={onCategoryChange}
        >
            {category}
        </button>
    )
}
