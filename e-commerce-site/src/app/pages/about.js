import Head from 'next/head';
import Image from 'next/image';
import aboutUsImage from '../public/about-us.jpg'; // تأكد من وجود الصورة في مجلد public

export default function About() {
  return (
    <>
      <Head>
        <title>معلومات عنا</title>
        <meta name="description" content="تعرف على المزيد حول شركتنا." />
      </Head>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">معلومات عنا</h1>
        <div className="mt-5">
          <Image src={aboutUsImage} alt="معلومات عنا" width={600} height={400} />
        </div>
        <p className="mt-5 max-w-md mx-auto">
          نحن شركة ملتزمة بتقديم أفضل المنتجات لعملائنا. هدفنا هو توفير منتجات عالية الجودة تلبي احتياجات الجميع.
        </p>
      </div>
    </>
  );
}
