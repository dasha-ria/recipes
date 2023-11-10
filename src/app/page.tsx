import Image from "next/image";
import Link from "next/link";

const recipes = ["fried-noodles", "teriyaki"];

export default function Home() {
  const formatRecipe = (recipe: any) => {
    return recipe
      .replace("-", " ")
      .toLowerCase()
      .split(" ")
      .map((word: any) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(" ");
  };

  return (
    <div className="p-2">
      {recipes.map((recipe, index) => (
        <Link key={index} href={`/recipe/${recipe}`}>
          <p>{formatRecipe(recipe)}</p>
        </Link>
      ))}
    </div>
  );
}
