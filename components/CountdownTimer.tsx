import React, { FunctionComponent, useEffect, useState } from 'react'

type Props = {
    startTime: number
}

const CountdownTimer: FunctionComponent<Props> = ({ startTime }) => {

    const calculateTimeLeft = () => {
        const difference = +new Date(startTime) - +new Date();

        let timeLeft: {
            hours: number,
            minutes: number,
            seconds: number,
        } = {
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
              hours: Math.floor(difference / (1000 * 60 * 60)),
              minutes: Math.floor((difference / 1000 / 60) % 60),
              seconds: Math.floor((difference / 1000) % 60),
            };
          }
          // console.log(timeLeft)
          return timeLeft;      
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });


  return (
    <>
        {
            (timeLeft.seconds > 0 || timeLeft.minutes > 0) ?
            <div>
                {timeLeft.minutes < 10 ? '0' + timeLeft.minutes : timeLeft.minutes}
                :
                {timeLeft.seconds < 10 ? '0' + timeLeft.seconds : timeLeft.seconds}
            </div>
            :
            <div>00:00</div>

        }
    </>
  )
}

export default CountdownTimer