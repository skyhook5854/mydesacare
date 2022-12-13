const ShowOn = ({ on, children, elseShow }) => (
  on ? children : (elseShow || null)
);

export default ShowOn;
