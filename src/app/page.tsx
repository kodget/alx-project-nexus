import Layout from '@/components/layout/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          E-Commerce Product Catalog
        </h1>
        <p className="text-center text-gray-600">
          Dynamic product catalog coming soon...
        </p>
      </div>
    </Layout>
  )
}