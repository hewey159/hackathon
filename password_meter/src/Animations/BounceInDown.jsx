
import { bounceInDown } from 'react-animations'

import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`${bounceInDown}`;

export const BounceInDownDiv = styled.div`
animation: 1s ${bounceAnimation};
`;