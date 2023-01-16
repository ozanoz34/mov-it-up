import styled from 'styled-components';
import { Button } from '@mui/material';

const SearchInput = styled.input`
  width: 80%;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.5rem;
  margin: 40px 0;
`;

const SearchButton = styled(Button)`
  font-size: 1.5rem !important;
  border-radius: 10px !important;
  margin-left: -120px !important;
  margin-top: -8px !important;
`;


export { SearchInput, SearchButton};