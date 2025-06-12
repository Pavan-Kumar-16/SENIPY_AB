'use client'

import { useState } from 'react'
import { useFeatureFlagEnabled } from 'posthog-js/react'

const Banner: React.FC = () => {
  const showBanner = useFeatureFlagEnabled('top-bar-banner')
  const [visible, setVisible] = useState(true)

  if (!showBanner || !visible) return null

  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center py-2 px-4 flex justify-between items-center">
      <span>🎉 Now live: SENIPY AI Beta — Try it free!</span>
      <button className="text-white font-bold px-2" onClick={() => setVisible(false)}>
        ✕
      </button>
    </div>
  )
}

export default Banner
