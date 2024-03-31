const ImageGallery = ({url, title}) => {
    return (
        <div className="border gap-2 pb-2 flex flex-col items-center">
            <img src={url} alt="" className="w-full h-32" />
            <h4 className="text-gray-600 font-medium">{title}</h4>
        </div>
    );
};

export default ImageGallery;