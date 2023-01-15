import { CreatedList } from '../';
import { CREATED_LIST_TYPE } from '../CreatedList/CreatedList.models';

const WatchList = () => (
  <CreatedList
    header="Watch Listed Movies"
    listType={CREATED_LIST_TYPE.WATCHLIST}
  />
);

export default WatchList;