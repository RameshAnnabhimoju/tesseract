import React from "react";
import "./Products.css";
import Footer from "../../Components/Footer/Footer";
import ImageWithContent from "../../Components/ImageWithContent/ImageWithContent";
import {
  AssignmentsAndAlerts,
  NDISSector,
  ParticipantRegistry,
  Payroll,
  ProductsHero,
  StaffManagement,
} from "./ProductsData";
import TopNav from "../../Components/TopNav/TopNav";

const Products = () => {
  return (
    <div>
      <TopNav type="secondary" />
      <ImageWithContent data={ProductsHero} />
      <ImageWithContent data={StaffManagement} />
      <ImageWithContent data={NDISSector} />
      <ImageWithContent data={Payroll} />
      <ImageWithContent data={AssignmentsAndAlerts} />
      <ImageWithContent data={ParticipantRegistry} />
      <Footer />
    </div>
  );
};

export default Products;
