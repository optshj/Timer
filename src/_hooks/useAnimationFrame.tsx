import React, { useState, useEffect } from 'react';

function useAnimationFrame(callback: () => void) {
    const frameRate = 1000 / 30; // 30프레임

    useEffect(() => {
    let animationFrameId: number;
    let prevTime: number;

    function updateAnimation(time: number) {
        if (!prevTime) prevTime = time;
        const deltaTime = time - prevTime;

        if (deltaTime > frameRate) {
            prevTime = time;
            callback();
        }

        animationFrameId = requestAnimationFrame(updateAnimation);
    }

    animationFrameId = requestAnimationFrame(updateAnimation);

    return () => cancelAnimationFrame(animationFrameId);
    }, [callback]);
}
export default useAnimationFrame;