import React, {useRef} from 'react'
import useMouse from 'react-use/lib/useMouse'
import SizedConfetti from 'react-confetti'

export default () => {
    const ref = useRef(null);
    const {docX} = useMouse(ref);
    const activeProps = docX ? {
        confettiSource: {
            w: 0,
            h: 0,
            x: docX,
            y: 0,
        },
    } : {
        run: false,
    };
    return (
        <SizedConfetti
            height={document.body.scrollHeight}
            colors={[
                "#2EFF6E",
                "#7bffa3",
                "#a5ffc0",
                "#c8ffd1",
                "#ffffff",
                "#e8dfff",
                "#dec6ff",
                "#daaeff",
            ]}
            style={{pointerEvents: 'none'}}
            numberOfPieces={100}
            initialVelocityX={2}
            initialVelocityY={5}
            ref={ref}
            gravity={0.5}
            {...activeProps}
        />
    )
}