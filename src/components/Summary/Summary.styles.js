/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const SummaryContainer = styled.div`
    text-align: left;

    #score {
        font-family: "Roboto"
    }

`
export const SummaryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    border-bottom: 0.3px solid #a0a0a0;  

`
/* line 16 - styled line between the result */

export const Scores = styled.div`
    border: 0.3px solid #a0a0a0;
    padding: 20px;
   
   #star {
        color: #ffDC00;
        font-size: 2rem;
        margin: 10px;
    }

    p {
        font-size: 1.1rem;
    }

    @media (min-width: 428px) {
        p {
            font-size: 1.5rem
        }
    }

`