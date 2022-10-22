import styled from '@emotion/styled';

export const UserStatistics = styled.section`
  background-color: ${p => p.theme.colors.backgroundCard};
  padding: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.main};
  width: 575px;
  border-radius: ${p => p.theme.radii.main};
`;

export const StatisticList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StatisticItem = styled.li`
  border-radius: ${p => p.theme.radii.normal};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  background-color: ${() => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;

export const StatisticTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
  display: flex;
  justify-content: center;
`;

export const StatisticTxt = styled.span`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;
