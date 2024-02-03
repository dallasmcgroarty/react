import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = (event) => {
    event.stopPropagation();
    removeAlbum(album);
  }

  const header = (
    <>
      <Button className="mr-2" onClick={handleRemoveAlbum} loading={results.isLoading}>
        <GoTrashcan />
      </Button>
        {album.title}
    </>
  )

  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  )
}

export default AlbumListItem;