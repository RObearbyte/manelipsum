import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import images from '../../assets/img'
import './submit-button.css'

class SubmitButton extends Component {
    render() {
        return (
            <div className="submit-button-wrapper">
                <img src={images.salam} className="regele" alt="Florin Salam Regele Manelelor" />
                <Button size="lg" className="submit-button">Hai cu valoarea!</Button>
            </div>

        );
    }
}

export default SubmitButton;