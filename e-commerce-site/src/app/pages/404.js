import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">404 - الصفحة غير موجودة</h1>
      <p className="mt-5">الصفحة التي تحاول الوصول إليها غير موجودة.</p>
      <Link href="/">
        <a className="mt-5 text-blue-500">العودة إلى الصفحة الرئيسية</a>
      </Link>
    </div>
  );
}
