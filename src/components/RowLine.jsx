const words = ["sadness", "emptiness", "loss", "depression", "despair", "shame","fear", "death", "war", "blood", "kill", "murder", "fire"]
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const num = '0123456789'

const RowLine = ({count, yNum, counterX, counterY, letterNum, animation, obsurb}) => {
    return (
        <div className='flex gap-1'>
            {Array.from({ length: count }).map((_, i) => (
                <div className={`flex flex-col gap-1`} key={`q-${i}`}>
                    {Array.from({ length: yNum }).map((_, j) => (
                        animation === 1 ?
                            <div key={`w-${j}`} className={`py-1 w-20 ${j === counterY && (i+1) % 3 === 0 ? obsurb ? 'text-red-500' : 'text-green-500' : (counterY === j) ? 'text-white' : counterY === j+1 || counterY === j -1 ? 'text-gray-500' : obsurb ? 'text-red-900' : 'text-gray-800' }`}>
                                { obsurb ?
                                    words[Math.floor(Math.random() * words.length)].slice(0, letterNum)
                                : counterY > j ?
                                    Array.from({length: letterNum}).map((_, i) => 
                                        num.charAt(Math.floor(Math.random() * num.length))
                                    )
                                :
                                    Array.from({length: letterNum}).map((_, i) => 
                                        characters.charAt(Math.floor(Math.random() * characters.length))
                                    )
                                }
                            </div>
                        : animation === 2 ?
                        <div key={`w-${j}`} className={`py-1 w-20 ${counterX === i ? 'text-white' :
                            counterX === i-1 ? 'text-gray-500' :
                            counterX === i+1 ? 'text-gray-500' :
                        counterY+1 ===j || counterY-1 === j ? 
                        obsurb ? 'text-red-300' : 'text-green-300'  : counterY === j ? 
                        obsurb ? 'text-red-500' : 'text-green-500' : obsurb ? 'text-red-900' : 'text-gray-800' }`}>
                            { obsurb ?
                                    words[Math.floor(Math.random() * words.length)].slice(0, letterNum)
                                : counterY > j ?
                                    Array.from({length: letterNum}).map((_, i) => 
                                        num.charAt(Math.floor(Math.random() * num.length))
                                    )
                            :
                                    Array.from({length: letterNum}).map((_, i) => 
                                        characters.charAt(Math.floor(Math.random() * characters.length))
                                    )
                            }
                        </div>
                        : animation === 3 ?
                        <div key={`w-${j}`} className={`py-1 w-20 ${yNum % counterY === j || yNum % counterY+1 === j ? obsurb ? 'text-red-500' : 'text-green-500' : j % 2 === 0 ? 'text-gray-600' : obsurb ? 'text-red-900' : 'text-gray-800'}`}>
                            { obsurb ?
                                    words[Math.floor(Math.random() * words.length)].slice(0, letterNum)
                                : counterY > j ?
                                    Array.from({length: letterNum}).map((_, i) => 
                                        num.charAt(Math.floor(Math.random() * num.length))
                                    )
                            :
                                    Array.from({length: letterNum}).map((_, i) => 
                                        characters.charAt(Math.floor(Math.random() * characters.length))
                                    )
                            }
                        </div>
                        : animation === 4 ?
                        <div key={`w-${j}`} className={`py-1 w-20 ${j % counterX === 1 ? obsurb ? 'text-red-500' : 'text-green-500' : j % counterX-1 === 1 ? obsurb ? 'text-red-300' : 'text-green-300' : j % counterX+1 === 1 ? obsurb ? 'text-red-300' : 'text-green-300' : 'text-gray-700'}`}>
                            { obsurb ?
                                    words[Math.floor(Math.random() * words.length)].slice(0, letterNum)
                                : counterY > j ?
                                    Array.from({length: letterNum}).map((_, i) => 
                                        num.charAt(Math.floor(Math.random() * num.length))
                                    )
                            :
                                    Array.from({length: letterNum}).map((_, i) => 
                                        characters.charAt(Math.floor(Math.random() * characters.length))
                                    )
                            }
                        </div>
                        : animation === 5 ?
                        <div key={`w-${j}`} className={`py-1 w-20 ${j >= yNum / 2 ? obsurb ? 'text-red-800' : 'text-gray-300' : obsurb ? 'text-red-400' : 'text-green-400'} ${j+5 > counterY && j-5 <counterY ? 'opacity-50' : ''}`}>
                            { obsurb ?
                                    words[Math.floor(Math.random() * words.length)].slice(0, letterNum)
                                : counterY > j ?
                                    Array.from({length: letterNum}).map((_, i) => 
                                        num.charAt(Math.floor(Math.random() * num.length))
                                    )
                            :
                                    Array.from({length: letterNum}).map((_, i) => 
                                        characters.charAt(Math.floor(Math.random() * characters.length))
                                    )
                            }
                        </div>
                        : animation === 6 ?
                        <div key={`w-${j}`} className={`py-1 w-20 ${j >= yNum / 2 ? obsurb ? 'text-red-800' : 'text-gray-300' : obsurb ? 'text-red-400' : 'text-green-400'} ${j+5 > counterY && j-5 <counterY ? 'opacity-50' : ''}`}>
                            { obsurb ?
                                    words[Math.floor(Math.random() * words.length)].slice(0, letterNum)
                                : counterY > j ?
                                    Array.from({length: letterNum}).map((_, i) => 
                                        num.charAt(Math.floor(Math.random() * num.length))
                                    )
                            :
                                    Array.from({length: letterNum}).map((_, i) => 
                                        characters.charAt(Math.floor(Math.random() * characters.length))
                                    )
                            }
                        </div>
                        : animation === 7 ?
                        <div key={`w-${j}`} className={`py-1 w-20 ${counterY === i ? 'text-white' :
                            counterY === i-1 ? 'text-gray-500' :
                            counterY === i+1 ? 'text-gray-500' :
                        counterX+1 ===j || counterX-1 === j ? 
                        obsurb ? 'text-red-300' : 'text-green-300'  : counterX === j ? 
                        obsurb ? 'text-red-500' : 'text-green-500' : obsurb ? 'text-red-900' : 'text-gray-800' }`}>
                            { obsurb ?
                                    words[Math.floor(Math.random() * words.length)].slice(0, letterNum)
                                : counterX > j ?
                                    Array.from({length: letterNum}).map((_, i) => 
                                        num.charAt(Math.floor(Math.random() * num.length))
                                    )
                            :
                                    Array.from({length: letterNum}).map((_, i) => 
                                        characters.charAt(Math.floor(Math.random() * characters.length))
                                    )
                            }
                        </div>
                        : animation === 8 ?
                        <div key={`w-${j}`} className={`py-1 w-20 ${i === counterY *-1 && (i+1) % 3 === 0 ? obsurb ? 'text-red-500' : 'text-green-500' : (counterY *-1 === i) ? 'text-white' : counterY *-1 === i+1 || counterY *-1 === i -1 ? 'text-gray-500' : obsurb ? 'text-red-900' : 'text-gray-800' }`}>
                            { obsurb ?
                                words[Math.floor(Math.random() * words.length)].slice(0, letterNum)
                            : counterY *-1 > i ?
                                    Array.from({length: letterNum}).map((_, i) => 
                                        num.charAt(Math.floor(Math.random() * num.length))
                                    )
                            :
                                    Array.from({length: letterNum}).map((_, i) => 
                                        characters.charAt(Math.floor(Math.random() * characters.length))
                                    )
                            }
                        </div>
                        : animation === 9 ?
                            <div key={`w-${j}`} className={`py-1 w-20 ${j % counterX === 1 ? obsurb ? 'bg-red-500' : 'bg-green-500' : j % counterX-1 === 1 ? obsurb ? 'bg-red-300' : 'bg-green-300' : j % counterX+1 === 1 ? obsurb ? 'text-red-300' : 'bg-green-300' : 'text-gray-700'}`}>
                                { obsurb ?
                                        words[Math.floor(Math.random() * words.length)].slice(0, letterNum)
                                    : counterY > j ?
                                    Array.from({length: letterNum}).map((_, i) => 
                                        num.charAt(Math.floor(Math.random() * num.length))
                                    )
                                :
                                    Array.from({length: letterNum}).map((_, i) => 
                                        characters.charAt(Math.floor(Math.random() * characters.length))
                                    )
                                }
                            </div>
                        : animation === 10 ?
                        <div key={`w-${j}`} className={`py-1 w-20 ${j >= yNum / 2 ? obsurb ? 'bg-red-800' : 'bg-gray-400' : obsurb ? 'bg-red-400' : 'bg-green-400'} ${j+5 > counterY * -1 && j-5 <counterY * -1 ? 'opacity-50' : ''}`}>
                            { obsurb ?
                                    words[Math.floor(Math.random() * words.length)].slice(0, letterNum)
                                : counterY > j ?
                                    Array.from({length: letterNum}).map((_, i) => 
                                        num.charAt(Math.floor(Math.random() * num.length))
                                    )
                            :
                                    Array.from({length: letterNum}).map((_, i) => 
                                        characters.charAt(Math.floor(Math.random() * characters.length))
                                    )
                            }
                        </div>
                        : animation === 11 ?
                        <div key={`w-${j}`} className={`py-1 w-20 ${counterY === i ? 'text-white' :
                            counterY === i-1 ? 'text-gray-500' :
                            counterY === i+1 ? 'text-gray-500' :
                        counterX+1 ===i || counterX-1 === i ? 
                        obsurb ? 'text-red-300' : 'text-green-300'  : counterX === i ? 
                        obsurb ? 'text-red-500' : 'text-green-500' : obsurb ? 'text-red-900' : 'text-gray-800' }`}>
                            { obsurb ?
                                    words[Math.floor(Math.random() * words.length)].slice(0, letterNum)
                                : counterX > j ?
                                    Array.from({length: letterNum}).map((_, i) => 
                                        num.charAt(Math.floor(Math.random() * num.length))
                                    )
                            :
                                    Array.from({length: letterNum}).map((_, i) => 
                                        characters.charAt(Math.floor(Math.random() * characters.length))
                                    )
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