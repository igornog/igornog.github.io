import React, { useState, useRef } from "react";
import Button from '../../atoms/Button/Button'
import InputMask from "react-input-mask";

import './form.scss';
import './form-mb.scss';

function Form(){
    const [setNameActive, setNameActiveState] = useState("");
    const [setEmailActive, setEmailActiveState] = useState("");
    const [setNumberActive, setNumberActiveState] = useState("");
    const nameContent = useRef();
    const emailContent = useRef();
    const phoneContent = useRef();

    function watchInput() {
        setNameActiveState(`${nameContent.current.value}` !==  "" ? "active" : "");
        setEmailActiveState(`${emailContent.current.value}` !==  "" ? "active" : "");
        setNumberActiveState(`${phoneContent.current.value}` !==  "" ? "active" : "");
    }

    return (
        <>
            <form>
                <div className='input-wrapper'>
                    <input type="text" ref={nameContent} name="name" className={`${setNameActive}`} onChange={watchInput}></input>
                    <label>Nome completo</label>
                </div>
                <div className='input-wrapper'>
                    <input type="email" ref={emailContent} name="email" className={`${setEmailActive}`} onChange={watchInput}></input>
                    <label>Seu melhor e-mail</label>
                </div>
                <div className='input-wrapper'>
                    <InputMask
                        mask={"(99) 99999-9999"}
                        className={`${setNumberActive}`}
                        onChange={watchInput}
                        ref={phoneContent}
                        pattern="[0-9]*" 
                        inputmode="numeric"
                        name="cellphone"
                    />
                    <label>Seu telefone celular</label>
                </div>
                <Button>Pronto!</Button>
            </form>
        </>
        )
    }

export default Form;