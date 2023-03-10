import { CreatedList } from '../';
import { CREATED_LIST_TYPE } from '../CreatedList/CreatedList.models';

const FavoriteList = () => (
  <CreatedList
    header="Favorite Movies"
    listType={CREATED_LIST_TYPE.FAVORITE}
    data-testid="favorite-list"
  />
);

export default FavoriteList;