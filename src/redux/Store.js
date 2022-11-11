import { createStore } from "redux";
import restaurantReducer from "./RestaurantReducer";

const restaurantStore = createStore(restaurantReducer);

export default restaurantStore;