import React, { useState } from 'react';
import { chakra, Grid, Text, Input, Button } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import Axios from 'axios';

const Ports = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});

var PortAnzahl = 50;

function Portgrid() {
  const [Vlan1, setVlan1] = useState('red');

  const [Port, setPorts] = useState(0);

  const addtolist = () => {
    Axios.post('http://localhost:3001', { PortNR: 5 });
  };

  function ColorChange() {
    setVlan1('green');
  }

  return (
    <div>
      <Input
        placeholder="text"
        size="m"
        type={Number}
        onChange={event => {
          setPorts(event.target.value);
        }}
      />
      <Input placeholder="nummer" size="m" />
      <Button onClick={addtolist} colorScheme="blue">
        Button
      </Button>
      <Grid templateColumns="repeat(6, 2fr)" gap={10}>
        {new Array(PortAnzahl).fill().map((v, i) => (
          <div
            className="PortsRender"
            key={i}
            onClick={() => {
              ColorChange(i);
              console.log(i);
            }}
          >
            <Text>PortNR {i + 1}</Text>
            <Ports
              whileHover={{ scale: 1.1 }}
              padding="2"
              bg={Vlan1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100px"
              height="100px"
              whileTap={{
                scale: 0.8,
                rotate: -90,
              }}
            ></Ports>
          </div>
        ))}
      </Grid>
    </div>
  );
}

export default Portgrid;
