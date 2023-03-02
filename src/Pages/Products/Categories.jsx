import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Page } from "../../Layout/Page";
import AppService from "../../Components/Appservices/Appservice";
import useGetListItemsByEndPoint from "../../Components/Hooks/useGetListItemsByEndPoint";

const Categories = () => {
  const { state: categories } = useGetListItemsByEndPoint("categories");
  console.log(categories);
  // const [cats, setCats] = useState([]);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await AppService.GetList("categories");
  //       if (response.data) {
  //         console.log(response.data);
  //         setCats(response.data.items);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchCategories();
  // }, []);

  return (
    <Page title="Produkter">
      <h1>Produkter</h1>
      {/* <ul>
        {cats.map((cat, i) => {
          return (
            <li key={i}>
              <Link key={cat.id} to={`/products/${cat.id}`}>
                {cat.title}
              </Link>
            </li>
          );
        })}
      </ul> */}
      <Outlet />
    </Page>
  );
};

export default Categories;
