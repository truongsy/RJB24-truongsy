import React from 'react'

export default function Content() {
    // 3 cách học useEffect
// useEffect(callback)
//   - gọi callback mỗi khi component re-render (ít sử dụng)
// useEffect(callback, [])
// useEffect(callback, [deps])
// ---------------
//  1. Callback luôn được gọi sau khi component mounted
  return (
    <div>Học F8 tại đây</div>
  )
}
