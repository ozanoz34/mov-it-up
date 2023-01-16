import { CreatedList } from '../';
import { CREATED_LIST_TYPE } from '../CreatedList/CreatedList.models';

const SearchResults = () => (
  <CreatedList
    header="Search Results"
    listType={CREATED_LIST_TYPE.SEARCH_RESULTS}
    data-testid="search-results-page"
  />
);

export default SearchResults;