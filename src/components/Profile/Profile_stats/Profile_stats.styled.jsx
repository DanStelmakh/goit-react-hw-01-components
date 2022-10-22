import styled from '@emotion/styled';

export const StatsList = styled.ul`
  padding: ${p => p.theme.space[0]};
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[0]};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;
  list-style: none;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
