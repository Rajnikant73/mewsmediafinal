export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Blog Post: {params.slug}</h1>
    </div>
  );
}