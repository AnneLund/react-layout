import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../../Components/Partials/Button";
import AppService from "../../Components/Appservices/Appservice";
import { useShoppingCardStore } from "../../Components/ShoppingCart/useShoppingCard";
import { GridContainer } from "../../Styles/GridContainer";

const Products = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  // const { increaseCartQuantity } = useShoppingCardStore();

  useEffect(() => {
    const renderProducts = async () => {
      try {
        const response = await AppService.GetList(`categories/${id}`);
        if (response.data) {
          console.log(response.data.item);
          setItems(response.data.item);
        }
      } catch (error) {
        console.error(error);
      }
    };

    renderProducts();
  }, []);

  return (
    <GridContainer>
      {items?.item?.products?.map((item, i) => (
        <figure key={i}>
          <img src={item.image.fullpath} alt={item.title} />
          {/* <Button onClick={() => increaseCartQuantity(item.id, item.title, item.image.fullpath)}>Læg i kurv</Button> */}
        </figure>
      ))}
    </GridContainer>
  );
};

export default Products;
