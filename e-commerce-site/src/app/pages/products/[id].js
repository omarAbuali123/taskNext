



import { useRouter } from 'next/router';
import Head from 'next/head';

const products = [
  { id: 1, name: 'المنتج 1', description: 'هذا هو المنتج 1', price: 29.99 },
  { id: 2, name: 'المنتج 2', description: 'هذا هو المنتج 2', price: 49.99 },
  { id: 3, name: 'المنتج 3', description: 'هذا هو المنتج 3', price: 19.99 },
];

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>المنتج غير موجود</p>;

  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
      </Head>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-3">{product.description}</p>
        <p className="mt-2">السعر: ${product.price.toFixed(2)}</p>
        <button className="mt-5 bg-blue-500 text-white py-2 px-4 rounded">أضف إلى السلة</button>
      </div>
    </>
  );
}
