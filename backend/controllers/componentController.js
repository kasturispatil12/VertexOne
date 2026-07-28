const Component = require("../models/Component");

const getComponents = async (req, res) => {
  try {
    const components = await Component.find().sort({ createdAt: -1 });
    res.status(200).json(components);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getComponentById = async (req, res) => {
  try {
    const component = await Component.findById(req.params.id);

    if (!component) {
      return res.status(404).json({
        message: "Component not found",
      });
    }

    res.status(200).json(component);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createComponent = async (req, res) => {
  try {
    const component = await Component.create({
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : "",
    });

    res.status(201).json(component);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateComponent = async (req, res) => {
  try {
    const updateData = {
      ...req.body,
    };

    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const component = await Component.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!component) {
      return res.status(404).json({
        message: "Component not found",
      });
    }

    res.status(200).json(component);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteComponent = async (req, res) => {
  try {
    const component = await Component.findByIdAndDelete(req.params.id);

    if (!component) {
      return res.status(404).json({
        message: "Component not found",
      });
    }

    res.status(200).json({
      message: "Component deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getComponents,
  getComponentById,
  createComponent,
  updateComponent,
  deleteComponent,
};