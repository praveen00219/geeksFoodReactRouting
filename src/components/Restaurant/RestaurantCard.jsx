import styles from "./RestaurantCard.module.css";

const RestaurantCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{props.name}</h3>
        <div className={styles.rating}>
          {[...new Array(5)].map((_, index) => (
            <i
              key={"start_icon_" + index}
              className={`fa-${
                parseInt(props.rating) >= index + 1 ? "solid" : "regular"
              } fa-star`}
            ></i>
          ))}
        </div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.location}>
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <span>{props.address}</span>
          </div>

          <div className={styles.postcode}>
            {`${props.outcode} ${props.postcode}`}
          </div>
        </div>
        <div className={styles.foodType}>
          <i className="fa-solid fa-utensils"></i>
          <span>{props.type_of_food}</span>
        </div>
        <a href="/menu" className={styles.menuLink}>
          Visit Menu
        </a>
      </div>
    </div>
  );
};

export default RestaurantCard;
