import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>مرحباً بكم في متجرنا الإلكتروني</title>
        <meta name="description" content="موقع تجارة إلكترونية بسيط مبني باستخدام Next.js" />
      </Head>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">مرحباً بكم في متجرنا</h1>
        <nav className="mt-5">
          <Link href="/products" className="text-blue-500">استعراض المنتجات</Link> |{' '}
          <Link href="/about" className="text-blue-500">معلومات عنا</Link>
        </nav>
      </div>
    </>
  );
}
