import React, { useEffect, useState } from "react";
import "../assets/styles/components/NotFound.scss";

const NotFound = () => (
  <section className="Error">
    <h1 className="Error__404">404</h1>
    <h3 className="Error__notFound">Error: Module not found.</h3>
  </section>
);

export default NotFound;
