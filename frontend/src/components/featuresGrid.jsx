

function featuresGrid() {
  const features = [
    {
      title: "Real-time Trading",
      description:
        "Execute trades instantly with our advanced matching engine and experience zero delays in transactions.",
      icon: "📈", // Replace this with an actual icon
    },
    {
      title: "Secure Storage",
      description:
        "Your assets are protected with military-grade encryption and multi-signature security protocols.",
      icon: "🔒", // Replace this with an actual icon
    },
    {
      title: "Social Trading",
      description:
        "Follow and copy successful traders' strategies while building your own community.",
      icon: "👥", // Replace this with an actual icon
    },
    {
      title: "Advanced Analytics",
      description:
        "Access comprehensive market data and personality performance metrics to make informed decisions.",
      icon: "📊", // Replace this with an actual icon
    },
    {
      title: "Low Fees",
      description:
        "Enjoy competitive trading fees and transparent pricing structure with no hidden charges.",
      icon: "💵", // Replace this with an actual icon
    },
    {
      title: "24/7 Support",
      description:
        "Get assistance anytime with our dedicated customer support team and comprehensive resources.",
      icon: "🛟", // Replace this with an actual icon
    },
  ];

  return (
    <div className=" text-white p-10 mt-3 mr-10 ml-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-neutral-900 p-6 rounded-lg shadow-md  hover:scale-105 transition-all duration-200"
          >
            <div className="text-green-500 text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default featuresGrid;
