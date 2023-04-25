import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    router.replace("/product");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Product</Link>
      <button onClick={handleClick}>Place order</button>
    </div>
  );
}
export default Home;
