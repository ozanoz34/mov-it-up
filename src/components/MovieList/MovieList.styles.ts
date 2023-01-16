import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 50px 0;
  padding-bottom: 30px;
`;

const MovieListHeader = styled(Typography)`
  font-weight: bold !important;
  padding: 40px 20px !important;
`;

export { ListContainer, MovieListHeader };