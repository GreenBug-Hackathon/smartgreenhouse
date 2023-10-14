
export const generalStatistics = async (req, res) => {
  try {
    const gas = false;
    const rain = 0.22;
    const light = 15;
    const humidity = 20;
    const temperature = 15;
    const soil = 30;

    res.send({
      gas,
      rain,
      light,
      humidity,
      temperature,
      soil,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ message: "Error during getting statistics" });
  }
};



export const analytics = async (req, res) => {
  try {
    const gas = false;
    const rain = 10;
    const light = 15;
    const humidity = 20;
    const temperature = 25;
    const soil = 30;

    res.send({
      gas,
      rain,
      light,
      humidity,
      temperature,
      soil,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ message: "Error during login" });
  }
}
