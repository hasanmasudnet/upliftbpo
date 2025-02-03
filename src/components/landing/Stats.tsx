export default function Stats() {
  return (
    <div className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Real Results from Real Auto Shops
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">30%</div>
            <p>Increase in Service Revenue</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <p>Customer Support Availability</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">95%</div>
            <p>Customer Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
