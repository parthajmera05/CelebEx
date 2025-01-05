

function HowItWorks(){
  const steps = [
    {
      number: "1",
      title: "Create Account",
      description:
        "Sign up and complete verification in minutes to start your trading journey",
      icon: "🤖", // Replace with an actual icon
    },
    {
      number: "2",
      title: "Fund Account",
      description:
        "Deposit funds using multiple payment methods including crypto and fiat",
      icon: "💳", // Replace with an actual icon
    },
    {
      number: "3",
      title: "Start Trading",
      description:
        "Buy and sell personality tokens with real-time execution and tracking",
      icon: "📈", // Replace with an actual icon
    },
  ];

  return (
    <div className="bg-neutral-900 text-white py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-gray-400 mt-2">
          Start trading personality tokens in three simple steps
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center bg-neutral-800 p-6 rounded-lg shadow-md w-80"
          >
            <div className="absolute -top-4 bg-green-500 w-10 h-10 flex items-center justify-center rounded-full text-black font-bold">
              {step.number}
            </div>
            <div className="text-green-500 text-4xl mb-4">{step.icon}</div>
            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-400 text-center">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-green-500 text-black py-3 px-6 rounded-full text-lg font-bold hover:bg-green-600 transition">
          Get Started Now
        </button>
        <p className="text-gray-400 mt-4">
          No credit card required • Get started in minutes
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
