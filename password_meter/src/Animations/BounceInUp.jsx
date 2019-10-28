
import { bounceInUp } from 'react-animations'

import styled, { keyframes } from 'styled-components';

const bounceInUpAnimation = keyframes`${bounceInUp}`;

export const BounceInUpDiv = styled.div`
animation: 1s ${bounceInUpAnimation};

`;