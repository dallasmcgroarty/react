function PhotosListItem({ photo }) {
  return (
    <div>
      <img alt='example' src={photo.url} />
    </div>
  )
};

export default PhotosListItem;