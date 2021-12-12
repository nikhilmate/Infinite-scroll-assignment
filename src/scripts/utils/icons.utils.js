import React from 'react'

export const LoaderIcon = ({ width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : '60'}
        height={height ? height : '60'}
        className={className ? className : ''}
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
    >
        <g>
            <circle cx="84.908" cy="76.786" r="6" fill="#f3722c">
                <animateTransform
                    attributeName="transform"
                    begin="0s"
                    calcMode="spline"
                    dur="1.4925373134328357s"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 50 50;360 50 50"
                ></animateTransform>
            </circle>
            <circle cx="76.786" cy="84.908" r="6" fill="#f3722c">
                <animateTransform
                    attributeName="transform"
                    begin="-0.062s"
                    calcMode="spline"
                    dur="1.4925373134328357s"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 50 50;360 50 50"
                ></animateTransform>
            </circle>
            <circle cx="66.838" cy="90.651" r="6" fill="#f3722c">
                <animateTransform
                    attributeName="transform"
                    begin="-0.125s"
                    calcMode="spline"
                    dur="1.4925373134328357s"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 50 50;360 50 50"
                ></animateTransform>
            </circle>
            <circle cx="55.743" cy="93.624" r="6" fill="#f3722c">
                <animateTransform
                    attributeName="transform"
                    begin="-0.187s"
                    calcMode="spline"
                    dur="1.4925373134328357s"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 50 50;360 50 50"
                ></animateTransform>
            </circle>
            <circle cx="44.257" cy="93.624" r="6" fill="#f3722c">
                <animateTransform
                    attributeName="transform"
                    begin="-0.25s"
                    calcMode="spline"
                    dur="1.4925373134328357s"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 50 50;360 50 50"
                ></animateTransform>
            </circle>
            <circle cx="33.162" cy="90.651" r="6" fill="#f3722c">
                <animateTransform
                    attributeName="transform"
                    begin="-0.312s"
                    calcMode="spline"
                    dur="1.4925373134328357s"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 50 50;360 50 50"
                ></animateTransform>
            </circle>
            <animateTransform
                attributeName="transform"
                calcMode="spline"
                dur="1.4925373134328357s"
                keySplines="0.5 0 0.5 1"
                repeatCount="indefinite"
                type="rotate"
                values="0 50 50;0 50 50"
            ></animateTransform>
        </g>
    </svg>
)