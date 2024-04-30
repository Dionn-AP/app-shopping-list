import React, { useState, useEffect } from 'react';

import {
    ContainerTimer,
    TextMessageErro,
    TextTimer,
    ButtonResend,
    TextButtonResend
} from './styles';

const Timer = () => {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                    setMessage("O seu código expirou. Solicite um novo.");
                } else {
                    setMinutes((prevMinutes) => prevMinutes - 1);
                    setSeconds(59);
                }
            } else {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [minutes, seconds]);

    return (
        <ContainerTimer>
            {
                message ?
                    <TextMessageErro style={{ fontFamily: "Montserrat_600SemiBold" }}>
                        {message}
                    </TextMessageErro>
                    :
                    <TextTimer style={{ fontFamily: "Montserrat_600SemiBold" }}>
                        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </TextTimer>
            }
            {
                message &&
                <ButtonResend activeOpacity={0.8}>
                    <TextButtonResend style={{ fontFamily: "Montserrat_500Medium" }}>Reenviar</TextButtonResend>
                </ButtonResend>
            }
        </ContainerTimer>
    );
};

export default Timer;
