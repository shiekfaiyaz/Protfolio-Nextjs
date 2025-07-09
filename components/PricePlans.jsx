export default function PricePlans() {
  const plans = [
    {
      title: 'Basic',
      type:'Website Development',
      subtitle:'Basic website setup with essential design and 1 page.',
      price: '$100',
      features: ['Delivery Time: 3 days', 'Revisions: 3', ' Number of Pages: 1', 'Design Customization', 'Content Upload', 'Responsive Design','Source Code Included'],
      popular: false,
    },
    {
      title: ' Standard Plan',
      type:'Multi-Page Website',
      subtitle:'A complete website with up to 5 pages, design customizations, and contact form.',
      price: '$200',
      features: ['Delivery Time: 10 days','Revisions: 3','Number of Pages: Up to 5','Design Customization','React/Next.js Website','Content Upload', ' Responsive Design','Source Code Included'],
      popular: true,
    },
    {
      title: 'Premium Plan',
      type:'Full-Stack Web Application',
      subtitle:'A custom web application with frontend, backend, user auth, and database.',
      price: '$500',
      features: [' Delivery Time: 25days', ' Revisions: Unlimited', ' Number of Pages: 12', 'Full Design + Dashboard',' User Authentication (JWT/Firebase)',' Database Integration (MongoDB/Firebase)','Admin Panel (Optional)','Responsive Design',' Source Code + Deployment'],
      popular: false,
    },
  ];

  return (

    <section id="pricing" className="dark:bg-gray-800 dark:text-white py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-2">Pricing Plans</h2>
      <p className="text dark:text-white gray-600 mb-8">Choose a plan that fits your project</p>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`dark:bg-black dark:text-white border rounded-lg p-6 shadow-md transition hover:scale-105 ${
              plan.popular ? 'bg-blue-50 border-blue-500' : 'bg-gray-50'
            }`}
          >
            {plan.popular && (
              <div className="mb-2 text-sm font-semibold text-blue-500">★ Most Popular</div>
            )}
            <h3 className="text-2xl font-semibold">{plan.title} {plan.price} </h3>
            <h1 className="font-bold text-2xl">{plan.type}</h1>
            <p className=" text-gray-800 dark:text-white font-light my-4">{plan.subtitle}</p>
            <p></p>
            <ul className="text-left mb-6 space-y-2">
              {plan.features.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  ✅ <span>{item}</span>
                </li>
              ))}
            </ul>
           <a href="https://www.upwork.com/freelancers/~016245cb361bf528ed"> <button className="w-full bg-purple-400 text-white py-2 rounded hover:bg-blue-400">
              Get Started
            </button></a>
          </div>
        ))}
      </div>
        <p className="text-gray-500  dark:text-white mt-10">"I typically charge $10/hr on Upwork, and I’m happy to adjust depending on the scope.😊 Let’s connect!"</p>
    </section>
  );
}
