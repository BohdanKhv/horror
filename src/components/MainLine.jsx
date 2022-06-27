import { faker } from "@faker-js/faker"

const MainLine = ({middleCount, counterX, counterY, yNum, letterNum}) => {
    return (
        <div className='flex gap-1'>
        {Array.from({ length: middleCount }).map((_, i) => (
            <div className={`flex flex-col gap-1`} key={`e-${i}`}>
                {Array.from({ length: yNum }).map((_, j) => (
                    <div className={`py-1 text-red-500 w-12`} key={`r-${j}`}>
                        {counterY > j ?
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