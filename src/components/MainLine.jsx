
const words = ["sadness", "emptiness", "loss", "depression", "despair", "shame","fear", "death", "war", "blood", "kill", "murder", "fire"]
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const num = '0123456789'

const MainLine = ({middleCount, counterX, counterY, yNum, letterNum, obsurb}) => {
    return (
        <div className='flex gap-1'>
        {Array.from({ length: middleCount }).map((_, i) => (
            <div className={`flex flex-col gap-1`} key={`e-${i}`}>
                {Array.from({ length: yNum }).map((_, j) => (
                    <div className={`py-1 ${obsurb ?'text-red-500' : 'text-green-400'} w-20`} key={`r-${j}`}>
                        {
                        obsurb ?
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
                ))}
            </div>
        ))}
        </div>
    )
}

export default MainLine