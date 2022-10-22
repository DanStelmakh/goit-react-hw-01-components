import styled from '@emotion/styled';

export const Card = styled.div`
  padding: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${p => p.theme.borders.main};
  border-radius: ${p => p.theme.radii.main};
  background-color: ${p => p.theme.colors.backgroundCard};
  transition: ${p => p.theme.transitions.primary};
  &:hover {
    transform: scale(1.05);
  }
  box-shadow: ${p => p.theme.shadows.main};
`;

export const Text = styled.p`
  margin: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const Image = styled.img`
  margin-bottom: ${p => p.theme.space[4]}px;
  width: 48px;
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.main};
  border-radius: ${p => p.theme.radii.circle};
`;
