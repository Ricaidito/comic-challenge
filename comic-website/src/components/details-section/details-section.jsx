const DetailsSection = ({ title, credits }) => {
  return credits?.length ? (
    <div>
      <h2>{title}</h2>
      <hr />
      <ul>
        {credits.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  ) : (
    <div>
      <h2>No {title.toLowerCase()} found!</h2>
      <hr />
    </div>
  );
};

export default DetailsSection;
