import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className="f5">
                {'This magic vision will detect faces'}
            </p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input
                        className="f4 pa2 w-70 center"
                        type='text'
                        onChange={onInputChange} />
                    <button
                        onClick={onButtonSubmit}
                        className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ImageLinkForm;
