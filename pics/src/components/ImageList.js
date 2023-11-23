import ImageShow from './ImageShow';
import './ImageList.css';

function ImageList({ images }) {
    const renderedImages = images.map((img) => {
        return <ImageShow img={img} key={img.id}/>
    });

    return (
        <div className='image-list'>
            {renderedImages}
        </div>
    )
}

export default ImageList;