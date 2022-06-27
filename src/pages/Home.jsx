import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
import { MainLine, RowLine, Touch } from '../components'
import obsurbFace from '../assets/obsurbFace.jpg'


const Home = () => {
    const [counterX, setCounterX] = useState(0)
    const [counterY, setCounterY] = useState(0)
    const [middleCount, setMiddleCount] = useState(1)
    const [leftCount, setLeftCount] = useState(5)
    const [rightCount, setRightCount] = useState(5)
    const [yNum, setYNum] = useState(20)
    const [letterNum, setLetterNum] = useState(6)
    const [animation, setAnimation] = useState(faker.datatype.number({ min: 1, max: 10 }))

    const [obsurb, setObsurb] = useState(false)


    useEffect(() => {
        const interval = setInterval(() => {
            setAnimation(faker.datatype.number({ min: 1, max: 10 }))
            setMiddleCount(faker.datatype.number({ min: 1, max: 3 }))
            setLetterNum(faker.datatype.number({ min: 1, max: 6 }))
        }, 5000)

        return () => clearInterval(interval)
    }, [animation])

    useEffect(() => {
        const interval = setInterval(() => {
            setCounterX(counterX > leftCount ? 0 : counterX + 1)
        }, obsurb ? 25 : 100)
        return () => clearInterval(interval)
    }, [counterX])

    useEffect(() => {
        const interval = setInterval(() => {
            setCounterY(counterY > yNum ? 0-yNum : counterY + 1)
        }, obsurb ? 25 : 100)
        return () => clearInterval(interval)
    }, [counterY])

    return (
        <div className="bg-black w-screen h-screen overflow-hidden relative bg-contain bg-center bg-no-repeat"
            style={{
                backgroundImage: obsurb ? `url(${obsurbFace})` : '',
            }}
        >
            <div className="flex justify-center items-center h-full gap-1 text-center overflow-hidden select-none">
                <RowLine
                    count={leftCount}
                    counterX={counterX}
                    counterY={counterY}
                    yNum={yNum}
                    letterNum={letterNum}
                    animation={animation}
                    obsurb={obsurb}
                />
                {animation !== 5 && animation !== 10 &&
                    <MainLine
                        middleCount={middleCount}
                        counterX={counterX}
                        counterY={counterY}
                        letterNum={letterNum}
                        yNum={yNum}
                        obsurb={obsurb}
                    />
                }
                <RowLine
                    count={rightCount}
                    counterX={counterX}
                    counterY={counterY}
                    yNum={yNum}
                    letterNum={letterNum}
                    animation={animation}
                    obsurb={obsurb}
                />
                <Touch
                    setObsurb={setObsurb}
                />
            </div>
        </div>
    )
}

export default Home