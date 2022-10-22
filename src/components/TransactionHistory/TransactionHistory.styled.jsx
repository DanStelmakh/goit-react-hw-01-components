import styled from '@emotion/styled';

export const Table = styled.table`
  margin-top: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.s};
  border-collapse: collapse;
  text-align: center;
  border: ${p => p.theme.borders.white};
  width: 575px;
`;

export const TH = styled.th`
  background: ${p => p.theme.colors.tableHead};
  color: ${p => p.theme.colors.tableText};
  font-size: ${p => p.theme.fontSizes.l};
  text-shadow: ${p => p.theme.shadows.text};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.white};
`;
export const TD = styled.td`
  border: ${p => p.theme.borders.white};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  background: ${p => p.theme.colors.tableRow};
`;
