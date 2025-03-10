import { useEffect, useState } from 'react'

function PaperClipSvg() {
    const [size, setSize] = useState(getSize(window.innerWidth))

    function getSize(width) {
        if (width < 320) return 28
        if (width < 768) return 36
        return 42
    }

    useEffect(() => {
        const handleResize = () => {
            setSize(getSize(window.innerWidth))
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M12.9475 7.30836L7.4212 12.8347C7.17884 13.0768 6.98657 13.3643 6.85538 13.6807C6.7242 13.9972 6.65668 14.3364 6.65668 14.6789C6.65668 15.0215 6.7242 15.3607 6.85538 15.6772C6.98657 15.9936 7.17884 16.2811 7.4212 16.5232C7.6633 16.7656 7.95079 16.9578 8.26725 17.089C8.5837 17.2202 8.92291 17.2877 9.26548 17.2877C9.60804 17.2877 9.94725 17.2202 10.2637 17.089C10.5802 16.9578 10.8677 16.7656 11.1098 16.5232L17.0922 10.5407C17.5174 10.118 17.8549 9.61536 18.0851 9.06175C18.3154 8.50814 18.4339 7.91447 18.4339 7.31488C18.4339 6.71529 18.3154 6.12161 18.0851 5.568C17.8549 5.01439 17.5174 4.51176 17.0922 4.08902C16.232 3.25474 15.0773 2.79361 13.8791 2.80581C12.6808 2.81801 11.5357 3.30257 10.6927 4.15419L4.65805 10.0715C3.43633 11.2936 2.75 12.9509 2.75 14.6789C2.75 16.407 3.43633 18.0643 4.65805 19.2864C5.88014 20.5081 7.53744 21.1944 9.26548 21.1944C10.9935 21.1944 12.6508 20.5081 13.8729 19.2864L21.25 11.9744'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}

export default PaperClipSvg
