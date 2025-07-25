const CreateVideoLayout = ({ children }) => {
  return (
    <div>
      <ul className="steps steps-horizontal">
        <li data-content="●" className="step">
          <h1 className="">Upload</h1>
        </li>
        <li data-content="" className="step">
          Manage
        </li>
        <li data-content="" className="step">
          Review
        </li>
        <li data-content="" className="step">
          Publish
        </li>
      </ul>
      {children}
    </div>
  );
};

export default CreateVideoLayout;
