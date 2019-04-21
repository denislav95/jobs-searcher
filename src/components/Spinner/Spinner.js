import React, {Component} from 'react';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

import './Spinner.css'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Spinner extends Component {

    render() {
        const {isLoading} = this.props;
        if(!isLoading) return null;
        return (
            <div className='sweet-loading'>
                <ClipLoader
                    css={override}
                    sizeUnit={"px"}
                    size={150}
                    color={'#123abc'}
                    loading={isLoading}
                />
            </div>

        );
    }
}

export default Spinner;