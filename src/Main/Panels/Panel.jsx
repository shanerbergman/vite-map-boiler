const Panel = ({ id }) => {
  console.log("id", id);
  return (
    <div style={{ backgroundColor: "#162d3c" }} className="mx-1 h-full w-52">
      {id}
    </div>
  );
};

export default Panel;
