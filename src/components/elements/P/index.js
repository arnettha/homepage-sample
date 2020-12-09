import styled from '@emotion/styled';

const P = styled.p(props => ({
  fontSize: props.size || 16,
  lineHeight: props.lineHeight || '22px',
}));

export default P;
