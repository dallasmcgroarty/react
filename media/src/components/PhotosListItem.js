import { GoTrashcan } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";
import Button from "./Button";

function PhotosListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo)
  }

  return (
    <div onClick={handleRemovePhoto} className="relative cursor-pointer m-2">
      <img className="h-20 w-20" alt="random pic" src={photo.url} loading="lazy" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <Button loading={results.isLoading}>
          <GoTrashcan className="text-3xl"/>
        </Button>
      </div>
    </div>
  )
};

export default PhotosListItem;