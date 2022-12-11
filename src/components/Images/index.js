// Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

// API calls
import { fetchImages } from "../../services/api";
import { requestImages, resetAndRequestImages } from "../../store/actionCreators/images";

// State Selectors
import { isImagesLoading, getImages, getImagesPage } from '../../store/selectors';

// Components
import LoadingIndicator from '../LoadingIndicator';

// CSS Styles
import "./Images.css";

const LoadMoreButton = ({ onClick }) => (
    <p className="load-more" onClick={onClick}>
        Load More
    </p>
);

const Images = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const list = useSelector(getImages);
    const page = useSelector(getImagesPage);
    const loading = useSelector(isImagesLoading);

    useEffect(() => {
        if (category && !loading) {
            dispatch(resetAndRequestImages());
            fetchImages(dispatch, category);
        }
    }, [category]);

    const loadMore = () => {
        if (loading) {
            return;
        }

        dispatch(requestImages());
        fetchImages(dispatch, category, page + 1);
    };

    if (!category) {
        return '';
    }

    return (
        <div className='images-container'>
            <div className='image-list'>
                {list.map(({ url }, index) => (
                    <div className='image' key={index}>
                        <img src={url} />
                    </div>
                ))}
            </div>
            {!!loading && <LoadingIndicator />}

            <div className='images-footer'>
                {!loading && <LoadMoreButton onClick={loadMore} />}
            </div>
        </div>
    );
}

export default Images;