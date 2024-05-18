import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function useRipple<T extends HTMLElement>(ref: React.RefObject<T>) {
    const [ripples, setRipples] = useState<React.CSSProperties[]>([]);
    useEffect(() => {
        if (ref.current) {
            const element = ref.current;
            const handleClick = (e: MouseEvent) => {
                let rect = element.getBoundingClientRect();
                let left = e.clientX - rect.left;
                let top = e.clientY - rect.top;

                setRipples([
                    ...ripples,
                    {
                        left: left,
                        top: top,
                    },
                ]);
            };

            element.addEventListener('click', handleClick);
            return () => {
                element.removeEventListener('click', handleClick);
            };
        }
    }, [ref, ripples]);

    return ripples.map((style, index) => (
        <RippleStyled key={index} style={{ ...style }} />
    ));
}

const RippleStyled = styled.span`
    position: absolute;
    background-color: ${({ theme }) => theme.color.font_animation};
    transform: translate(-50%, -50%);
    animation: rippleEffect 0.4s linear;
    border-radius: 50%;
    overflow: hidden;
    @keyframes rippleEffect {
        from {
            width: 0px;
            height: 0px;
            opacity: 0.5;
        }
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
`;