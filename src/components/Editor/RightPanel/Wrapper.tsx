const Wrapper = (props: {
  children?: JSX.Element | JSX.Element[] | null;
  className?: string;
}) => {
  return <div className={props.className}>{props.children}</div>;
};

export default Wrapper;
