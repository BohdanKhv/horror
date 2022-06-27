import { faker } from "@faker-js/faker"

const RowLine = ({count, yNum, counterX, counterY, letterNum, animation}) => {
    return (
        <div className='flex gap-1'>
            {Array.from({ length: count }).map((_, i) => (
                <div className={`flex flex-col gap-1`} key={`q-${i}`}>
                    {Array.from({ length: yNum }).map((_, j) => (
                        animation === 1 ?
                            <div key={`w-${j}`} className={`py-1 w-12 ${j === counterY && (i+1) % 3 === 0 ? 'text-blue-500' : (counterY === j) ? 'text-white' : counterY === j+1 || counterY === j -1 ? 'text-gray-500' : 'text-gray-800' }`}>
                                {counterY > j ?
                                    (faker.datatype.number({ min: 1000, max: 99999 }) + counterX).toString().slice(0, letterNum)
                                :
                                    faker.random.alphaNumeric(letterNum)
                                }
                            </div>
                        : animation === 2 ?
                        <div key={`w-${j}`} className={`py-1 w-12 ${counterX === i ? 'text-white' : counterY+1 ===j || counterY-1 === j ? 'text-blue-300'  : counterY === j ? 'text-blue-500' : 'text-gray-800' }`}>
                            {counterY > j ?
                                (faker.datatype.number({ min: 1000, max: 99999 }) + counterX).toString().slice(0, letterNum)
                            :
                                faker.random.alphaNumeric(letterNum)
                            }
                        </div>
                        : animation === 3 ?
                        <div key={`w-${j}`} className={`py-1 w-12 ${yNum % counterY === j || yNum % counterY+1 === j ? 'text-red-500' : j % 2 === 0 ? 'text-white' : 'text-gray-800'}`}>
                            {counterY > j ?
                                (faker.datatype.number({ min: 1000, max: 99999 }) + counterX).toString().slice(0, letterNum)
                            :
                                faker.random.alphaNumeric(letterNum)
                            }
                        </div>
                        : animation === 4 ?
                        <div key={`w-${j}`} className={`py-1 w-12 ${j % counterX === 1 ? 'text-blue-500' : j % counterX-1 === 1 ? 'text-blue-300' : j % counterX+1 === 1 ? 'text-blue-300' : 'text-gray-700'}`}>
                            {counterY > j ?
                                (faker.datatype.number({ min: 1000, max: 99999 }) + counterX).toString().slice(0, letterNum)
                            :
                                faker.random.alphaNumeric(letterNum)
                            }
                        </div>
                        : animation === 5 ?
                        <div key={`w-${j}`} className={`py-1 w-12 ${j >= yNum / 2 ? 'text-yellow-300' : 'text-blue-400'} ${j+5 > counterY && j-5 <counterY ? 'opacity-50' : ''}`}>
                            {counterY > j ?
                                (faker.datatype.number({ min: 1000, max: 99999 }) + counterX).toString().slice(0, letterNum)
                            :
                                faker.random.alphaNumeric(letterNum)
                            }
                        </div>
                        :
                        <></>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default RowLine