const mongoose = require('mongoose');

const PortsSchema = new mongoose.Schema({
  PortName: {
    type: Number,
    required: true,
  },
});

const PortModel = mongoose.model('PortData', PortsSchema);

module.exports = PortModel;
