import { faker } from "@faker-js/faker"

const words = ["sadness", "emptiness", "loss", "depression", "despair", "shame","fear", "death", "war", "blood", "kill", "murder", "fire"]

const MainLine = ({middleCount, counterX, counterY, yNum, letterNum, obsurb}) => {
    return (
        <div className='flex gap-1'>
        {Array.from({ length: middleCount }).map((_, i) => (
            <div className={`flex flex-col gap-1`} key={`e-${i}`}>
                {Array.from({ length: yNum }).map((_, j) => (
                    <div className={`py-1 ${obsurb ?'text-red-100 bg-red-500' : 'text-green-400'} w-20`} key={`r-${j}`}>
                        {
                        obsurb ?
                            words[Math.floor(Math.random() * words.length)].slice(0, letterNum)
                        : counterY > j ?
                            (faker.datatype.number({ min: 1000, max: 9999 }) + counterX).toString().slice(0, letterNum)
                        :
                        faker.random.alphaNumeric(letterNum)
                        }
                    </div>
                ))}
            </div>
        ))}
        </div>
    )
}

export default MainLine