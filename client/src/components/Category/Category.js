import React, { useEffect } from "react";

const Category = ({ setCategory }) => {
  const categories = [
    "House And Home",
    "Maps And Navigation",
    "Health And Fitness",
    "Travel And Local",
    "Music And Audio",
    "Communication",
    "Tools",
    "Entertainment",
    "News And Magazines",
    "Shopping",
    "Events",
    "Dating",
    "Lifestyle",
    "Books And Reference",
    "Weather",
    "Business",
    "Finance",
    "Social",
    "Photography",
    "Food And Drink",
    "Video Players",
    "Productivity",
    "Parenting",
    "Education",
    "Auto And Vehicles",
    "Medical",
    "Sports",
  ];

  useEffect(() => {
    setCategory(categories.map((el) => ({ value: el, label: el })));
  }, []);

  return (
    <>
      <div>
        <h2>Categories</h2>
      </div>
    </>
  );
};

export default Category;
