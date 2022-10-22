import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
`;

export const Image = styled.img`
  width: 48px;
  margin-right: ${p => p.theme.space[4]}px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-arround;
  align-items: center;
  border: ${p => p.theme.borders.transparent};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.tableRow};
  padding: ${p => p.theme.space[4]}px;
  box-shadow: ${p => p.theme.shadows.main};
`;

export const Chip = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: ${p => p.theme.radii.circle};
  margin-right: ${p => p.theme.space[4]}px;
  background-color: ${props => {
    switch (props.status) {
      case true:
        return p => p.theme.colors.online;
      case false:
        return p => p.theme.colors.offline;
      default:
        return p => p.theme.colors.default;
    }
  }};
`;
