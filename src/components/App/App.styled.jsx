import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.l};
  color: #${p => p.theme.colors.text};
`;
