import React from 'react';
import Button from '../../atoms/Button/Button'

import './form.scss';
import './form-mb.scss';

const Form = () => 
<>
<p>Ready to watch? Enter your email to create or restart your membership.</p>
<form>
    <div className='input-wrapper'>
        <input type="text" ></input>
        <label>Email address</label>
    </div>
    <Button>Get Started</Button>
</form>
</>

export default Form;