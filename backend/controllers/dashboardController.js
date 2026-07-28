const Component = require("../models/Component");
const FAQ = require("../models/FAQ");
const Service = require("../models/Service");
const User = require("../models/User");


const getDashboardStats = async (req, res) => {
  try {

    const totalComponents = await Component.countDocuments();
    const totalFAQs = await FAQ.countDocuments();
    const totalServices = await Service.countDocuments();
    const totalUsers = await User.countDocuments();


    const components = await Component.find()
      .sort({ createdAt: -1 })
      .limit(3)
      .select("name createdAt");


    const services = await Service.find()
      .sort({ createdAt: -1 })
      .limit(3)
      .select("name createdAt");


    const faqs = await FAQ.find()
      .sort({ createdAt: -1 })
      .limit(3)
      .select("question createdAt");


    const users = await User.find()
      .sort({ createdAt: -1 })
      .limit(3)
      .select("name createdAt");


    const activities = [
      ...components.map((item) => ({
        title: `New component added: ${item.name}`,
        date: item.createdAt,
      })),

      ...services.map((item) => ({
        title: `New service added: ${item.name}`,
        date: item.createdAt,
      })),

      ...faqs.map((item) => ({
        title: `New FAQ added: ${item.question}`,
        date: item.createdAt,
      })),

      ...users.map((item) => ({
        title: `New user registered: ${item.name}`,
        date: item.createdAt,
      })),
    ];


    activities.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );


    res.json({
      totalComponents,
      totalFAQs,
      totalServices,
      totalUsers,
      activities: activities.slice(0, 5),
    });


  } catch (error) {

    console.log("Dashboard Error:", error);

    res.status(500).json({
      message: error.message,
    });

  }
};


module.exports = {
  getDashboardStats,
};