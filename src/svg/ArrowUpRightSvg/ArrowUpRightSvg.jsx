function ArrowUpRightSvg({
    strokeWidth = 1.5,
    width = 24,
    height = 24,
    stroke = 'white',
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M17.6568 6.34315L6.34314 17.6569'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeMiterlimit='10'
                strokeLinecap='round'
            />
            <path
                d='M18.101 16.7327L18.101 7.4373C18.1019 7.23513 18.0627 7.03471 17.9856 6.84767C17.9086 6.66062 17.7953 6.4907 17.6523 6.34768C17.5093 6.20465 17.3394 6.09137 17.1523 6.01443C16.9653 5.93732 16.7649 5.89814 16.5627 5.89898L7.2673 5.89899'
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}

export default ArrowUpRightSvg
