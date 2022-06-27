import { useEffect, useState } from "react"
import obsurb from '../assets/obsurb.mp3'

const Touch = ({setObsurb}) => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        window.addEventListener("mousedown", (e) => {
            setOpen(true)
            setObsurb(true)
            document.querySelector('.obsurb').clientX = e.clientX - 132
            document.querySelector('.obsurb').clientY = e.clientY - 132
            document.querySelector('audio').play()
        })
        window.addEventListener("mousemove", (e) => {
            document.querySelector('.obsurb').clientX = e.clientX - 132
            document.querySelector('.obsurb').clientY = e.clientY - 132
        })
        window.addEventListener("mouseup", () => {
            setOpen(false)
            setObsurb(false)
            document.querySelector('audio').pause()
        });
        window.addEventListener("touchstart", (e) => {
            setOpen(true)
            setObsurb(true)
            document.querySelector('.obsurb').clientX = e.touches[0].pageX - 132
            document.querySelector('.obsurb').clientY = e.touches[0].pageY - 132
            document.querySelector('audio').play()
        })
        window.addEventListener("touchmove", (e) => {
            document.querySelector('.obsurb').clientX = e.touches[0].pageX - 132
            document.querySelector('.obsurb').clientY = e.touches[0].pageY - 132
        })
        window.addEventListener("touchend", () => {
            setOpen(false)
            setObsurb(false)
            document.querySelector('audio').pause()
        });
    }, [])

    return (
        <>
        {open && 
            <div 
                className="obsurb bg-black  p-32 absolute rounded-full z-50 backdrop-invert bg-white/30"
            />}
            <audio 
            src={obsurb}
            autoPlay={false}
            loop
            />
            </>
    )
}

export default Touch