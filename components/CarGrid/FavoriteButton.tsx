'use client'

import { useState } from 'react'

export default function FavoriteButton() {
  const [liked, setLiked] = useState(false)

  return (
    <button
      onClick={(e) => { e.stopPropagation(); setLiked(!liked) }}
      className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-all hover:bg-white"
      style={{ width: 36, height: 36 }}
      aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={liked ? '#0EA5E9' : 'none'}
        stroke={liked ? '#0EA5E9' : '#71717A'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    </button>
  )
}
