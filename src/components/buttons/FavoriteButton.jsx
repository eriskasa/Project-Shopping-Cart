import './FavoriteButton.css'
import FilletHeart from "../../assets/navbarimages/hear-filled.svg?react"
import OutlineHeart from "../../assets/navbarimages/heart-outline.svg?react"

const FavoriteButton = ({isFavorite, onToggleFavorite}) => {
  
  return (
    <button 
    className='favorite-button' 
    onClick={onToggleFavorite}
    aria-label={isFavorite ? "Remove from favorite" : "Add to favorites"}
    >
    {isFavorite ? <FilletHeart/> : <OutlineHeart/>}
    </button>
  );
}

export default FavoriteButton;