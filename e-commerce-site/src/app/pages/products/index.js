



import Head from 'next/head';
import Link from 'next/link';

const products = [
  { id: 1, name: 'المنتج 1', price: 29.99 },
  { id: 2, name: 'المنتج 2', price: 49.99 },
  { id: 3, name: 'المنتج 3', price: 19.99 },
];

export default function Products() {
  return (
    <>
      <Head>
        <title>منتجاتنا</title>
        <meta name="description" content="تصفح مجموعة منتجاتنا." />
      </Head>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">المنتجات</h1>
        <ul className="mt-5">
          {products.map((product) => (
            <li key={product.id} className="mt-3">
              <Link href={`/products/${product.id}`}>
                <a className="text-blue-500">
                  {product.name} - ${product.price.toFixed(2)}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
