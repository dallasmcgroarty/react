function ImageShow({ img }) {
    return (
        <div className="image-container">
            <img src={img.urls.small} id={img.id} alt={img.alt_description} />
        </div>
    )
}

export default ImageShow;