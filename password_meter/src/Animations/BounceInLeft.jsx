
import { bounceInLeft } from 'react-animations'

import styled, { keyframes } from 'styled-components';

const bounceInLeftAnimation = keyframes`${bounceInLeft}`;

export const BounceInLeftDiv = styled.div`
animation: 1s ${bounceInLeftAnimation};

`;