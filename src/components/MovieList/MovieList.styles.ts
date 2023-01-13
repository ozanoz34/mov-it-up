import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MovieListHeader = styled(Typography)`
  font-weight: bold !important;
  margin: 40px 20px !important;
`;

export { ListContainer, MovieListHeader };