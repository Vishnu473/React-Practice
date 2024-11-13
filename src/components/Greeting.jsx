const Greeting = () => {
  const name = 'Vishnu';
  const dt = new Date();

  return (
    <div>
      <h1>'Hello, This is {name}</h1>
      <p>
        {dt.getDate()}-{dt.getMonth() + 1}-{dt.getFullYear()}
      </p>
    </div>
  );
};

export default Greeting;
