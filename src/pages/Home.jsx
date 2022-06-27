import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'


const Home = () => {
    const [counterX, setCounterX] = useState(0)
    const [counterY, setCounterY] = useState(0)
    const [middleCount, setMiddleCount] = useState(1)
    const [leftCount, setLeftCount] = useState(11)
    const [rightCount, setRightCount] = useState(11)
    const [yNum, setYNum] = useState(25)


    useEffect(() => {
        const interval = setInterval(() => {
            setCounterX(counterX > leftCount ? 0 : counterX + 1)
        }, 100)
        return () => clearInterval(interval)
    }, [counterX])

    useEffect(() => {
        const interval = setInterval(() => {
            setCounterY(counterY > yNum ? 0 : counterY + 1)
        }, 100)
        return () => clearInterval(interval)
    }, [counterY])

    return (
        <div className="bg-black w-screen h-screen p-5 overflow-hidden">
            <div className="flex justify-center items-center h-full gap-1 text-center overflow-hidden">
                <div className='flex gap-1'>
                {Array.from({ length: leftCount }).map((_, i) => (
                    <div className={`flex flex-col gap-1`} key={`q-${i}`}>
                        {Array.from({ length: yNum }).map((_, j) => (
                            <div key={`w-${j}`} className={`py-1 w-12 ${j === counterY && (i+1) % 3 === 0 ? 'text-blue-500' : (counterY === j) ? 'text-white' : counterY === j+1 || counterY === j -1 ? 'text-gray-600' : 'text-gray-800' }`}>
                                {counterY > j ?
                                    (faker.datatype.number({ min: 1000, max: 9999 }) + counterX).toString().slice(0, 4)
                                :
                                    faker.random.alphaNumeric(4)
                                }
                            </div>
                        ))}
                    </div>
                ))}
                </div>
                <div className='flex gap-1'>
                {Array.from({ length: middleCount }).map((_, i) => (
                    <div className={`flex flex-col gap-1`} key={`e-${i}`}>
                        {Array.from({ length: yNum }).map((_, j) => (
                            <div className={`py-1 text-red-500 w-12`} key={`r-${j}`}>
                                {counterY > j ?
                                    (faker.datatype.number({ min: 1000, max: 9999 }) + counterX).toString().slice(0, 4)
                                :
                                    faker.finance.currencySymbol().slice(0, 1) + faker.finance.currencySymbol().slice(0, 1) + faker.finance.currencySymbol().slice(0, 1) + faker.finance.currencySymbol().slice(0, 1)
                                }
                            </div>
                        ))}
                    </div>
                ))}
                </div>
                <div className='flex gap-1'>
                {Array.from({ length: rightCount }).map((_, i) => (
                    <div className={`flex flex-col gap-1`} key={`t-${i}`}>
                        {Array.from({ length: yNum }).map((_, j) => (
                            <div key={`w-${j}`} className={`py-1 w-12 ${j === counterY && (i+1) % 3 === 0 ? 'text-blue-500' : (counterY === j) ? 'text-white' : counterY === j+1 || counterY === j -1 ? 'text-gray-600' : 'text-gray-800' }`}>
                                {counterY > j ?
                                    (faker.datatype.number({ min: 1000, max: 9999 }) + counterX).toString().slice(0, 4)
                                :
                                    faker.random.alphaNumeric(4)
                                }
                            </div>
                        ))}
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Home