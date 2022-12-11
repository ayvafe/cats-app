// Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

// API calls
import { fetchCategories } from "../../services/api";

// State Selectors
import { getCategories } from '../../store/selectors';

// Styles
import "./Categories.css";

const Categories = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const list = useSelector(getCategories);

    useEffect(() => {
        fetchCategories(dispatch)
    }, []);

    const handleClick = (id) => navigate(`/images/${id}`);

    return (
        <div className='category-list'>
            {list.map(({ id, name }) => (
                <div className='category' key={id} onClick={handleClick.bind(null, id)}>
                    {name}
                </div>
            ))}
        </div>
    );
}

export default Categories;