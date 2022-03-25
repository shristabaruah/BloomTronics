import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Television",
    description:
      "Welcome to India's largest TV store",
  },
  {
    _id: uuid(),
    categoryName: "Smartphone",
    description:
    "India's Mobile superstore with greatest Deal of the year",
  },
  {
    _id: uuid(),
    categoryName: "Laptop",
    description:
      "India's Largest Laptop Store",
  },
  {
    _id: uuid(),
    categoryName: "HomeAppliances",
    description:
      "Our selection of home appliances has been designed to promote a comfortable and efficient lifestyle for you and your family",
  },
];
