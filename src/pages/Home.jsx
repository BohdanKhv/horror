import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
import { MainLine, RowLine } from '../components'


const Home = () => {
    const [counterX, setCounterX] = useState(0)
    const [counterY, setCounterY] = useState(0)
    const [middleCount, setMiddleCount] = useState(1)
    const [leftCount, setLeftCount] = useState(11)
    const [rightCount, setRightCount] = useState(11)
    const [yNum, setYNum] = useState(25)
    const [letterNum, setLetterNum] = useState(4)
    const [animation, setAnimation] = useState(5)



    useEffect(() => {
        const interval = setInterval(() => {
            setAnimation(faker.datatype.number({ min: 1, max: 5 }))
            setMiddleCount(faker.datatype.number({ min: 1, max: 3 }))
            setLetterNum(faker.datatype.number({ min: 1, max: 4 }))
            console.log('animation')
        }, 5000)

        return () => clearInterval(interval)
    }, [animation])

    useEffect(() => {
        const interval = setInterval(() => {
            setCounterX(counterX > leftCount ? 0 : counterX + 1)
        }, 100)
        return () => clearInterval(interval)
    }, [counterX])

    useEffect(() => {
        const interval = setInterval(() => {
            setCounterY(counterY > yNum ? 0-yNum : counterY + 1)
        }, 100)
        return () => clearInterval(interval)
    }, [counterY])

    return (
        <div className="bg-black w-screen h-screen p-5 overflow-hidden">
            <div className="flex justify-center items-center h-full gap-1 text-center overflow-hidden">
                <RowLine
                    count={leftCount}
                    counterX={counterX}
                    counterY={counterY}
                    yNum={yNum}
                    letterNum={letterNum}
                    animation={animation}
                />
                {animation !== 5 &&
                    <MainLine
                        middleCount={middleCount}
                        counterX={counterX}
                        counterY={counterY}
                        letterNum={letterNum}
                        yNum={yNum}
                    />
                }
                <RowLine
                    count={rightCount}
                    counterX={counterX}
                    counterY={counterY}
                    yNum={yNum}
                    letterNum={letterNum}
                    animation={animation}
                />
            </div>
        </div>
    )
}

export default Home